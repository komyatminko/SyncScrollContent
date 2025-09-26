import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  @ViewChild('rightContent') rightContent!: ElementRef;
  @ViewChild('leftSidebar') leftSidebar!: ElementRef;

  activeProduct: string = '';
  isScrollClick: boolean = false;

  categories = [
    {
      name: 'Category 1',
      products: [
        { id: 'p1', name: 'Product 1', description: 'Description 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' },
        { id: 'p2', name: 'Product 2', description: 'Description 2' },
        { id: 'p3', name: 'Product 3', description: 'Description 3' },
        { id: 'p4', name: 'Product 4', description: 'Description 4 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
        { id: 'p5', name: 'Product 5', description: 'Description 5' }
      ]
    },
    {
      name: 'Category 2',
      products: [
        { id: 'p6', name: 'Product 6', description: 'Description 6' },
        { id: 'p7', name: 'Product 7', description: 'Description 7' },
        { id: 'p8', name: 'Product 8', description: 'Description 8' },
        { id: 'p9', name: 'Product 9', description: 'Description 9' },
        { id: 'p10', name: 'Product 10', description: 'Description 10' },
        { id: 'p11', name: 'Product 11', description: 'Description 11' },
        { id: 'p12', name: 'Product 12', description: 'Description 12' },
      ]
    },
    // { name: 'Category 3', 
    //   products: [
    //     { id: 'p13', name: 'Product 13', description: 'Description 13' }, 
    //     { id: 'p14', name: 'Product 14', description: 'Description 14' }
    //   ] 
    // },
    // { name: 'Category 4', 
    //   products: [
    //     { id: 'p15', name: 'Product 15', description: 'Description 15' }, 
    //     { id: 'p16', name: 'Product 16', description: 'Description 16' }
    //   ] 
    // },
    // { name: 'Category 5', 
    //   products: [
    //     { id: 'p17', name: 'Product 17', description: 'Description 17' }, 
    //     { id: 'p18', name: 'Product 18', description: 'Description 18' }
    //   ] 
    // }
  ];

  get allProducts() {
    return this.categories.flatMap(c => c.products);
  }

  scrollTo(e: Event, productId: string) {
    e.preventDefault();
    this.activeProduct = productId;
    this.isScrollClick = true;

    console.log('Scrolling to', productId);
    const el = this.rightContent.nativeElement.querySelector('#' + productId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      this.isScrollClick = false;
    }, 1000);
  }

  ngAfterViewInit() {
    this.updateActiveProduct();
  }

  syncLeftRightScroll() {
    const rightEl = this.rightContent.nativeElement;
    const leftEl = this.leftSidebar.nativeElement;

    const scrollPercent = rightEl.scrollTop / Math.max(1, rightEl.scrollHeight - rightEl.clientHeight);;
    const leftScroll = scrollPercent * Math.max(1, (leftEl.scrollHeight - leftEl.clientHeight));

    leftEl.scrollTop = leftScroll;

    this.updateActiveProduct();
  }

  updateActiveProduct() {
    if (!this.isScrollClick) {
      const rightEl = this.rightContent.nativeElement;
      const products = rightEl.querySelectorAll('div[id]');

      // let currentActive = this.activeProduct;
      for (let i = 0; i < products.length; i++) {
        const rect = products[i].getBoundingClientRect();
        if (rect.top > rightEl.getBoundingClientRect().top) {
          this.activeProduct = products[i].id;
          break;
        }
      }
    }
    console.log('Active product:', this.activeProduct);

    // if (currentActive === this.activeProduct) {
      const leftItem = this.leftSidebar.nativeElement.querySelector(`li a[id="${this.activeProduct}"]`);
      if (leftItem) {
        leftItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    // }

  }

}

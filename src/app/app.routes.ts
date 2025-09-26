import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Department } from './components/department/department';
export const routes: Routes = [
    {
        path:"main",
        component: Main
    },
    {
        path:"zorro",
        component: Department
    }
];

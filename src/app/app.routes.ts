import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Department } from './components/department/department';
import { StartEndDate } from './components/start-end-date/start-end-date';
import { Step } from './components/step/step';
export const routes: Routes = [
    {
        path:"main",
        component: Main
    },
    {
        path:"zorro",
        component: Department
    },
    {
        path: "date",
        component: StartEndDate
    },
    {
        path: "step",
        component: Step
    },
    {
        path: "checkbox",
        loadComponent: () => import('./components/checkbox/checkbox').then(m => m.Checkbox)
    }
];

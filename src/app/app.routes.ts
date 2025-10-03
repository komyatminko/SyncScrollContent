import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Department } from './components/department/department';
import { StartEndDate } from './components/start-end-date/start-end-date';
import { Step } from './components/step/step';
import { LeaveBlockSetting } from './components/leave-block-setting/leave-block-setting';
import { MedicalClaimAmountSetting } from './components/medical-claim-amount-setting/medical-claim-amount-setting';
import { MaintenanceSetting } from './components/maintenance-setting/maintenance-setting';
import { PasswordSetting } from './components/password-setting/password-setting';
import { EmailSetting } from './components/email-setting/email-setting';
import { EmailNotificationSetting } from './components/email-notification-setting/email-notification-setting';
import { PendingReminderSetting } from './components/pending-reminder-setting/pending-reminder-setting';
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
    },
    {
        path: "leave-block-setting",
        component: LeaveBlockSetting
    },
    {
        path: "medical-claim-amt-setting",
        component: MedicalClaimAmountSetting
    },
    {
        path: "maintenance-setting",
        component: MaintenanceSetting
    },
    {
        path: "password-setting",
        component: PasswordSetting
    },
    {
        path: "email-setting",
        component: EmailSetting
    },
    {
        path: "email-noti-setting",
        component: EmailNotificationSetting
    },
    {
        path: "pending-reminder-setting",
        component: PendingReminderSetting
    }
];

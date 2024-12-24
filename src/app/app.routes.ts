import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlflowComponent } from './components/controlflow/controlflow.component';
import { GetAPIComponent } from './components/get-api/get-api.component';
import { OnlineLearningComponent } from './components/online-learning/online-learning.component';

export const routes: Routes = [
    {
        path: "user-page",
        component: UserComponent
    },
    {
        path: "admin-page",
        component: AdminComponent
    },
    {
        path: "data-binding",
        component: DataBindingComponent
    },
    {
        path: "control-flow",
        component: ControlflowComponent
    },
    {
        path: "get-api",
        component: GetAPIComponent
    },
    {
        path: "online-learning",
        component: OnlineLearningComponent
    },
];


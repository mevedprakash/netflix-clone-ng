import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { authGuard } from './gaurds/auth.guard';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"browse",
        component:BrowseComponent,
        canActivate:[authGuard]
    },
    {
        path:"**",
        redirectTo:"login"
    }
];

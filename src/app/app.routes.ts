import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent},
    { path: 'info', component: InfoComponent},


];

import { Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings'; 
import { MainLayout } from './main-layout/main-layout';
import { ItemsComponent } from './components/items/items';


export const routes: Routes = [
    { 
    path: '', 
    component: MainLayout,
    children: [
      { path: 'items', component: ItemsComponent },
      { path: 'configuracion', component: SettingsComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' } 
    ]
  }
];
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about_us.component';
import { HomeComponent } from  './components/home.component';
import { ContactComponent } from  './components/contact.component';

const appRoutes: Routes = [ 
	{path: '', component: HomeComponent},
	{path: 'quienes-somos', component: AboutUsComponent},
	{path: 'contact', component: ContactComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
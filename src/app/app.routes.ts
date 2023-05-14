import { Routes } from '@angular/router';

const authenticatedRoutes: Routes = [
	{
		path: 'dashboard',
		// resolve: { configData: ApplicationDataResolver },
		title: 'Dashboard',
		loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),

	},
	{
		path: 'homepage',
		// resolve: { configData: ApplicationDataResolver },
		title: 'Homepage',
		loadComponent: () => import('./components/homepage/homepage.component').then(m => m.Homepage),

	},
	{
		path: 'myboo',
		// resolve: { configData: ApplicationDataResolver },
		title: 'Homepage',
		loadComponent: () => import('./components/boo.bear/boo.bear.component').then(m => m.MyBoo),

	},
].map(route => ({
	...route,
})) as Routes;

export const APP_ROUTES: Routes = [
	{
		path: '',
		children: [...authenticatedRoutes],
	},
];

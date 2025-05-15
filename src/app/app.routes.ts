import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/landing-page/landing.component').then(m => m.LandingComponent),
            },
            // Puedes agregar más rutas hijas aquí
        ],
    },
    // Puedes agregar rutas públicas o especiales fuera del layout si quieres
];

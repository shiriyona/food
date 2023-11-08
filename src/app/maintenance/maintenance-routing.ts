import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

const routes: Routes = [
    { path: '', component: MaintenanceComponent },
    {
        path: '',
        redirectTo: 'maintenance',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MaintenanceRoutingModule {}
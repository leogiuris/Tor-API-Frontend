import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannedListComponent } from './banned-list/banned-list.component';
import { IpListComponent } from './ip-list/ip-list.component';
import { ValidListComponent } from './valid-list/valid-list.component';

const routes: Routes = [
	{ path: 'fullList', component: IpListComponent },
	{ path: 'validList', component: ValidListComponent },
	{ path: 'bannedList', component: BannedListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }

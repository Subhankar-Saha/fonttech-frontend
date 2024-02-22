import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
	declarations: [
		TopbarComponent,
		FooterComponent,
  		ModalComponent
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		TopbarComponent,
		FooterComponent,
		ModalComponent
	],
})
export class NavigationModule {
}

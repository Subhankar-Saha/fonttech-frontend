import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { NavigationModule } from "../navigation/navigation.module";
import { RaintreeModule } from "../raintree/raintree.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NavigationModule, RaintreeModule],
})
export class HomeModule {}

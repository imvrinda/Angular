
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewThreeComponent } from "src/app/view-three/view-three.component";
import { ViewTwoComponent } from "src/app/view-two/view-two.component";
import { ViewOneComponent } from "../view-one.component";
const routes: Routes = [
  { path: 'one', component: ViewOneComponent },
  { path: 'two', component: ViewTwoComponent },
  { path: 'three', component: ViewThreeComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class ViewOneRoutingModule { }
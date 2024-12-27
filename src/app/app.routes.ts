import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './ui/nav/nav.component';
import { ProductComponent } from './pages/product/product.component';
export const routes: Routes = [

{
    path:'',component:HomeComponent
},
{
    path:'product/:id',component:ProductComponent
}

];
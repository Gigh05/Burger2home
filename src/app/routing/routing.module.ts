import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { BurgerListComponent } from '../burgers/burger-list/burger-list.component';
import { SingleDrinkComponent } from '../drinks/single-drink/single-drink.component';
import { SingleDessertComponent } from '../desserts/single-dessert/single-dessert.component';
import { CartListComponent } from '../cart/cart-list/cart-list.component';
import { DrinkListComponent } from '../drinks/drink-list/drink-list.component';
import { DessertListComponent } from '../desserts/dessert-list/dessert-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'burgers', component: BurgerListComponent },
  { path: 'drinks/:id', component: SingleDrinkComponent },
  { path: 'drinks', component: DrinkListComponent },
  { path: 'desserts/:id', component: SingleDessertComponent },
  { path: 'desserts', component: DessertListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
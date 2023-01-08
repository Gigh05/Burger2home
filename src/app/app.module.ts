import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NgxTranslateModule } from './translate/translate.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleBurgerComponent } from './burgers/single-burger/single-burger.component';
import { BurgerListComponent } from './burgers/burger-list/burger-list.component';
import { DessertListComponent } from './desserts/dessert-list/dessert-list.component';
import { SingleDessertComponent } from './desserts/single-dessert/single-dessert.component';
import { DrinkListComponent } from './drinks/drink-list/drink-list.component';
import { SingleDrinkComponent } from './drinks/single-drink/single-drink.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartProductComponent } from './cart/cart-product/cart-product.component';
import { BurgerExtraComponent } from './burgers/burger-extra/burger-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SingleBurgerComponent,
    BurgerListComponent,
    DessertListComponent,
    SingleDessertComponent,
    DrinkListComponent,
    SingleDrinkComponent,
    CartListComponent,
    CartProductComponent,
    BurgerExtraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    NgxTranslateModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

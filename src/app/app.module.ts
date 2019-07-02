import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routing } from './app.routes';
import { AppComponent } from './app.component';
import { TotalPipe } from './total.pipe';
import { TotalCostePipe } from './total-coste.pipe';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemService } from './items/shared/item.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './items/item/item.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { CartService } from './items/shared/cart.service';
import { OrderComponent } from './order-items/order/order.component';
import { CartComponent } from './order-items/cart/cart.component';
import { ShippingComponent } from './order-items/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    TotalCostePipe,
    ItemListComponent,
    ItemComponent,
    ItemEditComponent,
    ItemNewComponent,
    OrderComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ItemService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

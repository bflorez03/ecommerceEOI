import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ModuleWithProviders } from '@angular/core';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { OrderComponent } from './order-items/order/order.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'item/:id', component: ItemEditComponent },
  { path: 'new', component: ItemNewComponent },
  { path: 'order', component: OrderComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

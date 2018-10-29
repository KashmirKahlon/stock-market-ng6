import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CreateStockComponent } from './stock/create-stock/create-stock.component'
import { StockItemComponent } from './stock/stock-item/stock-item.component'

@NgModule({
  declarations: [AppComponent, StockItemComponent, CreateStockComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

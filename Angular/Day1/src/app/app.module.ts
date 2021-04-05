import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { StructuraldirectivedemoComponent } from './structuraldirectivedemo/structuraldirectivedemo.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing';
import { MyErrorHandlerService } from './my-error-handler.service';
import { LogService } from './log.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Share2compoComponent } from './share2compo/share2compo.component';
import { MaterialTableProductComponent } from './material-table-product/material-table-product.component';
import { AttributedirectDirective } from './attributedirect.directive';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    StructuraldirectivedemoComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Child1Component,
    Child2Component,
    Share2compoComponent,
    MaterialTableProductComponent,
    AttributedirectDirective,
    GlobalErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule,
    BrowserAnimationsModule,MatExpansionModule

  ],
  providers: [{provide:ErrorHandler,useClass:MyErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

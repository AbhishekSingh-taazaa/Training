import { ApplicationModule, NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { Share2compoComponent } from './share2compo/share2compo.component';
import { StructuraldirectivedemoComponent } from './structuraldirectivedemo/structuraldirectivedemo.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';

    const routes: Routes = [
        {
            path: 'T-shirt',
            component: TshirtdatabindingComponent,
        },
        {
            path: 'Attribute',
            component: StructuraldirectivedemoComponent,
        },
        {
            path: 'Product-store',
            component: ProductComponent,
        },
        {
            path: 'Purchase-Details',
            component: PurchaseComponent,
        },
        {
            path:'' , redirectTo:'Home',pathMatch:'full'} ,
            {
                path: 'ShareData',
                component: Share2compoComponent,
                
            } ,
            {
                path:'Home',
                component : HomeComponent
            } ,
            {
                path: 'Globalerror',
                component: GlobalErrorComponent,
            }     
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
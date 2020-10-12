import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './views/home/home.component';

import { CategoriaComponent } from './views/categoria/categoria.component';
import { CategoriaReadComponent } from './components/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';

import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

import { PedidoComponent } from './views/pedido/pedido.component';
import { PedidoReadComponent } from './components/pedido/pedido-read/pedido-read.component';
import { PedidoCreateComponent } from './components/pedido/pedido-create/pedido-create.component';
import { PedidoUpdateComponent } from './components/pedido/pedido-update/pedido-update.component';

import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    ForDirective,
    CategoriaComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    ProdutoComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    UsuarioComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    PedidoComponent,
    PedidoReadComponent,
    PedidoCreateComponent,
    PedidoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './admin/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AdminComponent } from './admin/admin.component';
import { EstabelecimentoComponent } from './admin/cadastro/estabelecimento/estabelecimento.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EntregadorComponent } from './admin/cadastro/entregador/entregador.component';
import { ProdutoComponent } from './admin/cadastro/produto/produto.component';
import { PedidosComponent } from './admin/gestao/pedidos/pedidos.component';
import { EntregasComponent } from './admin/gestao/entregas/entregas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { RastrearEntregasComponent } from './admin/gestao/rastrear-entregas/rastrear-entregas.component';
import { EstabelecimentosComponent } from './admin/relatorios/estabelecimentos/estabelecimentos.component';
import { EntregadoresComponent } from './admin/relatorios/entregadores/entregadores.component';
import { ProdutosComponent } from './admin/relatorios/produtos/produtos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    AdminComponent,
    EstabelecimentoComponent,
    LoginComponent,
    EntregadorComponent,
    ProdutoComponent,
    PedidosComponent,
    EntregasComponent,
    RastrearEntregasComponent,
    EstabelecimentosComponent,
    EntregadoresComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,    
    MatFileUploadModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EstabelecimentoComponent } from './admin/cadastro/estabelecimento/estabelecimento.component';
import { LoginComponent } from './login/login.component';
import { EntregadorComponent } from './admin/cadastro/entregador/entregador.component';
import { ProdutoComponent } from './admin/cadastro/produto/produto.component';
import { PedidosComponent } from './admin/gestao/pedidos/pedidos.component';
import { EntregasComponent } from './admin/gestao/entregas/entregas.component';
import { RelatoriosComponent } from './admin/relatorios/relatorios.component';
import { RastrearEntregasComponent } from './admin/gestao/rastrear-entregas/rastrear-entregas.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin',
    component: AdminComponent, children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'cadastro-estabelecimento', component: EstabelecimentoComponent },
        { path: 'cadastro-entregador', component: EntregadorComponent },
        { path: 'cadastro-produto', component: ProdutoComponent },
        { path: 'gestao-pedidos', component: PedidosComponent },
        { path: 'gestao-entregas', component: EntregasComponent },
        { path: 'relatorios', component: RelatoriosComponent },
        { path: 'rastrear-entregas', component: RastrearEntregasComponent },

        { path: '**', redirectTo: 'dashboard' },
    ] 
  },
  { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

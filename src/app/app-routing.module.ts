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
import { RastrearEntregasComponent } from './admin/gestao/rastrear-entregas/rastrear-entregas.component';
import { EstabelecimentosComponent } from './admin/relatorios/estabelecimentos/estabelecimentos.component';
import { EntregadoresComponent } from './admin/relatorios/entregadores/entregadores.component';
import { ProdutosComponent } from './admin/relatorios/produtos/produtos.component';
import { FormaPagamentoComponent } from './admin/cadastro/forma-pagamento/forma-pagamento.component';
import { UsuariosComponent } from './admin/cadastro/usuarios/usuarios.component';


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
        { path: 'rastrear-entregas', component: RastrearEntregasComponent },

        { path: 'relatorio-estabelecimento', component: EstabelecimentosComponent },
        { path: 'relatorio-entregador', component: EntregadoresComponent },
        { path: 'relatorio-produto', component: ProdutosComponent },

        { path: 'forma-pagamento', component: FormaPagamentoComponent },

        { path: 'usuarios', component: UsuariosComponent },


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

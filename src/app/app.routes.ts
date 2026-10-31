import { Routes } from '@angular/router';

import { Funcionario } from './component/funcionario/funcionario';
import { CadItens } from './component/painelADM/cad-itens/cad-itens';
import { Consultapedido } from './component/painelADM/consultapedido/consultapedido';
import { EntradaProdutos } from './component/painelADM/entrada-produtos/entrada-produtos';
import { Carrinho } from './component/painelCliente/carrinho/carrinho';
import { Categoria } from './component/painelCliente/categoria/categoria';
import { ListarCliente } from './component/painelCliente/cliente/listar-cliente/listar-cliente';
import { TelaHistorico } from './component/painelCliente/tela-historico/tela-historico';
import { Tela01 } from './component/painelCliente/catalogo/tela01';
import { Menu } from './component/menu/menu';

export const routes: Routes = [
    {
        //JOGA PARA PÁGINA INICIAL SE A URL FICAR VÁZIA
        path:'',
        redirectTo:"/menu",
        pathMatch:'full'
    },
    {
        path:"funcionario",
        component: Funcionario
    },
    {
        path:'cadItens',
        component:CadItens
    },
    {
        path:'consultaPedido',
        component:Consultapedido
    },
    {
        path:'entradaProdutos',
        component: EntradaProdutos
    },
    {
        path:'carrinho',
        component: Carrinho
    },
    {
        path:'categoria',
        component: Categoria
    },
    {
        path:'listarCliente',
        component: ListarCliente
    },
    {
        path:'telaHistorico',
        component: TelaHistorico
    },
    {
        path:'tela01',
        component: Tela01
    },
    {
        path:'menu',
        component: Menu
    }

];

import { Routes } from '@angular/router';

import { Funcionario } from './component/funcionario/funcionario';
import { CadItens } from './component/painelADM/cad-itens/cad-itens';
import { Consultapedido } from './component/painelADM/consultapedido/consultapedido';
import { EntradaProdutos } from './component/painelADM/entrada-produtos/entrada-produtos';
import { Carrinho } from './component/painelCliente/carrinho/carrinho';
import { Categoria } from './component/painelCliente/categoria/categoria';
import { ListarCliente } from './component/painelCliente/cliente/listar-cliente/listar-cliente';
import { TelaHistorico } from './component/painelCliente/tela-historico/tela-historico';
import { Tela01 } from './component/painelCliente/tela01/tela01';

export const routes: Routes = [
    {
        //JOGA PARA PÁGINA INICIAL SE A URL FICAR VÁZIA
        path:'',
        redirectTo:"/home",
        pathMatch:'full'
    },
    {
        path:"Funcionario",
        component: Funcionario
    },
    {
        path:'cadItens',
        component:CadItens
    },
    {
        path:''
    }
];

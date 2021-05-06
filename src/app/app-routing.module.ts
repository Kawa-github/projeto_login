import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'atendimento',
    loadChildren: () => import('./atendimento/atendimento.module').then( m => m.AtendimentoPageModule)
  },
  {
    path: 'unidades',
    loadChildren: () => import('./unidades/unidades.module').then( m => m.UnidadesPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 

  
  
  //{
    //path: 'conexao.php',
    //loadChildren: () => import('./conexao.php/conexao.php.module').then( m => m.Conexao.PhpPageModule)
  //}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

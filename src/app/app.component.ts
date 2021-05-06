import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Clientes', url: 'clientes', icon: 'people' },
    { title: 'Consulta', url: 'consulta', icon: 'medkit' },
    { title: 'Atendimento', url: 'atendimento', icon: 'call' },
    { title: 'Unidades', url: 'unidades', icon: 'map' },
    { title: 'Usuarios', url: 'add-usuario', icon: 'map' },

  ];
  
  constructor() {}
}

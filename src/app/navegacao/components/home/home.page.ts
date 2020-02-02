import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  tituloPagina:any;
  novoTitulo: any;
  editarTitulo: any;

  constructor(
    private translateService: TranslateService,
    private router: Router) { }

  ngOnInit() {
    this.aguardeTitulo();
  }

  aguardeTitulo(){
    this.tituloPagina = this.translateService.instant('Home');
  }

  cadastrarConta(){
    this.router.navigate(['/cadastro'])
  }

}

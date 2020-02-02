import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario-form',
  templateUrl: './cadastro-usuario-form.page.html',
  styleUrls: ['./cadastro-usuario-form.page.scss'],
})
export class CadastroUsuarioFormPage implements OnInit {
  
  tituloPagina: any;
  novoTitulo: any;
  editarTitulo: any;
  usuarioId: any;

  cadastroForm: FormGroup;
  
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.aguardeTitulo();
  }

  aguardeTitulo(){
    this.tituloPagina = this.translateService.instant('Cadastro');
    this.novoTitulo = this.translateService.instant('NovoTitulo');
    this.editarTitulo = this.translateService.instant('EditarTitulo');
  }

}
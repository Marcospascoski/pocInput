import { Component, OnInit, AfterContentChecked, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  
  @Output() titulo:any;
  @Input('tituloPagina') tituloPagina: any;
  @Input('novoTitulo') novoTitulo: any;
  @Input('editarTitulo') editarTitulo : any;
  @Input('grupoFormulario') grupoFormulario: FormGroup;
  @Input('itemId') itemId: any;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    console.log(this.tituloPagina)
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  protected setPageTitle() {
    if (this.itemId) {
      this.titulo = this.statusEditarDados();
    } else {
      this.titulo = this.statusAdicionarDados();
    }
  }

  protected statusAdicionarDados() {
    this.translateService.get(this.tituloPagina)
      .subscribe(resposta => this.titulo = resposta);
    return this.titulo;
  }

  protected statusEditarDados() {
    const descrisao = this.itemId ? this.grupoFormulario.get(this.titulo).value : '';
    this.translateService.get(this.editarTitulo)
      .subscribe(resposta => this.titulo = resposta);
    return this.titulo + descrisao;
  }

}

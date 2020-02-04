import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControlName, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioModel } from '../models/usuario.model';
import { GenericFormValidator, ValidationMessages, DisplayMessage } from 'src/app/navegacao/validators/generic-form-validation/generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { SenhaValidator } from 'src/app/navegacao/validators/senha-validator/senha.validator';
import { EmailValidator } from './../../navegacao/validators/email-validator/email.validator';

@Component({
  selector: 'app-cadastro-usuario-form',
  templateUrl: './cadastro-usuario-form.page.html',
  styleUrls: ['./cadastro-usuario-form.page.scss'],
})
export class CadastroUsuarioFormPage implements OnInit, AfterViewInit {

  tituloPagina: any;
  novoTitulo: any;
  editarTitulo: any;
  usuarioId: any;

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: UsuarioModel;
  formResult: string = '';
  /* MASKS = utilsBr.MASKS; */

  validationMessages: ValidationMessages;
  genericFormValidator: GenericFormValidator;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas: boolean;

  nomePadrao: any;
  cpfPadrao: any;
  emailPadrao: any;
  confirmaEmailPadrao: any;
  senhaPadrao: any;
  confirmaSenhaPadrao: any;  

  constructor(private translateService: TranslateService, private fb: FormBuilder) {

    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericFormValidator = new GenericFormValidator(this.validationMessages);
  }

  ngOnInit() {
    this.carregarTitulo();
    this.carregarPadroes();
    this.adicionarGrupoFormulario( new UsuarioModel());    
  }

  private carregarTitulo() {
    this.tituloPagina = this.translateService.instant('Cadastro');
    this.novoTitulo = this.translateService.instant('NovoTitulo');
    this.editarTitulo = this.translateService.instant('EditarTitulo');
  }

  private carregarPadroes() {
    this.nomePadrao = { propertyName: this.translateService.instant('Nome'), minLength: 3, maxLength: 100 }
    this.emailPadrao = { propertyName: this.translateService.instant('Email'), minLength: 3, maxLength: 100 }
    this.cpfPadrao = { propertyName: this.translateService.instant('Email'), minLength: 3, maxLength: 100 }
    this.confirmaEmailPadrao = { propertyName: this.translateService.instant('ConfirmaEmail'), minLength: 3, maxLength: 100, comparisonValue: 'Email' }
    this.senhaPadrao = { propertyName: this.translateService.instant('Senha'), minLength: 3, maxLength: 10 }
    this.confirmaSenhaPadrao = { propertyName: this.translateService.instant('ConfirmaSenha'), minLength: 3, maxLength: 10, comparisonValue: 'Senha' }
  }

  private adicionarGrupoFormulario(usuario: UsuarioModel) {
    this.cadastroForm = this.fb.group({
      id: [usuario.id],
      nome: [usuario.nome, [Validators.required, Validators.minLength(this.nomePadrao.minLength), Validators.maxLength(this.nomePadrao.maxLength)]],
      cpf: [usuario.cpf, [Validators.required]],
      email: [usuario.email, [Validators.required, Validators.email, Validators.minLength(this.emailPadrao.minLength), Validators.maxLength(this.emailPadrao.maxLength)]],
      confirmaEmail: [usuario.email, [Validators.required, Validators.email, Validators.minLength(this.confirmaEmailPadrao.minLength), Validators.maxLength(this.confirmaEmailPadrao.maxLength), EmailValidator.MatchEmail]],
      senha: [usuario.senha, [Validators.required, Validators.minLength(this.senhaPadrao.minLength), Validators.maxLength(this.senhaPadrao.maxLength)]],
      confirmaSenha: [usuario.senha, [Validators.required, Validators.minLength(this.confirmaSenhaPadrao.minLength), Validators.maxLength(this.confirmaSenhaPadrao.maxLength), SenhaValidator.MatchPassword]],
    });
  }

  ngAfterViewInit() {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericFormValidator.processarMensagens(this.cadastroForm);
      this.mudancasNaoSalvas = true;
    });
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);

      this.mudancasNaoSalvas = false;
    }
    else {
      this.formResult = "Não submeteu!!!"
    }
  }
}
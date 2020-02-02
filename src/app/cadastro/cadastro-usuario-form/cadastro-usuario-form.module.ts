import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CadastroUsuarioFormPageRoutingModule } from './cadastro-usuario-form-routing.module';
import { CadastroUsuarioFormPage } from './cadastro-usuario-form.page';
import { NavegacaoModule } from 'src/app/navegacao/navegacao.module';

@NgModule({
  imports: [
    NavegacaoModule,
    CadastroUsuarioFormPageRoutingModule
  ],
  declarations: [CadastroUsuarioFormPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioFormPageModule {}

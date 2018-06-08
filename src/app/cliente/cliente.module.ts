import { ClienteComponent } from './cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { PostagensComponent } from './postagens/postagens.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClienteComponent,
    SectionComponent,
    PortifolioComponent,
    ContatoComponent,
    HomeAboutComponent,
    PageContatoComponent,
    PostagensComponent
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }

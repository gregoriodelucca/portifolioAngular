import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';

@Component({
  selector: 'app-root',
  standalone: true, // Marca o componente como standalone
  imports: [
    FooterComponent,
    SobreComponent,
    ServicosComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Certifique-se de que o arquivo CSS está neste caminho
})
export class AppComponent {
  title = 'landing-page';
}

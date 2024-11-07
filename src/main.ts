import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FooterComponent } from './app/footer/footer.component';
import { SobreComponent } from './app/sobre/sobre.component';
import { ServicosComponent } from './app/servicos/servicos.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([]) // Se necessário, configure suas rotas aqui
  ]
})
  .catch(err => console.error(err));


import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/livros/livros-module';

platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';
import { MenuComponent } from './shared/menu/menu.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, TitleComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
}

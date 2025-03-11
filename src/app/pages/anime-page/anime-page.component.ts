import { Component} from '@angular/core';
import { AnimeCardsComponent } from "../../components/anime-cards/anime-cards.component";

@Component({
  selector: 'app-header',
  imports: [AnimeCardsComponent],
  templateUrl: 'Anime-page.component.html',
  styleUrl: './Anime-page.component.scss'
})
export class AnimePageComponent{
 
}

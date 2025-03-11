import { Routes } from '@angular/router';
import { MangaPageComponent } from './pages/manga-page/manga-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
      },
    {
        path: 'Animes',
        component: AnimePageComponent,
      },
      {
        path: 'Mangas',
        component: MangaPageComponent,
      },
      {
        path: 'Capitulos',
        component: VideosPageComponent,
      },
      {
        path: 'Personajes',
        component: CharactersPageComponent,
      },
];

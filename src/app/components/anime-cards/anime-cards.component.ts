import { Component, OnInit } from '@angular/core';
import { AnimesApiService } from '../../services/animes-api.service';
import { AnimesApi2Service } from '../../services/animes-api2.service';
import { AnimesApi3Service } from '../../services/animes-api3.service';


@Component({
  selector: 'app-anime-cards',
  imports: [],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card-component.scss',
})
export class AnimeCardsComponent implements OnInit{

  
  elementos: any[] = [];
  elementos2: any[] = [];
  elementos3: any[] = [];
  index= 0;
 
  constructor(private AnimesApiService: AnimesApiService, private AnimesApi2Service: AnimesApi2Service, private AnimesApi3Service: AnimesApi3Service){}
  ngOnInit(): void {
    this.llenarData();
    this.llenarData2();
    this.llenarData3()
  }
  
  llenarData(){
    this.AnimesApiService.getData().subscribe( data => {
      this.elementos = data.data;
      console.log(this.elementos)
    })
  }

  llenarData2() {
    this.AnimesApi2Service.getData().subscribe(datos => {
      this.elementos2 = datos.data;
      console.log(this.elementos2)
  })
  }
  llenarData3() {
    this.AnimesApi3Service.getData().subscribe(masDatos => {
      this.elementos3 = masDatos.data;
      console.log(this.elementos3)
  })
  }
}

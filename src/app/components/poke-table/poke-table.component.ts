import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

displayedColumns: string[] = ['position', 'image', 'name'];
data: any [] = [];
datasource = new MatTableDataSource<any>(this.data);


@ViewChild


constructor(private PokeService: PokemonService) { 


}

ngOnInit(): void {
    this.getPokemons();
}


getPokemons()
{
for(let i = 1; i <= 150; i++) { 

    this.PokeService.getPokemons(i).subscribe (
      res=> {
      console.log(res);
      },
      err=>{ 
    
      }
    );

}
}


}

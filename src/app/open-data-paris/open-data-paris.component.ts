import { Component, OnInit } from '@angular/core';
import { OpenDataParisService } from "app/services/opendata-paris.service";

@Component({
  selector: 'app-open-data-paris',
  templateUrl: './open-data-paris.component.html',
  styleUrls: ['./open-data-paris.component.css']
})
export class OpenDataParisComponent implements OnInit {

  private listeLivres = [];

  constructor(private openDataParisService:OpenDataParisService) { }

  ngOnInit() {
  }

  
  private obtenirLivresPretes() {
      this.openDataParisService.obtenirLivresPretesParis()
                  .subscribe(res => this.listeLivres = res.records,
                  err => console.log(err),
                  () => console.dir(this.listeLivres)
                    );
  }




}

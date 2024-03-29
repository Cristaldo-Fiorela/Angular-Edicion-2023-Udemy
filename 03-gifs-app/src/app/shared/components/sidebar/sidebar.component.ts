import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // inyectar el servicio GIFS SERVICE privado
  constructor( private gifsService: GifsService ) {}

  get tagHistory() {
    return this.gifsService.tagsHistory;
  }
}

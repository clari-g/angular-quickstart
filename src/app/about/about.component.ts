import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(): void {
    this.imagesService.getAlbumImgs(environment.imgurAlbumHash)
      .subscribe(response => {
        console.log(response);
      });
  }

}

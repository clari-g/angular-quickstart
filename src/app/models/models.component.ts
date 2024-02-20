import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  public models = new Array();
  public loadedModels = 0;
  public viewModels = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let models = [
      {
        title: 'Low Poly Cat',
        url: this.sanitizer.bypassSecurityTrustResourceUrl('https://sketchfab.com/models/f10a23388e114300af94ca28c6a8906b/embed?autostart=1&camera=0')
      }
    ];
    this.models = models;
  }

  loaded() {
    this.loadedModels++;
    if(this.models.length == this.loadedModels){
      this.viewModels = true;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixelart',
  templateUrl: './pixelart.component.html',
  styleUrls: ['./pixelart.component.scss']
})
export class PixelartComponent implements OnInit {

  public gallery = [
    'https://i.imgur.com/BljNWYJ.png',
    'https://i.imgur.com/ntZlBEX.png',
    'https://i.imgur.com/4y63Eyo.png',
    'https://imgur.com/V1upy6c.gif',
    'https://i.imgur.com/PqgJJJM.gif',
    'https://i.imgur.com/he6IISb.png',
    'https://i.imgur.com/U9ILEbb.png',
    'https://i.imgur.com/XpreXyL.png',
    'https://i.imgur.com/nIOqmba.png',
    'https://i.imgur.com/6VqBleY.png',
    'https://i.imgur.com/wnLwwRc.png',
    'https://i.imgur.com/mxyCzyj.png',
    'https://i.imgur.com/I7SPjKG.png',
    'https://i.imgur.com/ZelEzbu.gif',
    'https://i.imgur.com/N6C4kmx.png',
    'https://i.imgur.com/88FrsEf.png',
    'https://i.imgur.com/RorRSss.png',
    'https://i.imgur.com/LVs5Xp1.png',
    'https://i.imgur.com/6Frj9hc.png',
    'https://i.imgur.com/wEoTzaC.png',
    'https://i.imgur.com/2DsOvrw.png',
    'https://i.imgur.com/TRKz2yd.png',
    'https://i.imgur.com/0Z5TU45.png',
    'https://i.imgur.com/GtNqhsw.png',
    'https://i.imgur.com/ovG7WSv.png',
    'https://i.imgur.com/rkv7bcv.png',
    'https://i.imgur.com/oT2K9xR.gif',
    'https://i.imgur.com/6vM7LRB.png',
    'https://i.imgur.com/Yn0V5eO.png',
    'https://i.imgur.com/zfHgw9s.png',
  ];
  public loadedImgs = 0;
  public viewImage = false;
  public zoom = false;

  constructor() { }

  ngOnInit() {
  }

  loaded() {
    this.loadedImgs++;
    if(this.gallery.length == this.loadedImgs){
      this.viewImage = true;
    }
  }

  toggleView(id: string) {
    if(window.innerWidth < 580){
      this.zoom = !this.zoom;
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          block: "center",
          inline: "nearest"
        });
      }, 0);
    }
  }

}

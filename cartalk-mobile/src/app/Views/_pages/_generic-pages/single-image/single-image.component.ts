import { Component, OnInit } from '@angular/core';
import { ImageService } from '~/app/_services/Image/image.service';

@Component({
  selector: 'ns-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css']
})
export class SingleImageComponent implements OnInit {

  constructor(private image: ImageService) { }
  img: any

  ngOnInit() {
      this.img = this.image
      console.log(this.img)
  }

}

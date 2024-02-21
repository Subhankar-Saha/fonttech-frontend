import { Component } from '@angular/core';
import { imageFileNames } from './banner_image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    
  }
  public imageBannerArr: any = imageFileNames;

  public productsArr: any = [
    {
      name: 'Fans',
      description: 'AC Haua',
      src: '../../../assets/images/ceiling-fan.png',
    },
    {
      name: 'TVs',
      description: 'AC Haua',
      src: '../../../assets/images/television.png',
    },
    {
      name: 'Home Theaters',
      description: 'AC Haua',
      src: '../../../assets/images/home-theater.png',
    },
	// {
	// 	name: 'AC',
	// 	description: 'AC Haua',
	// 	src: '../../../assets/images/air-conditioner.png',
	//   }
  ];
}

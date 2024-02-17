import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {
    console.log('welcome');
  }
  public imageBannerArr: any = [
    {
      name: 'Image1',
      description: 'AC Haua',
      src: '../../../assets/banner/image2fan.jpg',
    },
    {
      name: 'Image1',
      description: 'AC Haua',
      src: '../../../assets/banner/image1fan.png',
    },
    {
      name: 'Image1',
      description: 'AC Haua',
      src: '../../../assets/banner/image2fan.jpg',
    },
    {
      name: 'Image1',
      description: 'AC Haua',
      src: '../../../assets/banner/image1fan.png',
    },
    {
      name: 'Image1',
      description: 'AC Haua',
      src: '../../../assets/banner/image2fan.jpg',
    },
    {
      name: 'Image1',
      description: 'AC Haua',
      src: '../../../assets/banner/image1fan.png',
    },
  ];

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

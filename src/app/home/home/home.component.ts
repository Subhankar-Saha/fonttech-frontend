import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {
    console.log("welcome")
  }
  public imageBannerArr: any = [
		{
			name: "Image1",
			description: "AC Haua",
			src : "../../../assets/banner/image2fan.jpg",
		},
		{
			name: "Image1",
			description: "AC Haua",
			src : "../../../assets/banner/image1fan.png",
		},
    {
			name: "Image1",
			description: "AC Haua",
			src : "../../../assets/banner/image2fan.jpg",
		},
		{
			name: "Image1",
			description: "AC Haua",
			src : "../../../assets/banner/image1fan.png",
		},
    {
			name: "Image1",
			description: "AC Haua",
			src : "../../../assets/banner/image2fan.jpg",
		},
		{
			name: "Image1",
			description: "AC Haua",
			src : "../../../assets/banner/image1fan.png"
		},
	]
}

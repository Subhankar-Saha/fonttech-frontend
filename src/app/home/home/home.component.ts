import { Component, OnInit } from '@angular/core';
import { imageFileNames } from './banner_image';
import { ModalComponent } from 'src/app/navigation/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public isFranchiseModalOpen: boolean = false;
  ngOnInit(): void {
    if(!sessionStorage.getItem("banner")){
      this.showFranchiseModalWithAnimation();
    }
  }
  public imageBannerArr: any = imageFileNames;

  public productsArr: any = [
    {
      name: 'Fans',
      description: '',
      src: '../../../assets/images/ceiling-fan.png',
    },
    {
      name: 'TVs',
      description: '',
      src: '../../../assets/images/television.png',
    },
    {
      name: 'Home Theaters',
      description: '',
      src: '../../../assets/images/home-theater.png',
    }
  ];

  showFranchiseModalWithAnimation() {
    this.isFranchiseModalOpen = true;
    sessionStorage.setItem("banner", 'true')
  }
}

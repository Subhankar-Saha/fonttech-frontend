import { Component, OnInit } from '@angular/core';
import { imageFileNames } from './banner_image';
import { ModalComponent } from 'src/app/navigation/modal/modal.component';
import { Router } from '@angular/router';
import { RequestMapperService } from 'src/app/request-mapper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router) {}
  public isFranchiseModalOpen: boolean = false;
  public content:string = `Explore thrilling franchise opportunities with FontTech. Join us in providing top-notch electronic solutions across India. Are you excited?`;
  public header: string = "Franchise Opportunities";

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
    // sessionStorage.setItem("banner", 'true')
  }

  onClickRedirect(value:string){
    this._router.navigateByUrl(`${RequestMapperService.FRANCHISE_URL}`)
  }
}

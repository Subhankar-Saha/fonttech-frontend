import { Component, OnInit } from "@angular/core";
import { imageFileNames } from "./banner_image";
import { Router } from "@angular/router";
import { RequestMapperService } from "src/app/request-mapper.service";
import { ModalService } from "src/app/modal.service";
import {
  BannerArrayDetails,
  ProductArrayDetails,
} from "src/app/navigation/interface/banner-home";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private _router: Router,
    public _modalService: ModalService,
  ) {}
  public content: string = `Explore thrilling franchise opportunities with FontTech. Join us in providing top-notch electronic solutions across India.`;
  public header: string = "Franchise Opportunities";
  public productsArr: ProductArrayDetails[] = [
    {
      name: "Smart TV",
      description: "",
      src: "../../../assets/images/smart-tv.jpg",
    },
    {
      name: "Home Theater",
      description: "",
      src: "../../../assets/images/home-theater.png",
    },
    {
      name: "Fan",
      description: "",
      src: "../../../assets/images/ceiling-fan.png",
    },
  ];

  public imageBannerArr: BannerArrayDetails[] = [
    {
      name: "Smart TV",
      ultraSmall: "../../../assets/banner/tv1_360.png",
      extraSmall: "../../../assets/banner/tv1_400.png",
      small: "../../../assets/banner/tv1_640.png",
      medium: "../../../assets/banner/tv1_1440.png",
      large: "../../../assets/banner/tv1_2000.png",
      url: "",
      description: "",
      headline: "",
    },
    {
      name: "Smart TV",
      ultraSmall: "../../../assets/banner/1_360.png",
      extraSmall: "../../../assets/banner/1_400.png",
      small: "../../../assets/banner/1_640.png",
      medium: "../../../assets/banner/1_1440.png",
      large: "../../../assets/banner/1_2000.png",
      url: "",
      description: "",
      headline: "",
    },
  ];

  ngOnInit(): void {
    if (!sessionStorage.getItem("banner")) {
      this.showFranchiseModalWithAnimation();
    }
  }

  showFranchiseModalWithAnimation() {
    this._modalService.openModal();
    sessionStorage.setItem("banner", "true");
  }

  onClickRedirect(value: string) {
    this._router.navigateByUrl(`${RequestMapperService.FRANCHISE_URL}`);
  }
}

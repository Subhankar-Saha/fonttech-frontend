import { Component, OnInit } from "@angular/core";
import { imageFileNames } from "./banner_image";
import { Router } from "@angular/router";
import { RequestMapperService } from "src/app/request-mapper.service";
import { ModalService } from "src/app/modal.service";

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
  public imageBannerArr: string[] = [];
  ngOnInit(): void {
    this.imageBannerArr = imageFileNames;
    if (!sessionStorage.getItem("banner")) {
      this.showFranchiseModalWithAnimation();
    }
  }

  public productsArr: any = [
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

  showFranchiseModalWithAnimation() {
    this._modalService.openModal();
    sessionStorage.setItem("banner", "true");
  }

  onClickRedirect(value: string) {
    this._router.navigateByUrl(`${RequestMapperService.FRANCHISE_URL}`);
  }
}

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
  public carouselInterval: number = 3000;
  public hoverPause: boolean = true;
  @ViewChild("carousel") carousel!: ElementRef;
  public productsArr: ProductArrayDetails[] = [
    {
      name: "Smart TV",
      description: "",
      src: "../../../assets/images/smart-tv.jpg",
    },
    {
      name: "Fan",
      description: "",
      src: "../../../assets/images/fan.jpg",
    },
    {
      name: "Home Theater",
      description: "",
      src: "../../../assets/images/home-th.jpg",
    },
  ];

  public imageBannerArr: BannerArrayDetails[] = [
    {
      name: "Smart TV",
      imageUrl: "../../../assets/banner/1.png",
      url: "",
      description: "",
      title: "",
      class: "carousel-item active",
      lineClass: "active",
    },
    {
      name: "Smart TV",
      imageUrl: "../../../assets/banner/tv1.jpeg",
      url: "",
      description: "",
      title: "",
      lineClass: "active",
      class: "carousel-item",
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

  handleCarouselItemClick(item: any) {
    // Do something with the clicked item, for example, display an alert
    console.log(`Clicked on item with title: ${item.title}`);
  }

  pauseCarousel() {
    // Pause the carousel when the mouse enters
    if (this.carousel && this.carousel.nativeElement) {
      this.carousel.nativeElement.carousel("pause");
    }
  }

  resumeCarousel() {
    // Resume the carousel when the mouse leaves
    if (this.carousel && this.carousel.nativeElement) {
      this.carousel.nativeElement.carousel("cycle");
    }
  }
}

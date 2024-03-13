import { Component } from "@angular/core";
import { RequestMapperService } from "../../request-mapper.service";
import { MessageService } from "../../message.service";
import { JWTService } from "../../authentication/jwt.service";
import { Router } from "@angular/router";
import { SnackService } from "../../notification/snack.service";
import { firstValueFrom } from "rxjs";
import { ModalService } from "src/app/modal.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent {
  public isMobileMenuOpen: boolean = false;
  public menuArr: any = [
    {
    	name: "Home",
    	description: "TV Haua",
    	link : `${RequestMapperService.HOME}`,
    	icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
    	viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    	<path stroke-linecap="round" stroke-linejoin="round"
    		d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    	<path stroke-linecap="round" stroke-linejoin="round"
    		d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>`
    },
    {
    	name: "Product",
    	description: "TV Haua",
    	link : "",
    	icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
    	viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    	<path stroke-linecap="round" stroke-linejoin="round"
    		d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    	<path stroke-linecap="round" stroke-linejoin="round"
    		d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>`
    },
    // {
    // 	name: "Store",
    // 	description: "TV Haua",
    // 	link : "",
    // 	icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
    // 	viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    // 	<path stroke-linecap="round" stroke-linejoin="round"
    // 		d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    // 	<path stroke-linecap="round" stroke-linejoin="round"
    // 		d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    // </svg>`
    // },
    // {
    // 	name: "About",
    // 	description: "AC Haua",
    // 	link : "",
    // 	icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
    // 	viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    // 	<path stroke-linecap="round" stroke-linejoin="round"
    // 		d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    // 	<path stroke-linecap="round" stroke-linejoin="round"
    // 		d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    // </svg>`
    // },
    {
    	name: "Contact Us",
    	description: "AC Haua",
    	link : `${RequestMapperService.CONTACT_URL}`,
    	icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
    	viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    	<path stroke-linecap="round" stroke-linejoin="round"
    		d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    	<path stroke-linecap="round" stroke-linejoin="round"
    		d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>`
    },
    {
      name: "Franchise",
      description: "Franchise",
      link: `${RequestMapperService.FRANCHISE_URL}`,
      icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
			viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
		</svg>`,
    },
  ];

  constructor(
    private _jwt: JWTService,
    private _router: Router,
    private _snack: SnackService,
    private _modalService: ModalService,
  ) {}

  public logout(): void {
    this._jwt.destroySession();
    this._router
      .navigateByUrl(
        RequestMapperService.getAbsoluteUrl(
          RequestMapperService.BASE_RELATIVE_URL,
        ),
      )
      .then(() => {
        this._snack.info(MessageService.LOGOUT_SUCCESSFUL);
      });
  }

  public onClick(value: string) {
    this._snack.info("Registered Users can only do");
  }

  public async modalStopPropagation(event: Event) {
    const modalState = await firstValueFrom(this._modalService.modalState$);
    if (modalState) {
      event.stopPropagation();
    }
  }
}

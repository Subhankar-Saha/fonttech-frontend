// franchise-modal.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ModalService } from 'src/app/modal.service';
import { Router } from '@angular/router';
import { RequestMapperService } from 'src/app/request-mapper.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false <=> true', animate('500ms')),
    ]),
  ]
})
export class ModalComponent implements OnInit {
  constructor(public _modalService : ModalService, private _router: Router){}
  ngOnInit(): void {
    this._modalService.openModal()
  }

  closeModal() {
    this._modalService.closeModal()
  }

  onClick(){
    this.closeModal();
    this._router.navigateByUrl(`${RequestMapperService.FRANCHISE_URL}`)
  }

}

// franchise-modal.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { ModalService } from "src/app/modal.service";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
  animations: [
    trigger("fadeInOut", [
      state("true", style({ opacity: 1 })),
      state("false", style({ opacity: 0 })),
      transition("false <=> true", animate("500ms")),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  constructor(public _modalService: ModalService) {}
  @Input() content: string = "";
  @Input() header: string = "";
  @Output() confirmEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this._modalService.openModal();
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    this._modalService.closeModal();
    document.body.style.overflow = "";
  }

  onClick() {
    this.closeModal();
    this.confirmEvent.emit("true");
  }

  stopPropagation(event: Event) {
    this._modalService.modalState$
      .pipe(
        filter((res: boolean) => res === true),
        tap(() => {
          event.stopPropagation(); // Prevent click propagation to the overlay
        }),
      )
      .subscribe();
  }
}

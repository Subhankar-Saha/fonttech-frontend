// modal.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalStateSubject = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalStateSubject.asObservable();

  constructor() {}

  openModal(): void {
    this.modalStateSubject.next(true);
  }

  closeModal(): void {
    this.modalStateSubject.next(false);
  }
}

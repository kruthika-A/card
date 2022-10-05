import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-confirmodel',
  templateUrl: './confirmodel.component.html',
  styleUrls: ['./confirmodel.component.scss']
})
export class ConfirmDialogDemo {

  constructor(private confirmationService: ConfirmationService) {}

  confirm() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to perform this action?',
          accept: () => {
              //Actual logic to perform a confirmation
          }
      });
  }
}




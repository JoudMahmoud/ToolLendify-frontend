import { Component, OnInit } from '@angular/core';
import { Owner } from '../../_models/owner';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css',
})
export class OwnerComponent implements OnInit {
  owners: Owner[];
  message: string = '';
  styleMessage: boolean = false;

  constructor(private sharedService: SharedService) {
    this.owners = [];
  }

  ngOnInit(): void {
    this.sharedService.currentOwners.subscribe((owners: Owner[]) => {
      if (owners.length > 0) {
        this.owners = owners;
      } else {
        this.owners = [];
        this.message = 'Not found owner';
        this.styleMessage = true;
      }
    });
  }
}

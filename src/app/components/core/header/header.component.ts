import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../../../services/owner/owner.service';
import { Owner } from '../../../_models/owner';
import { SharedService } from '../../../services/shared/shared.service';
import { UserAuthService } from '../../../services/auth/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchValue: string;
  owners: Owner[];
  errorMassage: string;

  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private sharedService: SharedService,
    private authService: UserAuthService
  ) {
    this.searchValue = '';
    this.owners = [];
    this.errorMassage = '';
  }

  getOwners(name: string) {
    this.ownerService.getOwnersByName(name).subscribe({
      next: (response: Owner[]) => {
        this.owners = response;
        this.sharedService.setOwners(this.owners);
        this.router.navigate(['/owners']);
      },
      error: (err) => {
         if (err.status === 404) {
           this.errorMassage = `No owner found with the name "${name}".`;
           this.owners = [];
           this.sharedService.setOwners(this.owners); // Set empty owners in shared service
           this.router.navigate(['/owners']);
         }
        console.error(`Error fetching owner`, err);
      },
      complete: () => {
        console.log('Fetching owners complete');
      },
    });
  }

  logout() {
    this.authService.Logout();
    this.router.navigate(['/login']);
  }
  navigateToAddToolPage() {
    this.router.navigate(['/addtool/tool-info']);
  }
}

import { Component } from '@angular/core';
import { GeolocationService } from '../../../services/geolocation/geolocation.service';
import { ContactInfo } from '../../../_models/contact-info';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrl: './address-information.component.css',
})
export class AddressInformationComponent {
  contactInfo: ContactInfo;
  constructor(
    private geolocationService: GeolocationService,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.contactInfo = {
      address: '',
      latitude: 0,
      longitude: 0,
      phone: '',
    };
  }

  setLatitudeAndLongitude() {
    this.geolocationService
      .getGeoLocation(this.contactInfo.address)
      .subscribe((response) => {
        if (response.length > 0) {
          this.contactInfo.latitude = response[0].lat;
          this.contactInfo.longitude = response[0].lon;
          console.log(
            'Latitude:',
            this.contactInfo.latitude,
            'Longitude: ',
            this.contactInfo.longitude
          );
        } else {
          console.error('No results found');
        }
      });
  }
  backToolInfoPage() {
    this.router.navigate(['/addtool/tool-info']);
  }
  navigateReviewPage() {
    this.setLatitudeAndLongitude();
    this.sharedService.setContactInfo(this.contactInfo);
    this.router.navigate(['/addtool/check-info']);
  }
  // setAddress(address: Address) {

  // }
}

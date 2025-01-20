import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Owner } from '../../_models/owner';
import { ContactInfo } from '../../_models/contact-info';
import { Tool } from '../../_models/tool';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private ownersSource = new BehaviorSubject<Owner[]>([]);
  currentOwners = this.ownersSource.asObservable();

  private toolInfoSource = new BehaviorSubject<Tool | null>(null);
  currentToolInfo = this.toolInfoSource.asObservable();

  private contactInfoSource = new BehaviorSubject<ContactInfo | null>(null);
  currentContactInfo = this.contactInfoSource.asObservable();

  constructor() { }

  setOwners(owners: Owner[]) {
    this.ownersSource.next(owners);
  }

  setToolInfo(toolInfo: Tool) {
    this.toolInfoSource.next(toolInfo)
    console.log(toolInfo);
  }

  setContactInfo(contactInfo: ContactInfo) {
    this.contactInfoSource.next(contactInfo);
  }

  getToolInfo(): Tool | null{
    return this.toolInfoSource.value;
  }

  getContactInfo(): ContactInfo | null{
    return this.contactInfoSource.value;
  }
}

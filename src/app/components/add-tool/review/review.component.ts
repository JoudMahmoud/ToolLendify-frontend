import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../../../_models/contact-info';
import { SharedService } from '../../../services/shared/shared.service';
import { Tool } from '../../../_models/tool';
import { ToolService } from '../../../services/tool/tool.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent implements OnInit {
  toolInfo: Tool | null = null;
  contactInfo: ContactInfo | null = null;
  styleSuccessForm: boolean = false;
  constructor(
    private sharedService: SharedService,
    private toolService: ToolService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.toolInfo = this.sharedService.getToolInfo();
    this.contactInfo = this.sharedService.getContactInfo();
    if (this.toolInfo && this.contactInfo) {
      this.toolInfo.ContactInfo = this.contactInfo;
    }
  }

  submitTool() {
    this.toolService.addTool(this.toolInfo).subscribe({
      next: (response) => {
        console.log('Tool added successfully:', response);
        this.styleSuccessForm = true;
      },
      error: (err) => {
        console.error('Error adding tool: ', err);
      },
      complete: () => {
        console.log('complete processing adding tool.');
      },
    });
  }

  navigateToHome() {
    this.styleSuccessForm = false;
    this.router.navigate(['/home'])
  }
}

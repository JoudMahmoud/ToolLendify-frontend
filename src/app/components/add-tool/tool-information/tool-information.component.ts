import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { Category } from '../../../_models/category';
import { Tool } from '../../../_models/tool';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tool-information',
  templateUrl: './tool-information.component.html',
  styleUrl: './tool-information.component.css',
})
export class ToolInformationComponent {
  addTool: Tool;
  categories: Category[];
  styleAvailable: boolean = true;
  availableMessage: string = '';
  selectedCategoryName: string = '';
  baseUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private categoryService: CategoryService,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.addTool = {
      name: '',
      description: '',
      image: '',
      model: 0,
      pricePerDay: 0,
      isAvailable: true,
      ContactInfo: {
        address: '',
        latitude: 0,
        longitude: 0,
        phone: '',
      },
  
      categoryName: '',
      styleAvailable: true,
      availableMessage: '',
    };
    this.categories = [];
  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response: Category[]) => {
        this.categories = response;
      },
      error: (err) => {
        console.error('Error fetching tools ', err);
      },
      complete: () => {
        console.log('Categories fetching complete.');
      },
    });
  }

  onToolPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      this.httpClient
        .post(`${this.baseUrl}/api/file/upload/tool-photo`, formData)
        .subscribe({
          next: (response: any) => {
            console.log(
              'The tool picture has been successfully uploaded:',
              response.url
            );
            this.addTool.image = `${this.baseUrl}${response.url}`;
          },
          error: (err) => {
            console.error('Tool photo upload failed:', err);
          },
          complete: () => {
            console.log('Complete the photo uploading process.');
          },
        });
    }
  }
  selectCategory(category: Category) {
    this.addTool.categoryName = category.name;
    this.selectedCategoryName = category.name;
  }
  navigateContactPage() {
    this.sharedService.setToolInfo(this.addTool);
    this.router.navigate(['/addtool/address-info']);
  }
}

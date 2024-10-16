import { Component, OnInit } from '@angular/core';
import { Tool } from '../../_models/tool';
import { Category } from '../../_models/category';
import { CategoryService } from '../../services/category/category.service';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrl: './add-tool.component.css',
})
export class AddToolComponent implements OnInit{
  addTool: Tool;
  categories: Category[];

  constructor(private categoryService: CategoryService) {
    this.addTool = {
      name: '',
      description: '',
      image: '',
      model: 0,
      pricePerDay: 0,
      isAvailable: true,
      address: {
        streetAddress: '',
        district: '',
        city: '',
        postalCode: '',
        country: '',
        latitude: 0,
        longitude: 0,
        phone: '',
      },
      ownerId: '',
      caregoryName: '',

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
}

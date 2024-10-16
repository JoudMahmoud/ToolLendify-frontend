import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Tool } from '../../_models/tool';
import { ToolService } from '../../services/tool/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css',
})
export class ToolListComponent implements OnInit {
  toolList: Tool[];
  searchValue: string = '';

  // ==============================
  selectedTab: number = 0; // Default selected tab (0-based index)
  tabs: string[] = ['All', 'Available', 'Sale', 'Tab4', 'Tab 5'];
  // Function to change the selected tab

  // ==============================

  constructor(private toolService: ToolService) {
    this.toolList = [];
  }

  ngOnInit(): void {
    this.getAllTools();
  }

  getAllTools() {
    this.toolService.getAllTools().subscribe({
      next: (response: Tool[]) => {
        this.toolList = response.map((tool) => ({
          ...tool,
          availableMessage: tool.isAvailable ? 'Available' : 'Unavailable',
          styleAvailable: tool.isAvailable,
        }));
    console.log(this.toolList);

      },
      error: (err) => {
        console.error('Error fetching tools:', err);
      },
      complete: () => {
        console.log('Tool fetching complete.');
      },
    });
  }

  getAvaliableTools() {
    this.toolService.getAvaliableTools().subscribe({
      next: (response: Tool[]) => {
        this.toolList = response.map((tool) => ({
          ...tool,
          availableMessage: 'Available',
          styleAvailable: tool.isAvailable,
        }));
      },
      error: (err) => {
        console.error('Error fetching tools:', err);
      },
      complete: () => {
        console.log(`Tool fetching complete.`);
      },
    });
  }

  getTool(toolName: string): void {
    if (!toolName || toolName.trim() === '') {
      console.error('Tool name is required.');
      return;
    }

    // Search for the tool
    this.toolService.getToolByName(toolName).subscribe({
      next: (response: Tool[]) => {
        if (!response || response.length === 0) {
          console.log('No tool found with the given name.');
          this.toolList = []; // Clear the list if no tool found
        } else {
          this.toolList = response; // Show found tool(s) in the list

          // Check if the tool is available when on the Available tab
          if (
            this.selectedTab === 1 &&
            !response.some((tool) => tool.isAvailable)
          ) {
            console.log('Tool found but is not available.');
            this.toolList = []; // Show no tool in the "Available" tab
          }
        }
      },
      error: (err) => {
        console.error('Error fetching tool:', err);
      },
      complete: () => {
        console.log('Fetch tool by name complete');
      },
    });
  }

  resetSearch(): void {
    this.searchValue = '';
    this.selectTab(0); //Type 'number' is not assignable to type '(index: number) => void'.ts(2322)    //(method) ToolListComponent.selectTab(index: number): void
    this.getAllTools();
  }

  selectTab(index: number) {
    this.selectedTab = index;
    if (index === 0) {
      this.getAllTools(); // Fetch all tools for other tabs
    } else if (index === 1) {
      this.getAvaliableTools(); // Fetch only available tools for Tab 2
    } else if (index === 2) {
      this.getAllTools(); // Fetch all tools for other tabs
    }
  }
}

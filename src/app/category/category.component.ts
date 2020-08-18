import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { CategoryService } from './categoryservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [MessageService]
})
export class CategoryComponent implements OnInit {
  category: TreeNode[];
  selectedcategory: TreeNode[];
  searchEnable:boolean = false;
  searchData:string;
   constructor(private categoryService: CategoryService, private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getFiles().then(files => this.category = files);
  }

  nodeSelect(event) {
    this.handleSelectionMessageService(event);
  }

  nodeUnselect(event) {
    this.handleSelectionMessageService(event);
  }
  
  handleSelectionMessageService(event){
    this.messageService.clear();
    console.log(event.node)
    this.searchEnable = (this.selectedcategory.length==1) ? true: false;
    if(this.searchEnable) {
      this.messageService.add({severity: 'success', summary: 'go for a search by', detail: `"${event.node.label}" category by click button "Submit Category Search" below`});
      this.searchData = event.node.label;
    } else{
      this.messageService.add({severity: 'error', summary: 'More than one category selected or none selected, please select ONE!!!', detail: ""});
    }
  }
  handleClick(event) {
    this.router.navigate(['/books'], {state: {data: this.searchData}});
  }

}

import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    tabs: MenuItem[];
    ngOnInit() {
        this.tabs = [
            {label: 'Books', icon: 'pi pi-fw pi-home', routerLink:'books'},
            {label: 'Category ', icon: 'pi pi-fw pi-tags', routerLink:'category'}
        ];
    }
}
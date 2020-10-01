import { Component, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
// import {pipe} from 'rxjs';

export interface Element {
  name: string;
  amount: number;
  purchased: boolean;
  order: number;
}

// @Pipe({
//   name: 'sort'
// })
// export class ArraySortPipe implements PipeTransform {
//   transform(array: Array<Element>, args: string): Array<Element> {
//     array.sort((a: any, b: any) => {
//       if (a.order < b.order) {
//         return -1;
//       } else if (a.order > b.order) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     return array;
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // pipes:[ArraySortPipe]
})
export class AppComponent {
  title = 'Boodschappenapp';

  public groceries: Array<Element> = [];

  public element: Element = {
    name: '',
    amount: 0,
    purchased: false,
    order: this.groceries.length
   };

  public addGrocery() {
    this.groceries.push(this.element);
    this.element = {
      name: '',
      amount: 0,
      purchased: false,
      order: this.groceries.length,
    };
  }

  public checkGrocery(grocery: Element) {
    grocery.purchased = !grocery.purchased;
  }

  public delGrocery(grocery: Element) {
    this.groceries.splice(this.groceries.indexOf(grocery), 1);
  }

  public orderUpGrocery(grocery: Element) {
    debugger;
    this.groceries[grocery.order - 1].order = grocery.order;
    grocery.order = grocery.order - 1;
  }

  public orderDownGrocery(grocery: Element) {
    this.groceries[grocery.order + 1].order = grocery.order;
    grocery.order = grocery.order + 1;
  }
}



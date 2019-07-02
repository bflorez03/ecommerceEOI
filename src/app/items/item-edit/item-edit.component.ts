import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/entities/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item;
  constructor(private service: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id as number;
      if (id != null) {
        this.getItem(id);
      }
    });
  }

  getItem(id: number) {
    this.service.getItem(id).subscribe(
      (data: Item) => this.item = data,
      error => console.error(error),
      () => console.log('My item list is loaded!')
    );
  }

  updateItem() {
    this.service.updateItem(this.item).subscribe(
      () => this.router.navigate([''])
    );
  }

}

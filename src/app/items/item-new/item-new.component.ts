import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item.model';
import { ItemService } from '../shared/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {
  item: Item;
  constructor(private service: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.item = new Item();
  }

  postItem() {
    this.service.postItem(this.item).subscribe(
      () => this.router.navigate([''])
    );
  }

}

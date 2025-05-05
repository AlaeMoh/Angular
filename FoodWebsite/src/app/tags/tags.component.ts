import { FoodService } from './../service/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/food/tags';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[];
  tags?:Tag[];
  constructor(private foodservice:FoodService){}

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.foodservice.getAllTags();
  }
}

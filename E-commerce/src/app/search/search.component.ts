import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { products } from 'src/export-files/data.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  searchResult: undefined | products[];
constructor(private route:ActivatedRoute , private products:ProductsService){}


ngOnInit(): void {
 let query= this.route.snapshot.paramMap.get('query')
 query && this.products.searchProduct(query).subscribe((result)=>{
  this.searchResult=result
 })
}
}

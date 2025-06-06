import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  @Input() visible:boolean= false;
  @Input() notFoundMessage:string= 'Not Found';
  @Input() resetLinkText:string= "Go to Home Page" ;
  @Input() resetlinkrouter:string= "/";


}

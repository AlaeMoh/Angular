import { CanActivateFn } from '@angular/router';
import { SellerService } from './service/seller.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';


export const authGuard: CanActivateFn = (route, state) => {
  const sellerService = inject(SellerService)
  const router = inject(Router);
return sellerService.isSellerLoggedIn.pipe(
    map(isLoggedIn => {
      return isLoggedIn; 
    })
  );



}



import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userLogin = localStorage.getItem('loginUser');
  if(userLogin!=null)
    return true;
  else{
    return router.navigateByUrl('');
  }
};

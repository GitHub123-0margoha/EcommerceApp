import { UserAuth } from './../services/user-auth';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _userAuth = inject(UserAuth);
  let router = inject(Router)

  if (_userAuth.getUserLogged()) {
    return true;
  } else {
    alert('You must be logged in to access this page');
    router.navigateByUrl('/login')
    return false;
  }

};

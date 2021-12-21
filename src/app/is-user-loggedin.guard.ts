import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedinGuard implements CanActivate {
 
  constructor( private router : Router) { }
  IsUservalid : any= true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.IsUservalid)//Here we will write login to validate user from database
      {
        this.router.navigate(['/login']);
      }    
    return this.IsUservalid;
  }
  
}

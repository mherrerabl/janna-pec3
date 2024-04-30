import { Router } from '@angular/router';

export class Navigate {
  constructor(private router: Router) {}

  navigateTo(url: string, id: string = ''): void {
    this.router.navigateByUrl(url + id);
  }
}

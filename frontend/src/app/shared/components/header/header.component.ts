import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { InputDTO } from '../../models/input.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;

  innerWidth!: number;

  iconBars = faBars;

  showSearcher: boolean = false;

  search: FormControl;

  input: InputDTO;
  inputPlaceholder: string = '';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.search = new FormControl('');
    if (this.router.url) {
      this.inputPlaceholder = 'Busca un producto';
    }
    this.input = this.getDataInput();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  keyPressed(value: string): void {
    //this.store.dispatch(isLoading({ status: true }));
  }

  private getDataInput(): InputDTO {
    return {
      label: 'Buscador',
      placeholder: this.inputPlaceholder,
      type: 'search',
      formControl: this.search,
      required: false,
      iconLeft: 'search',
    };
  }
}

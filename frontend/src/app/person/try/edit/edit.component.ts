import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  id!: number;
  person!: Person;
  form!: FormGroup;

  constructor(
    public personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPerson'];
    this.personService.find(this.id).subscribe((data: Person) => {
      this.person = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ -']+"),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.personService.update(this.id, this.form.value).subscribe((res) => {
      console.log('Person updated successfully!');
      this.router.navigateByUrl('person/index');
    });
  }
}

import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  persons: Person[] = [];

  // constructor() { }
  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[]) => {
      this.persons = data;
      console.log(this.persons);
    });
  }

  deletePerson(id: number) {
    this.personService.delete(id).subscribe((res) => {
      this.persons = this.persons.filter((item) => item.id !== id);
      console.log('Person deleted successfully!');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas.component',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  providers: [ServicePersonas],
  imports: [CommonModule],
})
export class PersonasComponent implements OnInit{
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas) {
  }
  ngOnInit(): void {
    this._service.getPersonasAxios().then(response => {
      this.personas = response;
    });
  }
}

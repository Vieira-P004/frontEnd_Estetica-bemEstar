import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario',
  imports: [RouterLink, FormsModule],
  templateUrl: './funcionario.html',
  styleUrl: './funcionario.css',
})
export class Funcionario {
  
}

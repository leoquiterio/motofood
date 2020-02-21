import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  position: number;
  nome: string;
  apelido: string;
  email: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nome: 'João Pedro', apelido: 'João', email: 'joao_pedro@gmail.com', status: 'Ativo' },
  { position: 2, nome: 'Henrique Alves', apelido: 'Rick', email: 'rickk@gmail.com', status: 'Inativo' },
  { position: 3, nome: 'Karina Lemos', apelido: 'Kaka', email: 'karina-lemos@gmail.com', status: 'Ativo' },

];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class RelUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['edicao', 'position', 'nome', 'apelido', 'email', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  position: number;
  nome: string;
  descricao: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Dinheiro', descricao: 'Pagamento em dinheiro', status: 'Ativo'},
  {position: 2, nome: 'Cartão Débito', descricao: 'Pagamento em cartão', status: 'Ativo'},
];


@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
})
export class RelFormaPagamentoComponent implements OnInit {

  displayedColumns: string[] = ['edicao', 'position', 'nome', 'descricao', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit() {
  }

}

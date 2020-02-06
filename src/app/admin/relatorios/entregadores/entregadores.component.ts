import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  position: number;
  nome: string;
  endereco: string;
  cnh: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'João Carlos Eduardo', endereco: 'Rua Pedro Guimarães, 12', cnh: '1255221 AB'},
  {position: 2, nome: 'Pedro Henrique Guimarães', endereco: 'Rua Pedro Guimarães, 12', cnh: '1255221 AB'},
  {position: 3, nome: 'Amanda Pereira', endereco: 'Rua Pedro Guimarães, 12', cnh: '1255221 AB'},
  {position: 4, nome: 'Felippe Augusto', endereco: 'Rua Pedro Guimarães, 12', cnh: '1255221 AB'},
  {position: 5, nome: 'Pedrão da Moto', endereco: 'Rua Pedro Guimarães, 12', cnh: '1255221 AB'},
];

@Component({
  selector: 'app-entregadores',
  templateUrl: './entregadores.component.html',
})


export class EntregadoresComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'nome', 'endereco', 'cnh'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor() { }

  ngOnInit() {
  }

}

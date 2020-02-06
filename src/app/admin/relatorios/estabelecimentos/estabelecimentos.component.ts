import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  position: number;
  nome: string;
  razaosocial: string;
  cnpj: string;
  celular: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'João Carlos Eduardo LTDA', razaosocial: 'Lorem Ipsum Dolor Sit', cnpj: '10.000.000/0001-00', celular: '(16) 99999-9999', status: 'Ativo'},
  {position: 2, nome: 'João Carlos Eduardo LTDA', razaosocial: 'Lorem Ipsum Dolor Sit', cnpj: '10.000.000/0001-00', celular: '(16) 99999-9999', status: 'Inativo'},
  {position: 3, nome: 'João Carlos Eduardo LTDA', razaosocial: 'Lorem Ipsum Dolor Sit', cnpj: '10.000.000/0001-00', celular: '(16) 99999-9999', status: 'Ativo'},
  {position: 4, nome: 'João Carlos Eduardo LTDA', razaosocial: 'Lorem Ipsum Dolor Sit', cnpj: '10.000.000/0001-00', celular: '(16) 99999-9999', status: 'Ativo'},
  {position: 5, nome: 'João Carlos Eduardo LTDA', razaosocial: 'Lorem Ipsum Dolor Sit', cnpj: '10.000.000/0001-00', celular: '(16) 99999-9999', status: 'Inativo'},
];

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html'
})
export class EstabelecimentosComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'nome', 'razaosocial', 'cnpj', 'celular', 'status'];
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

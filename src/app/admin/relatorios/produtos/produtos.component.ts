import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PeriodicElement {
  position: number;
  nome: string;
  preco: string;
  categoria: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'X-Burguer', preco: 'R$ 10,90', categoria: 'Lanches', status: 'Ativo'},
  {position: 2, nome: 'Salada Fitness', preco: 'R$ 22,00', categoria: 'Saladas', status: 'Ativo'},
  {position: 3, nome: 'Coca-cola', preco: 'R$ 5,00', categoria: 'Refrigerante', status: 'Inativo'},
  {position: 4, nome: 'Salgado frito', preco: 'R$ 2,90', categoria: 'Salgados', status: 'Ativo'},
  {position: 5, nome: 'Sorvete', preco: 'R$ 4,90', categoria: 'Doces', status: 'Ativo'},
];


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
})
export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['edicao', 'position', 'nome', 'preco', 'categoria', 'status'];
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

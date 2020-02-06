import { Component, OnInit } from '@angular/core';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
  selector: 'app-rastrear-entregas',
  templateUrl: './rastrear-entregas.component.html'
})
export class RastrearEntregasComponent implements OnInit {

  lat: number = 51.673858;
  lng: number = 7.815982;
  zoom: number = 8;

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'José',
		  draggable: false
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'Lucas',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'Pedro',
		  draggable: false
	  }
  ]  
  
  constructor() { }

  ngOnInit() {
  }

}

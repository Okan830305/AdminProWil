import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number){
    if ( this.progreso > 100 && valor > 0 ){
      this.progreso=100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ){
      this.progreso=0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

  constructor() {
    /* console.log('leyenda',this.leyenda);
    console.log('progress',this.progreso); */
   }

   onChanges( newValue : number){
    //  console.log(newValue);
    //  let elemntHTML = document.getElementsByName('progreso');

     if (newValue>100)
     {
       this.progreso=100;
     } else if (newValue<=0){
       this.progreso=0;
     } else {
       this.progreso=newValue;
     }

     this.txtProgress.nativeElement.value = this.progreso;
     this.cambioValor.emit(this.progreso);
   }

  ngOnInit() {
    // console.log('leyenda',this.leyenda);
    // console.log('progress',this.progreso);
  }

}

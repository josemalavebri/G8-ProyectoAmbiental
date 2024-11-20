import { Component } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report } from '../../models/report';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  reportes: Report[] = [];
  constructor(private servicioReporte:ReportService) {
  }
  
  ngOnInit():void{
    this.getReport();
  }

  getReport():void{
    this.servicioReporte.getReportes().subscribe((data:Report[])=>{
      this.reportes = data;
    })
  }


  mostrarMensaje(reporte:Report) {
    alert(`Has seleccionado la fruta: ${reporte.tipoEvento}`);
  }


}

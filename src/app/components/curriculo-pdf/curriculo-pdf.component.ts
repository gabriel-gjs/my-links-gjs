import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo-pdf',
  templateUrl: './curriculo-pdf.component.html',
  styleUrls: ['./curriculo-pdf.component.scss']
})
export class CurriculoPdfComponent implements OnInit{
  ngOnInit() {
    window.location.href = '/assets/data/cv-GabrielSilva.pdf';
  }
}

import { Component, OnInit } from '@angular/core';
import { LocandinaService } from 'src/app/locandina.service';

@Component({
  selector: 'app-locandina',
  templateUrl: './locandina.component.html',
})
export class LocandinaComponent implements OnInit {
  locandine: any[] = []; // Assicurati che locandine sia un array

  constructor(private locandinaService: LocandinaService) { }

  ngOnInit(): void {
    this.locandinaService.getLocandine().subscribe((data: any[]) => {
      if (Array.isArray(data)) {
        this.locandine = data; // Assegna i dati dell'array locandine ricevuti dal servizio
      } else {
        console.error('I dati restituiti non sono un array valido:', data);
      }
    });
  }
}

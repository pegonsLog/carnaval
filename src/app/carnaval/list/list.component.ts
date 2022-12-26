import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarnavalService } from '../carnaval.service';
import { Bloco } from '../models/bloco';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(private carnavalService: CarnavalService) {

  }

  ngOnInit(): void {
  }

}

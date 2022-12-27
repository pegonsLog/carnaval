import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarnavalService } from '../carnaval.service';
import { Bloco } from '../models/bloco';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  blocos: Bloco[] = [];
  subscription = new Subscription();
  constructor(private carnavalService: CarnavalService) {}

  ngOnInit(): void {
    this.subscription = this.carnavalService
      .list()
      .subscribe((blocos) => (this.blocos = blocos));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

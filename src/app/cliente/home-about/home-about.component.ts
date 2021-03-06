import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit,  OnDestroy {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Geovane Cavalcante' );
    this.carrusel();
  }

  ngOnDestroy() {
    this.carrusel();
  }

  carrusel() {
    $('.carousel').carousel();
  }

  /*autoplay() {
    $('.carousel').carousel('next');
    setTimeout(this.autoplay, 3000);
  }*/
}

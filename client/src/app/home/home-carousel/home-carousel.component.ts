import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  providers: [ //Carousel Configuration here
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: false, showIndicators: true } }
  ],
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  /*CODE FOR GENERIC IMAGE SLIDES
  slides = [
    {image: 'https://randomuser.me/api/portraits/women/1.jpg', text: 'First'},
    {image: 'https://randomuser.me/api/portraits/women/2.jpg',text: 'Second'},
    {image: 'https://randomuser.me/api/portraits/women/4.jpg',text: 'Third'},
    {image: 'https://randomuser.me/api/portraits/women/3.jpg',text: 'Fourth'}
  ];
  */
 
  noWrapSlides = false;
  showIndicator = true;
  constructor() { }

  ngOnInit(): void {
  }
}

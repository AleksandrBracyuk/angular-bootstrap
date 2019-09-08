import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a23',
  templateUrl: './a23.component.html',
  styleUrls: ['./a23.component.css']
})
export class A23Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

}

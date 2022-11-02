import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imagePath!: string;

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.imagePath = '../assets/img/logo.png';
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}

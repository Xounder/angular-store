import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input()
  infoCard:string = ''
  constructor(){}
}

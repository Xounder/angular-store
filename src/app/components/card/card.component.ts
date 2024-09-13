import { Component, Input } from '@angular/core';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardInfoComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  photoCover:string = ''
  // children
  @Input()
  infoCard:string = ''
  @Input()
  typePlay:string = ''
  @Input()
  typeGame:string = ''
  @Input()
  allConsoles:string = ''
  @Input()
  price:string = ''
}

import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
  @Input()
  typePlay:string = ''
  @Input()
  typeGame:string = ''
  @Input()
  allConsoles:string = ''
  @Input()
  price:string = ''


}

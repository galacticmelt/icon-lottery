import { Component } from '@angular/core';
import { IconLotteryService } from 'src/services/icon-lottery/icon-lottery.service';

@Component({
  selector: 'icon-lottery',
  templateUrl: './icon-lottery.component.html',
  styleUrls: ['./icon-lottery.component.scss']
})
export class IconLotteryComponent {
  constructor(public iconLotteryService: IconLotteryService) {}

  get currentIcon() {
    return this.iconLotteryService.currentIcon
  }

  get iconBlurred() {
    return this.iconLotteryService.iconBlurred
  }

  showRandomIcon() {
    this.iconLotteryService.showRandomIcon()
  }
}
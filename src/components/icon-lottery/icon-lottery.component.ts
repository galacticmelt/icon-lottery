import { Component } from '@angular/core';
import { fas as allIcons, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { timer, Subscription } from 'rxjs';
import { getRandomIndex } from 'src/shared/helpers';

@Component({
  selector: 'icon-lottery',
  templateUrl: './icon-lottery.component.html',
  styleUrls: ['./icon-lottery.component.scss']
})
export class IconLottery {
  public currentIcon = faQuestion;
  public isBlurred: boolean | undefined;
  private allIconsKeys = Object.keys(allIcons);
  private timeoutSubscription: Subscription | undefined;

  showRandomIcon() {
    this.currentIcon = faQuestion;
    this.isBlurred = true;

    if (this.timeoutSubscription) {
      this.timeoutSubscription.unsubscribe();
    }
  
    this.timeoutSubscription = timer(3000).subscribe(() => {
      const randomIndex = getRandomIndex(this.allIconsKeys);
      const randomKey = this.allIconsKeys[randomIndex];
      this.currentIcon = allIcons[randomKey];
      this.isBlurred = false;
    });
  }
}
import { Injectable } from "@angular/core";
import { fas as allIcons, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject } from 'rxjs';
import { getRandomIndex } from 'src/shared/helpers';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"

@Injectable({ providedIn: 'root' })
export class IconLotteryService {
  public currentIcon = faQuestion;
  public iconBlurred = false;
  private allIconsKeys = Object.keys(allIcons);
  private subject$ = new Subject<void>

  constructor() {
    this.subject$
      .pipe(debounceTime(3000), takeUntilDestroyed())
      .subscribe(() => {
        const randomIndex = getRandomIndex(this.allIconsKeys);
        const randomKey = this.allIconsKeys[randomIndex];
        this.currentIcon = allIcons[randomKey];
        this.iconBlurred = false;
    });
  }

  showRandomIcon() {
    this.currentIcon = faQuestion;
    this.iconBlurred = true;
    this.subject$.next()
  }
}
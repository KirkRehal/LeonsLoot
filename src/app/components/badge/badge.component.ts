import { Component, Input, OnInit } from '@angular/core';
import { BadgeType } from 'src/app/constants/badges.constant';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badge: BadgeType;

  public icon: string | null;
  public description: string | null;
  public isFa: boolean | null;
  public isShiny: boolean | null;

  constructor() { }

  ngOnInit(): void {
    let icon: string | null = null;
    let description: string | null = null;
    let isFa: boolean | null = null;

    switch(this.badge) {
      case 'CHIHUAHUA':
        icon = 'fa-dog';
        description = 'Talks a big game, but likely all bark with no bite';
        isFa = true;
        break;
      case 'DECEIVER':
        icon = 'live_help';
        description = 'Take caution when talking with a deceiver. They just might subvert your expectations';
        break;
      case 'GOBLET':
        icon = 'fa-champagne-glasses';
        isFa = true;
        description = 'Most powerful when alcohol is flowing';
        break;
      case 'GUARDIAN':
        icon = 'shield_with_heart';
        description = 'Defensive abilities are maximized when playing with a home field advantage';
        break;
      case 'OATHKEEPER':
        icon = 'volunteer_activism';
        description = 'Born with a heart of gold, so they cannot tell a lie';
        break;
      case 'PUPPETEER':
        icon = 'groups';
        description = 'They can control more than what meets the eye';
        break;
      case 'NARC':
        icon = 'fa-person-military-pointing';
        description = 'When pressured, they will offer up vital information to avoid being squeezed';
        isFa = true;
        break;
      case 'RECOLLECTOR':
        icon = 'psychology_alt';
        description = 'Infinite recollection. All actions are permanently transcribed into their memory bank';
        break;
      case 'SCHEMER':
        icon = 'lightbulb';
        description = 'Filled with an infinite flow of ideas';
        break;
      case 'WHISPERS':
        icon = 'transcribe';
        description = 'Always has an ear to the ground. All rumours are heard by the master of whispers';
        break;
      case 'FOUNDER':
        icon = 'military_tech';
        description = 'The founding father of Leons Loot';
        break;
      case 'HEIST':
        icon = 'fa-trophy';
        description = 'Successfully stolen the hotdog trophy';
        isFa = true;
        break;
      case 'DESTROYER':
        icon = 'fa-bandage';
        description = 'Damaged the trophy';
        isFa = true;
        break;
      case 'NIGHT OWL':
        icon = 'fa-moon';
        description = 'Maximum power when the clock strikes midnight';
        isFa = true;
        break;
      case 'INCOGNITO':
        icon = 'fa-mask';
        description = 'Able to disguise themselves as the opposite gender. Spooky!';
        isFa = true;
        break;
      default:
        break;
    }

    this.icon = icon;
    this.description = description;
    this.isFa = isFa;
  }

}

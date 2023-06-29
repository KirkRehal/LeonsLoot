import { Component, OnInit } from '@angular/core';
import { HEIST_COOLDOWN_IN_DAYS, NUM_DAYS_BETWEEN_EVENTS } from 'src/app/constants/heist-game.constant';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  public ownerRules: string[] = [
    'Trophy must be kept in a visible location in the owner\'s kitchen/living room',
    'Location tracker must stay attached to the trophy at all times',
    `Must host an event within ${NUM_DAYS_BETWEEN_EVENTS} days (timer resets after every event and when the trophy is heisted)`,
    `If an event is not hosted within ${NUM_DAYS_BETWEEN_EVENTS}, the trophy will be forfeited and all points accrued from the latest heist will be lost`,
    'If a thief completes a successful heist, the owner may issue an ACCUSATION',
    'If an ACCUSATION is successful, the trophy must be returned to the owner. Subsequent heists are prohibited by all participants for 24 hours'
  ];

  public thiefRules: string[] = [
    'Must not get caught in the act of stealing',
    `Any thief caught stealing is banned from subsequent steal attempts for ${HEIST_COOLDOWN_IN_DAYS} days`,
    `Any thief successfully accused against is banned from subsequent steal attempts for ${HEIST_COOLDOWN_IN_DAYS} days`
  ];

  public accusationRules: string[] = [
    'Each participant is allowed one ACCUSATION per calendar year',
    'Only the trophy owner may issue an ACCUSATION',
    'When issuing an ACCUSATION, the trophy owner must accuse a single person of currently being in possession of the trophy',
    'If an ACCUSATION is successful, the trophy owner will be granted an additional ACCUSATION',
    'An accusation must be made during the same event that the trophy is stolen'
  ];

  public winnerRules: string[] = [
    'Gets to select a vacation destination for the group at the time and place of their choosing',
    'Maximum of 2 PTO days may be used on the trip',
    'Maximum cost of $250/person for travel & housing accomodations'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

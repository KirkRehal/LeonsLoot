import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { PARTICIPANT_STATS } from 'src/app/constants/participants.constant';
import { ParticipantModel } from 'src/app/models/participant.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public members: (ParticipantModel & { hasHeistCooldown: boolean })[] = _.map(PARTICIPANT_STATS, p => {
    return <(ParticipantModel & { hasHeistCooldown: boolean })> {
      ...p,
      hasHeistCooldown: this.hasHeistCooldown(p)
    }
  });

  constructor() { }

  ngOnInit(): void {
  }

  private hasHeistCooldown(p: ParticipantModel): boolean {
    const now = Date.now();

    const cooldowns = _.filter(p.heistCooldownStartDates, d => {
      var delta = Math.abs(now - d.getTime()) / 1000;
      var days = Math.floor(delta / 86400);
      
      return days > 0;
    })
    return cooldowns.length > 0;
  }
}

import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { HEIST_COOLDOWN_IN_DAYS } from 'src/app/constants/heist-game.constant';
import { PARTICIPANT_STATS } from 'src/app/constants/participants.constant';
import { ParticipantModel } from 'src/app/models/participant.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public members: (ParticipantModel & { heistCooldown?: Date })[] = _.map(PARTICIPANT_STATS, p => {
    return <(ParticipantModel & { heistCooldown: Date })> {
      ...p,
      heistCooldown: this.getHeistCooldown(p)
    }
  });

  constructor() { }

  ngOnInit(): void {
  }

  private getHeistCooldown(p: ParticipantModel): Date {
    const now = Date.now();

    const cooldowns = _.filter(p.heistCooldownStartDates, d => {
      var delta = (now - d.getTime() )  / 1000;
      var days = Math.floor(delta / 86400);
      
      return days < HEIST_COOLDOWN_IN_DAYS;
    })

    return cooldowns.length > 0 ? _.last(cooldowns) : null;
  }

  public getHeistCooldownTooltip(cooldown?: Date) {
    if (!cooldown) {
      return '';
    }

    const now = Date.now();
    var delta = Math.abs(now - cooldown.getTime()) / 1000;
    var days = Math.floor(delta / 86400);

    return `Banned from heisting for ${HEIST_COOLDOWN_IN_DAYS - days} more day(s)` ;
  }
}

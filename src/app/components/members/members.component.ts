import { Component, OnInit } from '@angular/core';
import { PARTICIPANT_STATS } from 'src/app/constants/participants.constant';
import { ParticipantModel } from 'src/app/models/participant.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public members: ParticipantModel[] = PARTICIPANT_STATS;

  constructor() { }

  ngOnInit(): void {
  }

}

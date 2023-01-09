import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { HEIST_CODES_CODE_KEY_HASHMAP, HEIST_CODES_NAME_KEY_HASHMAP } from 'src/app/constants/heist-codes.constant';
import { AGENT_NAME_CONST } from 'src/app/constants/local-storage.const';
import { ParticipantName } from 'src/app/constants/participants.constant';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-heist',
  templateUrl: './heist.component.html',
  styleUrls: ['./heist.component.scss']
})
export class HeistComponent implements OnInit {
  public agentCodeHasBeenEntered: boolean = true;
  public removeCodeScreen: boolean = false;
  public agentCode: string = "";
  public agentName: ParticipantName;
  public heistMessage: string = "";
  public heistCompleted: boolean = false;

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.agentName = localStorage.getItem(AGENT_NAME_CONST) as ParticipantName;
    this.agentCodeHasBeenEntered = !!this.agentName;
  }

  validateCode(): void {
    const codeExists = !!HEIST_CODES_CODE_KEY_HASHMAP[this.agentCode];
    this.agentName = HEIST_CODES_CODE_KEY_HASHMAP[this.agentCode] as ParticipantName;

    this.removeCodeScreen = codeExists;
    setTimeout(() => {
      this.agentCodeHasBeenEntered = codeExists;

      if (codeExists) {
        localStorage.setItem(AGENT_NAME_CONST, this.agentName);
      }
    }, 2000);
  }

  sendHeistMessage(): void {    
    this.historyService.addRow(this.agentName, this.heistMessage).pipe(
      tap(() => this.heistCompleted = true)
    ).subscribe();
  }
}

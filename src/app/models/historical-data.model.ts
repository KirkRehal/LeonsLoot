import { ParticipantName } from "../constants/participants.constant"

export type HistoricalData = {
    owner: ParticipantName;
    takenOn: Date;
    heistMessage: string;
}
import { ParticipantName } from "../constants/participants.constant"

export type PossessionLeaderboardEntry = {
    owner: ParticipantName;
    possessionTimeNumber: number;
    possessionTimeDays: number;
    possessionTimeHours: number;
    possessionTimeMinutes: number;
    possessionTimeSeconds: number;
}
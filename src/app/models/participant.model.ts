import { BadgeType } from "../constants/badges.constant"
import { ParticipantName } from "../constants/participants.constant"

export type ParticipantModel = {
    name: ParticipantName;
    stats: ParticipantStats;
    badges: BadgeType[];
    profileImageSrc: string;
    hasAccusation: boolean;
}

export type ParticipantStats = {
    deception: number;
    evasion: number;
    creativity: number;
    sneak: number;
    nimble: number;
    overall: number;
}
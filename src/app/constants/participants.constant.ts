import * as _ from "lodash";
import { ParticipantModel } from "../models/participant.model";

export const PARTICIPANT_AARON = 'Aaron';
export const PARTICIPANT_ANTHONY = 'Anthony';
export const PARTICIPANT_CARLOS = 'Carlos';
export const PARTICIPANT_CHAYA = 'Chaya';
export const PARTICIPANT_DAVID_LI = 'David Li';
export const PARTICIPANT_DAVID_HWANG = 'David Hwang';
export const PARTICIPANT_JESS = 'Jess';
export const PARTICIPANT_KAREN = 'Karen';
export const PARTICIPANT_KIRK = 'Kirk';
export const PARTICIPANT_LAWRENCE = 'Lawrence';
export const PARTICIPANT_STEPHANIE = 'Stephanie';
export const PARTICIPANT_TINA = 'Tina';

export const PARTICPANT_LIST = [
    PARTICIPANT_AARON,
    PARTICIPANT_ANTHONY,
    PARTICIPANT_CARLOS,
    PARTICIPANT_CHAYA,
    PARTICIPANT_DAVID_LI,
    PARTICIPANT_DAVID_HWANG,
    PARTICIPANT_JESS,
    PARTICIPANT_KAREN,
    PARTICIPANT_KIRK,
    PARTICIPANT_LAWRENCE,
    PARTICIPANT_STEPHANIE,
    PARTICIPANT_TINA
] as const;

type InternalParticipantType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ParticipantType> ? ParticipantType : never;
export type ParticipantName = InternalParticipantType<typeof PARTICPANT_LIST>;


const PARTICIPANT_STATS_NO_OVERALL: ParticipantModel[] = [
    {
        name: PARTICIPANT_AARON,
        stats: {
            deception: 22,
            evasion: 60,
            creativity: 72,
            sneak: 85,
            nimble: 76,
            overall: 0
        },
        profileImageSrc: 'images/aaron.JPG',
        badges: ['OATHKEEPER'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_ANTHONY,
        stats: {
            deception: 73,
            evasion: 55,
            creativity: 91,
            sneak: 36,
            nimble: 41,
            overall: 0
        },
        profileImageSrc: 'images/anthony.JPG',
        badges: ['WHISPERS'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_CARLOS,
        stats: {
            deception: 44,
            evasion: 86,
            creativity: 79,
            sneak: 57,
            nimble: 94,
            overall: 0
        },
        profileImageSrc: 'images/carlos.JPG',
        badges: ['NARC'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_CHAYA,
        stats: {
            deception: 97,
            evasion: 83,
            creativity: 77,
            sneak: 68,
            nimble: 42,
            overall: 0
        },
        profileImageSrc: 'images/chaya.JPG',
        badges: ['DECEIVER'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_DAVID_LI,
        stats: {
            deception: 28,
            evasion: 22,
            creativity: 97,
            sneak: 4,
            nimble: -15,
            overall: 0
        },
        profileImageSrc: 'images/david.JPG',
        badges: ["FOUNDER",'CHIHUAHUA', 'DESTROYER'],
        hasAccusation: true,
        heistCooldownStartDates: [new Date('01/06/23')]
    },
    {
        name: PARTICIPANT_DAVID_HWANG,
        stats: {
            deception: 33,
            evasion: 20,
            creativity: 74,
            sneak: 22,
            nimble: 40,
            overall: 0
        },
        profileImageSrc: 'images/david.JPG',
        badges: ['NIGHT OWL'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_JESS,
        stats: {
            deception: 90,
            evasion: 14,
            creativity: 66,
            sneak: 28,
            nimble: 30,
            overall: 0
        },
        profileImageSrc: 'images/jess.JPG',
        badges: ['GUARDIAN'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_KAREN,
        stats: {
            deception: 89,
            evasion: 61,
            creativity: 15,
            sneak: 45,
            nimble: 86,
            overall: 0
        },
        profileImageSrc: 'images/karen.JPG',
        badges: ['RECOLLECTOR', 'HEIST'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_KIRK,
        stats: {
            deception: 82,
            evasion: 43,
            creativity: 85,
            sneak: 14,
            nimble: 21,
            overall: 0
        },
        profileImageSrc: 'images/kirk.JPG',
        badges: ['SCHEMER'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_LAWRENCE,
        stats: {
            deception: 12,
            evasion: 26,
            creativity: 55,
            sneak: 19,
            nimble: 30,
            overall: 0
        },
        profileImageSrc: 'images/david.JPG',
        badges: ['INCOGNITO'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_STEPHANIE,
        stats: {
            deception: 91,
            evasion: 66,
            creativity: 88,
            sneak: 56,
            nimble: 21,
            overall: 0
        },
        profileImageSrc: 'images/stephanie.JPG',
        badges: ['PUPPETEER'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_TINA,
        stats: {
            deception: 94,
            evasion: 61,
            creativity: 50,
            sneak: 24,
            nimble: 35,
            overall: 0
        },
        profileImageSrc: 'images/tina.JPG',
        badges: ['GOBLET'],
        hasAccusation: true,
        heistCooldownStartDates: []
    }
];

export const PARTICIPANT_STATS = _.map(PARTICIPANT_STATS_NO_OVERALL, p => {
    return <ParticipantModel> {
        ...p,
        stats: {
            ...p.stats,
            overall: Math.floor(_.sum([p.stats.deception, p.stats.evasion, p.stats.creativity, p.stats.sneak, p.stats.nimble]) / 5)
        }
    }
});
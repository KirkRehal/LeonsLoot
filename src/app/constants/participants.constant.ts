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
    PARTICIPANT_TINA
] as const;

type InternalParticipantType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ParticipantType> ? ParticipantType : never;
export type ParticipantName = InternalParticipantType<typeof PARTICPANT_LIST>;


const PARTICIPANT_STATS_NO_OVERALL: ParticipantModel[] = [
    {
        name: PARTICIPANT_AARON,
        stats: {
            deception: 61,
            evasion: 60,
            creativity: 32,
            sneak: 71,
            nimble: 35,
            overall: 0
        },
        profileImageSrc: 'images/aaron.JPEG',
        // badges: ['DOUBLE DOWN'],
        badges: [],
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
        profileImageSrc: 'images/unknown.jpg',
        badges: [],
        // badges: ['WHISPERS', 'GOBLET'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_CARLOS,
        stats: {
            deception: 59,
            evasion: 86,
            creativity: 79,
            sneak: 57,
            nimble: 94,
            overall: 0
        },
        profileImageSrc: 'images/carlos.JPEG',
        badges: [],
        // badges: ['NARC'],
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
        profileImageSrc: 'images/chaya.JPEG',
        badges: [],
        // badges: ['DECEIVER'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_DAVID_LI,
        stats: {
            deception: 66,
            evasion: 46,
            creativity: 98,
            sneak: 42,
            nimble: 14,
            overall: 0
        },
        profileImageSrc: 'images/davidli.JPEG',
        badges: [],
        // badges: ["FOUNDER",'CHIHUAHUA', 'DESTROYER', 'HEIST'],
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
        profileImageSrc: 'images/davidhwang.JPEG',
        badges: [],
        // badges: ['NIGHT OWL'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_JESS,
        stats: {
            deception: 94,
            evasion: 34,
            creativity: 66,
            sneak: 59,
            nimble: 30,
            overall: 0
        },
        profileImageSrc: 'images/jess.JPEG',
        badges: [],
        // badges: ['GUARDIAN', 'HEIST'],
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
        profileImageSrc: 'images/karen.JPEG',
        badges: [],
        // badges: ['RECOLLECTOR', 'HEIST'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_KIRK,
        stats: {
            deception: 88,
            evasion: 78,
            creativity: 85,
            sneak: 88,
            nimble: 67,
            overall: 0
        },
        profileImageSrc: 'images/kirk.jpg',
        badges: ['2023 Winner'],
        // badges: ['SCHEMER', 'HEIST'],
        hasAccusation: true,
        heistCooldownStartDates: []
    },
    {
        name: PARTICIPANT_LAWRENCE,
        stats: {
            deception: 28,
            evasion: 26,
            creativity: 58,
            sneak: 44,
            nimble: 39,
            overall: 0
        },
        profileImageSrc: 'images/lawrence.jpg',
        badges: [],
        // badges: ['INCOGNITO', 'OATHKEEPER'],
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
        profileImageSrc: 'images/tina.jpg',
        badges: [],
        // badges: ['GOBLET'],
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
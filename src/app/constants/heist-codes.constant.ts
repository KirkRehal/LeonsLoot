import * as _ from "lodash";
import { PARTICIPANT_AARON, PARTICIPANT_ANTHONY, PARTICIPANT_CARLOS, PARTICIPANT_CHAYA, PARTICIPANT_DAVID_HWANG, PARTICIPANT_DAVID_LI, PARTICIPANT_JESS, PARTICIPANT_KAREN, PARTICIPANT_KIRK, PARTICIPANT_LAWRENCE, PARTICIPANT_TINA } from "./participants.constant";

export const HEIST_CODES_NAME_KEY_HASHMAP = {
    [PARTICIPANT_AARON]: 'noiseStorm',
    [PARTICIPANT_ANTHONY]: 'snackSwing',
    [PARTICIPANT_CARLOS]: 'heavyShaft',
    [PARTICIPANT_CHAYA]: 'anglePrize',
    [PARTICIPANT_DAVID_LI]: 'splitImage',
    [PARTICIPANT_DAVID_HWANG]: 'tiredSmile',
    [PARTICIPANT_JESS]: 'scoreTroop',
    [PARTICIPANT_KAREN]: 'staffWorry',
    [PARTICIPANT_KIRK]: 'braveRally',
    [PARTICIPANT_LAWRENCE]: 'gropeScope',
    [PARTICIPANT_TINA]: 'awfulRough'
};

export const HEIST_CODES_CODE_KEY_HASHMAP = _.invert(HEIST_CODES_NAME_KEY_HASHMAP);
/* tslint:disable */
/* eslint-disable */
/**
 * chomestatus API
 * The API for chromestatus.com. chromestatus.com is the official tool used for tracking feature launches in Blink (the browser engine that powers Chrome and many other web browsers). This tool guides feature owners through our launch process and serves as a primary source for developer information that then ripples throughout the web developer ecosystem. More details at: https://github.com/GoogleChrome/chromium-dashboard
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DismissCueRequest
 */
export interface DismissCueRequest {
    /**
     * 
     * @type {string}
     * @memberof DismissCueRequest
     */
    cue: DismissCueRequestCueEnum;
}


/**
 * @export
 */
export const DismissCueRequestCueEnum = {
    progress_checkmarks: 'progress-checkmarks'
} as const;
export type DismissCueRequestCueEnum = typeof DismissCueRequestCueEnum[keyof typeof DismissCueRequestCueEnum];


/**
 * Check if a given object implements the DismissCueRequest interface.
 */
export function instanceOfDismissCueRequest(value: object): value is DismissCueRequest {
    if (!('cue' in value) || value['cue'] === undefined) return false;
    return true;
}

export function DismissCueRequestFromJSON(json: any): DismissCueRequest {
    return DismissCueRequestFromJSONTyped(json, false);
}

export function DismissCueRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DismissCueRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cue': json['cue'],
    };
}

export function DismissCueRequestToJSON(value?: DismissCueRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cue': value['cue'],
    };
}

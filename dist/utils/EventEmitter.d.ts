import { dragonBones } from '../libs'
export declare class EventEmitter {
    private callbacks;
    addDBEventListener(type: string, callbackFn: Function, callbackContext: any): void;
    removeDBEventListener(type: string, callbackFn: Function, callbackContext: any): void;
    hasDBEventListener(type: string): boolean;
    dispatchDBEvent(type: string, data: dragonBones.EventObject): void;
}

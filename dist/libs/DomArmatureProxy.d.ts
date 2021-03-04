import { dragonBones } from '.'
export declare class DomArmatureProxy implements dragonBones.IArmatureProxy {
    root: HTMLDivElement;
    private _armature;
    private _eventEmitter;
    constructor();
    dbInit(armature: dragonBones.Armature): void;
    dbClear(): void;
    dbUpdate(): void;
    dispose(): void;
    get armature(): dragonBones.Armature;
    get animation(): dragonBones.Animation;
    hasDBEventListener(type: string): boolean;
    dispatchDBEvent(type: string, eventObject: dragonBones.EventObject): void;
    addDBEventListener(type: string, listener: Function, thisObject: any): void;
    removeDBEventListener(type: string, listener: Function, thisObject: any): void;
}

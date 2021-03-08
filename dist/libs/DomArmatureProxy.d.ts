import { dragonBones } from '.'
import { EventEmitter } from '../utils/EventEmitter'
export declare class DomArmatureProxy extends EventEmitter implements dragonBones.IArmatureProxy {
    root: HTMLDivElement;
    private _armature;
    constructor();
    dbInit(armature: dragonBones.Armature): void;
    dbClear(): void;
    dbUpdate(): void;
    dispose(): void;
    get armature(): dragonBones.Armature;
    get animation(): dragonBones.Animation;
}

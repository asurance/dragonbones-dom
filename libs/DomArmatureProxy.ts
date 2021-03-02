import dragonBones from '../dragonbones/dragonBones'
import { EventEmitter } from '../utils/EventEmitter'

export class DomArmatureProxy implements dragonBones.IArmatureProxy {

    root: HTMLDivElement
    
    private _armature: dragonBones.Armature | null = null
    private _eventEmitter = new EventEmitter()

    constructor() {
        this.root = document.createElement('div')
        this.root.style.position = 'relative'
    }

    dbInit(armature: dragonBones.Armature): void {
        this._armature = armature
    }

    dbClear(): void {
        this._armature = null
    }

    dbUpdate(): void {
        // nothing
    }

    dispose(): void {
        if (this._armature !== null) {
            this._armature.dispose()
            this._armature = null
        }
    }

    get armature(): dragonBones.Armature {
        return this._armature!
    }

    get animation(): dragonBones.Animation {
        if (this._armature) {
            return this._armature.animation
        } else {
            return null as unknown as dragonBones.Animation
        }
    }

    hasDBEventListener(type: string): boolean {
        return this._eventEmitter.has(type)
    }

    dispatchDBEvent(type: string, eventObject: dragonBones.EventObject): void {
        this._eventEmitter.emit(type, eventObject)
    }

    addDBEventListener(type: string, listener: Function, thisObject: any): void {
        this._eventEmitter.on(type, listener, thisObject)
    }
    
    removeDBEventListener(type: string, listener: Function, thisObject: any): void {
        this._eventEmitter.off(type, listener, thisObject)
    }

}
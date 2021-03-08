import dragonBones from '../dragonbones/dragonBones'
import { EventEmitter } from '../utils/EventEmitter'

export class DomArmatureProxy extends EventEmitter implements dragonBones.IArmatureProxy {

    root: HTMLDivElement
    
    private _armature: dragonBones.Armature | null = null

    constructor() {
        super()
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

}
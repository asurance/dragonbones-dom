import dragonBones from '../dragonbones/dragonBones'
import { DomTextureData } from './DomTextureData'

export class DomSlot extends dragonBones.Slot {
    static toString() {
        return '[class DomSlot]'
    }
    private root!: HTMLDivElement
    private divElement!: HTMLDivElement

    // params value: any, isRetain: boolean
    protected _initDisplay(): void {
        // nothing
    }
    // params value: any, isRelease: boolean
    protected _disposeDisplay(): void {
        // nothing
    }
    protected _onUpdateDisplay(): void {
        this.root = this._armature.display
        this.divElement = this._display ? this._display : this._rawDisplay
    }
    protected _addDisplay(): void {
        const root = this.root
        root.appendChild(this.divElement)
    }
    protected _replaceDisplay(value: HTMLDivElement): void {
        const root = this.root
        root.replaceChild(this.divElement, value)
    }
    protected _removeDisplay(): void {
        const root = this.root
        root.removeChild(this.divElement)
    }
    protected _updateZOrder(): void {
        this.divElement.style.zIndex = `${this._zOrder}`
    }
    _updateVisible(): void {
        const visible = this._parent.visible && this._visible
        this.divElement.style.visibility = visible ? 'visible' : 'hidden'
    }
    protected _updateBlendMode(): void {
        if (this._blendMode !== 0) {
            // TODO background-blend-mode
            throw new Error('BlendMode not implemented.')
        }
    }
    protected _updateColor(): void {
        const alpha = this._colorTransform.alphaMultiplier * this._globalAlpha
        this.divElement.style.opacity = `${alpha}`
    }
    protected _updateFrame(): void {
        const textureData = this._textureData as DomTextureData
        this.divElement.style.backgroundImage = `url(${textureData.atlas.url})`
        const region = textureData.region
        this.divElement.style.width = `${region.width}px`
        this.divElement.style.height = `${region.height}px`
        this.divElement.style.backgroundPosition = `${-region.x}px ${-region.y}px`
    }
    protected _updateMesh(): void {
        throw new Error('Mesh not implemented.')
    }
    protected _updateTransform(): void {
        const matrix = this.globalTransformMatrix
        const a = matrix.a
        const b = matrix.b
        const c = matrix.c
        const d = matrix.d
        const tx = matrix.tx - this._pivotX
        const ty = matrix.ty - this._pivotY
        this.divElement.style.transform = `matrix(${a},${b},${c},${d},${tx},${ty})`
    }
    protected _identityTransform(): void {
        this.divElement.style.transform = 'matrix(1,0,0,1,0,0)'
    }

}
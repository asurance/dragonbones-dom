import dragonBones from '../dragonbones/dragonBones'
import { DomArmatureProxy } from './DomArmatureProxy'
import { DomSlot } from './DomSlot'
import { DomTextureAtlasData } from './DomTextureAtlasData'

export class DomFactory extends dragonBones.BaseFactory {

    protected _isSupportMesh() {
        return false
    }

    protected _buildTextureAtlasData(textureAtlasData: DomTextureAtlasData | null, textureAtlas: string): DomTextureAtlasData {
        if (textureAtlasData) {
            if (textureAtlas) {
                textureAtlasData.url = textureAtlas
            }
        } else {
            textureAtlasData = dragonBones.BaseObject.borrowObject(DomTextureAtlasData)
        }
        return textureAtlasData
    }
    protected _buildArmature(dataPackage: dragonBones.BuildArmaturePackage): dragonBones.Armature {
        const armature = dragonBones.BaseObject.borrowObject(dragonBones.Armature)
        const domArmatureProxy = new DomArmatureProxy()
        armature.init(dataPackage.armature, domArmatureProxy, domArmatureProxy.root, this._dragonBones)
        return armature
    }
    protected _buildSlot(dataPackage: dragonBones.BuildArmaturePackage, slotData: dragonBones.SlotData, armature: dragonBones.Armature): DomSlot {
        const slot = dragonBones.BaseObject.borrowObject(DomSlot)
        const display = document.createElement('div')
        display.style.position = 'absolute'
        slot.init(slotData, armature, display, null)
        return slot
    }

}
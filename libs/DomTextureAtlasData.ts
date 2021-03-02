import dragonBones from '../dragonbones/dragonBones'
import { DomTextureData } from './DomTextureData'

export class DomTextureAtlasData extends dragonBones.TextureAtlasData {

    static toString() {
        return '[class DomTextureAtlasData]'
    }

    url = ''
    
    createTexture(): DomTextureData {
        const textureData = dragonBones.BaseObject.borrowObject(DomTextureData)
        textureData.atlas = this
        return textureData
    }

}
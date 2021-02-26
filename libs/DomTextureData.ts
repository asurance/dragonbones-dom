import dragonBones from '../dragonbones/dragonBones'
import { DomTextureAtlasData } from './DomTextureAtlasData'

export class DomTextureData extends dragonBones.TextureData {
    atlas!: DomTextureAtlasData
    static toString() {
        return '[class DomTextureData]'
    }
}
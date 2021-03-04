import { dragonBones } from '.'
import { DomTextureData } from './DomTextureData'
export declare class DomTextureAtlasData extends dragonBones.TextureAtlasData {
    static toString(): string;
    url: string;
    createTexture(): DomTextureData;
}

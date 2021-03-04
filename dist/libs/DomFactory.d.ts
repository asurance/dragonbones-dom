import { dragonBones } from '.'
import { DomSlot } from './DomSlot'
import { DomTextureAtlasData } from './DomTextureAtlasData'
export declare class DomFactory extends dragonBones.BaseFactory {
    protected _isSupportMesh(): boolean;
    protected _buildTextureAtlasData(textureAtlasData: DomTextureAtlasData | null, textureAtlas: string): DomTextureAtlasData;
    protected _buildArmature(dataPackage: dragonBones.BuildArmaturePackage): dragonBones.Armature;
    protected _buildSlot(dataPackage: dragonBones.BuildArmaturePackage, slotData: dragonBones.SlotData, armature: dragonBones.Armature): DomSlot;
}

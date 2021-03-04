import { dragonBones } from '.'
export declare class DomSlot extends dragonBones.Slot {
    static toString(): string;
    private divElement;
    protected _initDisplay(): void;
    protected _disposeDisplay(): void;
    protected _onUpdateDisplay(): void;
    protected _addDisplay(): void;
    protected _replaceDisplay(value: HTMLDivElement): void;
    protected _removeDisplay(): void;
    protected _updateZOrder(): void;
    _updateVisible(): void;
    protected _updateBlendMode(): void;
    protected _updateColor(): void;
    protected _updateFrame(): void;
    protected _updateMesh(): void;
    protected _updateTransform(): void;
    protected _identityTransform(): void;
}

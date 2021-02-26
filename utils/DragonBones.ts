import { DomFactory } from '../libs/DomFactory'

export function CreateFactory(skeletonJson: unknown, textureJson: unknown, textureUrl: string) {
    const factory = new DomFactory()
    factory.parseDragonBonesData(skeletonJson)
    factory.parseTextureAtlasData(textureJson, textureUrl)
    return factory
}
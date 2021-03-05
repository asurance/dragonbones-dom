import db from '../dragonbones/dragonBones'
import { DomArmatureProxy } from './DomArmatureProxy'

export { DomFactory } from './DomFactory'

export const dragonBones = db

export function CreateEventManager(): db.IEventDispatcher {
    return new DomArmatureProxy()
}
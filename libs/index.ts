import db from '../dragonbones/dragonBones'
import { EventEmitter } from '../utils/EventEmitter'

export { DomFactory } from './DomFactory'

export const dragonBones = db

export function CreateEventManager(): db.IEventDispatcher {
    return new EventEmitter()
}
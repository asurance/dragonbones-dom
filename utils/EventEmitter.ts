type Callback = {
    fn: Function
    context: any
}

export class EventEmitter {
    private callbacks: { [key: string]: Callback | Callback[] } = {}
    on(type: string, callbackFn: Function, callbackContext: any) {
        const newCallback: Callback = {
            fn: callbackFn,
            context: callbackContext,
        }
        if (type in this.callbacks) {
            const callbacks = this.callbacks[type]
            if (Array.isArray(callbacks)) {
                callbacks.push(newCallback)
            } else {
                this.callbacks[type] = [
                    callbacks,
                    newCallback,
                ]
            }
        } else {
            this.callbacks[type] = newCallback
        }
    }
    off(type: string, callbackFn: Function, callbackContext: any) {
        if (type in this.callbacks) {
            const callbacks = this.callbacks[type]
            if (Array.isArray(callbacks)) {
                let delCount = 0
                for (let i = 0; i < callbacks.length; i++) {
                    if (callbacks[i].fn === callbackFn && callbacks[i].context === callbackContext) {
                        delCount++
                    } else {
                        callbacks[i - delCount] = callbacks[i]
                    }
                }
                if (callbacks.length - delCount === 0) {
                    delete this.callbacks[type]
                } else if (callbacks.length - delCount === 1) {
                    this.callbacks[type] = callbacks[0]
                } else {
                    callbacks.length -= delCount
                }
            } else {
                if (callbacks.fn === callbackFn && callbacks.context === callbackContext) {
                    delete this.callbacks[type]
                }
            }
        }
    }
    has(type: string) {
        return type in this.callbacks
    }
    emit(type: string, data: any) {
        if (type in this.callbacks) {
            const callbacks = this.callbacks[type]
            if (Array.isArray(callbacks)) {
                for (const callback of callbacks) {
                    callback.fn.call(callback.context, data)
                }
            } else {
                callbacks.fn.call(callbacks.context, data)
            }
        }
    }
}
export declare class EventEmitter {
    private callbacks;
    on(type: string, callbackFn: Function, callbackContext: any): void;
    off(type: string, callbackFn: Function, callbackContext: any): void;
    has(type: string): boolean;
    emit(type: string, data: any): void;
}

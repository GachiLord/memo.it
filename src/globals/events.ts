import EventEmitter from "eventemitter3";


export interface IAppEventMap{
    'decrypt': (text: string) => void
}

export interface IAppEventEmitter{
    on<E extends keyof IAppEventMap>(type: E, listener: IAppEventMap[E]): void;
    once<E extends keyof IAppEventMap>(type: E, listener: IAppEventMap[E]): void;
    emit<E extends keyof IAppEventMap>(type: E, ...params: unknown[]): void;
}

class AppEventEmitter extends EventEmitter implements IAppEventEmitter{}
const emitter: IAppEventEmitter = new AppEventEmitter()

export default emitter
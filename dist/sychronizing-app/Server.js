"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor() {
        this.store = {
            timestamp: 0,
            data: ''
        };
    }
    getData(clientTimestamp) {
        if (clientTimestamp < this.store.timestamp) {
            return this.store;
        }
        else {
            return undefined;
        }
    }
}
exports.Server = Server;

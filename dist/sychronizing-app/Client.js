"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(server) {
        this.server = server;
        this.store = {
            timestamp: 0,
            data: undefined
        };
    }
    synchronize() {
        let updateStore = this.server.getData(this.store.timestamp);
        if (updateStore) {
            this.store = updateStore;
        }
    }
    update(data) {
        this.store.data = data;
        this.store.timestamp = Date.now();
    }
}
exports.Client = Client;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
class utils {
    static generateRandomNumber(length) {
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.utils = utils;
//# sourceMappingURL=utils.js.map
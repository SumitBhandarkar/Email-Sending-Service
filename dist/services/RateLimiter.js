"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
class RateLimiter {
    constructor(limit, interval) {
        this.requests = 0;
        this.limit = limit;
        this.interval = interval;
        this.intervalId = setInterval(() => {
            this.requests = 0;
        }, this.interval);
    }
    // Method to check if a request is allowed based on the rate limit
    isAllowed() {
        if (this.requests < this.limit) {
            this.requests += 1;
            return true;
        }
        return false;
    }
    // Method to clear the interval
    clear() {
        clearInterval(this.intervalId);
    }
}
exports.RateLimiter = RateLimiter;

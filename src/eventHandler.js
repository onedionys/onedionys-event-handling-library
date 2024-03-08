class EventHandler {
    constructor() {
        this.listeners = {};
    }

    // Function to add event listener
    addEventListener(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    // Function to remove event listener
    removeEventListener(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
        }
    }

    // Function to trigger event
    fireEvent(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

module.exports = EventHandler;

const assert = require('assert');
const EventHandler = require('../src/eventHandler');

describe('EventHandler', function () {
    it('should add event listener and trigger event', function () {
        const eventHandler = new EventHandler();
        let eventTriggered = false;
        eventHandler.addEventListener('testEvent', function () {
            eventTriggered = true;
        });
        eventHandler.fireEvent('testEvent');
        assert.strictEqual(eventTriggered, true);
    });

    it('should remove event listener', function () {
        const eventHandler = new EventHandler();
        let eventTriggered = false;
        const listener = function () {
            eventTriggered = true;
        };
        eventHandler.addEventListener('testEvent', listener);
        eventHandler.removeEventListener('testEvent', listener);
        eventHandler.fireEvent('testEvent');
        assert.strictEqual(eventTriggered, false);
    });
});

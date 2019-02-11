const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'Johnny';
        let text = 'Text we will test';
        let newMessage = generateMessage(from, text);
        // expect(newMessage).toMatchObject({from, text});
        expect(newMessage.from).toBe(from);
        expect(newMessage.text).toBe(text);
        expect(typeof newMessage.createdAt).toBe('number');
    });
});
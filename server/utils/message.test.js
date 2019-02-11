const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let lat = 1;
        let long = 1;
        let from = 'Johnny';
        let location = generateLocationMessage(from, lat, long);
        expect(location.from).toBe(from);
        expect(location.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
        expect(typeof location.createdAt).toBe('number');
    });
});
const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let result = isRealString(123);
        expect(result).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        let result = isRealString('      ');
        expect(result).toBeFalsy();
    });

    it('should allow strings with non-space characters', () => {
        let result = isRealString('   lotr  ');
        expect(result).toBeTruthy();
    });
});
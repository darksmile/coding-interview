import chai from 'chai';


/* The first solution that comes into mind is just to store met characters in
 * set. This allows us to go through string char-by-char and check whether
 * this symbol was in the string earlier.
 * Time complexity: O(n + m), n - string length, m - available symbols dict. Depends on Set implementation
 * Space complexity: n
 */
function isUnique(string) {
    const chars = new Set();

    for (let i = 0; i < string.length; i++) {
        if (chars.has(string[i])) { return false; }
        chars.add(string[i]);
    }

    return true;
}


/* Another solution is to sort the string. If we don't have to keep the
 * original string, we can sort it in-place. In sorted string we can check
 * neighbour chars to be not equal.
 * Time complexity: O(nlogn) - actually, sorting algorithm complexity
 * Space complexity: 1
 */
function isUniqueWithSort(string) {
    // I just don't want to implement sorting algorithm here.
    // This line should call in-place sorting function.
    const sorted = Array.from(string).sort();

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i-1]) { return false; }
    }

    return true;
}


/* The third one - just compare any two chars in the string.
 * Time complexity: O(n^2)
 * Space complexity: 1
 */
function isUniqueStraightforward(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < i; j++) {
            if (string[i] === string[j]) { return false; }
        }
    }

    return true;
}


function testCases(isUnique) {
    it('should return true for empty string', ()=> {
        const empty = '';
        chai.expect(isUnique(empty)).to.be.true;
    });

    it('should return true for unique string', ()=> {
        const unique = '12345';
        chai.expect(isUnique(unique)).to.be.true;
    });

    it('should return false for not unique string', ()=> {
        const notUnique = 'asdffhj';
        chai.expect(isUnique(notUnique)).to.be.false;
    });

    it('should return false for string with all equal chars', ()=> {
        const allEqual = 'aaaaaa';
        chai.expect(isUnique(allEqual)).to.be.false;
    });

    it('should return true for one-symbol string', ()=> {
        const oneSymbol = '1';
        chai.expect(isUnique(oneSymbol)).to.be.true;
    });
}


describe('1 chapter, 1 problem', ()=> {
    describe('#isUnique', ()=> testCases(isUnique));
    describe('#isUniqueWithSort', ()=> testCases(isUniqueWithSort));
    describe('#isUniqueStraightforward', ()=> testCases(isUniqueStraightforward));
});

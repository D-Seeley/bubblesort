const expect = require('chai').expect;

function swap(a,b) {
    return [b,a];

}

function bubbleSort(arr) {
    swap(arr[0], arr[1]);
    return arr;
}

describe('Bubble Sort', () => {
    it('handles an empty array', () => {
        expect(bubbleSort([])).to.eql([]);
    });

    it('takes a random array, and returns sorted array', () => {
        expect(bubbleSort([8,2,5,3,9]).to.eql([2,3,5,8,9]));
    });
});

//Syntax from class not supported with Mocha / the current EC
/*
beforeEach(() => {
    spyOn(window, 'swap').and.callThrough();
});
it('counts how many times swap() is called', () => {
    bubblesort([2,1]);
    expect(window.swap.calls.count()).toEqual(1);
});
*/ 
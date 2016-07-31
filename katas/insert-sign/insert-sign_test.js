describe('insert signs', function() {

    it('should return missed signs', function() {
        expect(insertSign([2,4,5], 3)).toEqual('2-4+5=3');
        expect(insertSign([1,1,1], 1)).toEqual('1+1-1=1');
        expect(insertSign([30,10,15], 25)).toEqual('30+10-15=25');
    });
});

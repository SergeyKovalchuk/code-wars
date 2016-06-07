describe('Monad', function() {

    it('should return true if position is reachable', function() {
        expect(canReach([6, 2], [8, 1], 1)).toBeTruthy();
        expect(canReach([6, 2], [8, 2], 2)).toBeTruthy();
        expect(canReach([6, 2], [6, 2], 0)).toBeTruthy();
    });

    it('should return false if position is not reachable', function() {
        expect(canReach([6, 2], [8, 1], 2)).toBeFalsy();
        expect(canReach([6, 2], [8, 2], 1)).toBeFalsy();
        expect(canReach([6, 2], [8, 1], 0)).toBeFalsy();
    });
});

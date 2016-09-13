describe('uefa euro', function() {

    it('create appropriate text', function() {
        expect(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])).toEqual('At match Germany - Ukraine, Germany won!');
        expect(uefaEuro2016(['Belgium', 'Italy'],[0, 2])).toEqual('At match Belgium - Italy, Italy won!');
        expect(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])).toEqual('At match Portugal - Iceland, teams played draw.');
    });
});

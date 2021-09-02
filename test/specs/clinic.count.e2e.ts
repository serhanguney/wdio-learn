describe('Clinics Page', () => {
    it('Verify list items' , ()=> {
        browser.url('/');

        const listOfClinics = $$("ul li");

        expect(listOfClinics).toBeElementsArrayOfSize(4);
    })
})
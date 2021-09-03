describe("Clinics Page", () => {
  it("Verify list items", async () => {
    await browser.url("/");

    const listOfClinics = await $$("ul li");

    expect(listOfClinics).toHaveLength(4);
  });
});

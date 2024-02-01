describe('APItesting', () => { 
  const randData = Math.floor(Math.random() * 1000).toString();

  beforeEach(() => {
    cy.addData(randData);
  })

  it('positive', function () {
    cy.createUser(this.data).then(response => {
      expect(response.body.name).to.eq(randData);
      expect(response.body.email).to.eq(`${randData}@gmail.com`);

      const id = response.body.id;

      cy.getUser(id).then(response => {
        expect(response.body.id).to.not.be.null;
        expect(response.body.id).to.eq(id);
        expect(response.body.name).to.eq(randData);
        expect(response.body.email).to.eq(`${randData}@gmail.com`);
      });

      cy.deleteUser(id).then(response => {
        expect(response.status).to.eq(204);
      });
    });
  });
});
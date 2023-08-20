import data from "../fixtures/login.json"

describe('user stope api', () => {


  it('should create user', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user', data
    ).then((response) => {
      expect(response.body).be.eql({
        code: 200,
        message: "1010",
        type: "unknown"
      });
    });
  });

  it('should update user', () => {   
    cy.request('PUT', `https://petstore.swagger.io/v2/user/${data.id}`, 
      {
        id: 10
      }
      ).then((resp) => {
        expect(resp.body).be.eql({
          message: "10",
          type: "unknown",
          code: 200
        });
      });
    });

  it('should delete user', () => {
    cy.request('DELETE', `https://petstore.swagger.io/v2/user/${data.username}`).then((r) => {
        expect(r.status).be.eq(200);
    });
  });
}); 
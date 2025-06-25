import { expect } from 'chai';
import request from 'supertest'
import app from '../index.js' // Your Express app

describe('App CRUD', () => {
  it('API integration test - create a new data', async () => {
    const res = await request(app).post('/api/create').send({
      title: 'John Doe',
      description: 'john@example.com'
    })

    expect(res.status).to.equal(200)
    expect(res.body).to.have.property('data')
  })

  // it("Service - Unit Test",async ()=>{
  //   const fakeUser = { _id: '123', title: 'titleValue',  description:'descriptionValue'};
  //   Sinon.stub(appRepository, 'createAppData').resolves(fakeUser);
  //   const appData = await appService.createData('titleValue','descriptionValue');
  //   // expect(appData).to.deep.equal({ _id: '123', title: 'titleValue',  description:'descriptionValue'});
  //   expect(appData).to.have.property('_id','123');
  //   expect(appData).to.not.have.property('description')
  // })
});
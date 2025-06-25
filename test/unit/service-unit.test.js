import { expect } from 'chai';
import appService from '../../src/service/app.service.js';
import appRepository from "../../src/repository/app.repository.js";

import Sinon from 'sinon';

describe('Service - Unit Test', () => {

  it("Service - createData fn testing",async ()=>{
    const fakeUser = { _id: '123', title: 'titleValue',  description:'descriptionValue'};
    Sinon.stub(appRepository, 'createAppData').resolves(fakeUser);

    const appData = await appService.createData('titleValue','descriptionValue');
    // expect(appData).to.deep.equal({ _id: '123', title: 'titleValue',  description:'descriptionValue'});
    expect(appData).to.have.property('_id','123');
    expect(appData).to.not.have.property('description')
  })
});
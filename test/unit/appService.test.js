import appService from '../../src/service/app.service.js';
import { MESSAGES } from '../../src/config/constant.config.js';
import { describe, expect, it, vi } from "@jest/globals";
import appRepository from '../../src/repository/app.repository.js';

vi.mock('../../src/repository/app.repository.js');

describe('appService',()=>{
    appRepository.createAppData.mockResolvedValue(false);
    it('throw repo send false',async ()=>{
        expect(appService.createData('title','description').rejects.toThrow(MESSAGES.DATA_CREATION_FAILED))
    })
})
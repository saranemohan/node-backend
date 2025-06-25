import _ from "lodash";
import { MESSAGES } from "../config/constant.config.js";
import appRepository from "../repository/app.repository.js";

class AuthService {

    /**
     * Format appData response
     * @param {AppData} appData 
     * @returns 
     */
    #appDataFormat = (appData) => _.pick(appData, ['_id', 'title','description'])

    /**
     * Business logic of create a data
     * @param {String} title 
     * @param {String} description 
     */
    async createData(title, description) {
        const data = {
            title: title,
            description: description
        };
        const appData = await appRepository.createAppData(data);
        if(appData){
            return this.#appDataFormat(appData)
        }else{
            throw new Error(MESSAGES.DATA_CREATION_FAILED);
        }
    }

}

export default new AuthService();
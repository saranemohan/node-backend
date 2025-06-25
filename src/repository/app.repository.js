import AppData from "../models/AppData.js";

class AppRepository {
    /**
     * Create appData in database
     * @param {Object} data 
     * @return {InstanceType<typeof AppData>} appData
     */
    async createAppData(data) {
        const appData = await AppData.create(data);
        return appData;
    }

    /**
     * Retrieve appData by title
     */
    async getAppDataByTitle(title){
        const appData = AppData.findOne({title:title});
        return appData;
    }
}

export default new AppRepository();
import mongoose from 'mongoose';

const appDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

appDataSchema.index({ title: 1 }, { name: 'app_data_title_index' });
appDataSchema.index({ description: 1 }, { name: 'app_data_description_index' });
appDataSchema.index(
  { title: 1, description: 1 },
  { name: 'app_data_title_description_index' }
);

const AppData = mongoose.model('AppData', appDataSchema);
export default AppData;

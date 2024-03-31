/* eslint-disable no-console */
import mongoose from 'mongoose';
import { MONGO_URI } from './config';

const connectToDb = async () => {
  try {
    mongoose.set('toJSON', {
      versionKey: false,
      virtuals: true,
    });
    await mongoose.connect(MONGO_URI, {});
    console.log('✅ - Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/express-auth';

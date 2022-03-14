module.exports = {
  port: process.env.PORT,
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.REMOTE_APP_URL
      : process.env.LOCAL_APP_URL,
  mongodbUrl:
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_DB_REMOTE_URL
      : process.env.MONGO_DB_LOCAL_URL,
};

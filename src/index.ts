import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { buildSchema } from "type-graphql";
import { userInfo } from "./resolvers/userInfo";
import mongoose from "mongoose";
import { config } from "dotenv";

config();
(async () => {
  mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.d12nl.mongodb.net/${process.env.HOST_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>console.log("mongodb connect succesfuly "))
  .catch(()=>console.log("mongodb cannot connect !!!"))
  const app: Application = express();
  const appApollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [userInfo],
    }),
  });
  appApollo.applyMiddleware({ app, cors: false });
  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => console.log(`server runing at ${PORT}`));
})();

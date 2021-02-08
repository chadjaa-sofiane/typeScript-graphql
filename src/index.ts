import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { buildSchema } from "type-graphql"
import { userInfo } from "./resolvers/userInfo";
(async () => {
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

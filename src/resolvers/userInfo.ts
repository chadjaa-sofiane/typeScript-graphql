import { Args, Field, Query, Resolver,ObjectType} from "type-graphql";
import { userArgs } from "./args"
@Resolver()
export class userInfo {
  @Query(()=>String)
  user(@Args() {name}:userArgs){
    return name
  }
}

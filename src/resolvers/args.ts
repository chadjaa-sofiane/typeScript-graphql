import {ArgsType, Field, Int} from "type-graphql"
@ArgsType()
export class userArgs{
    @Field(type=>Int,{nullable:true})
    skip?:Number
    @Field(type=>String,{nullable:false})
    name?:String
}
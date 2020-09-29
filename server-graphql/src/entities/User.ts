import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {Field, Int, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({type: "text",unique:true})
  username!: string;

  @Field()
  @Property({nullable: true})
  email: string

  @Field()
  @Property()
  password: string

  @Field()
  @Property({nullable:true})
  name: string

  @Field()
  @Property({nullable:true})
  surname: string

  @Field(() => String)
  @Property({type: "date", default: 'NOW()'})
  createdAt = new Date()

  @Field(() => String)
  @Property({type: "date",onUpdate: () => new Date()})
  updatedAt = new Date()
}

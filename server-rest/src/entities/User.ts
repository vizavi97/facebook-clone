import {Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import {Sex} from "./static/Sex";



@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property({unique:true,nullable:true})
  number: string;

  @Property({unique:true,nullable: true})
  email: string

  @Property()
  password: string

  @Property({nullable:true})
  name: string

  @Property({nullable:true})
  surname: string

  @Property()
  age: string

  @ManyToOne()
  sex: Sex

  @Property({type: "date", default: 'NOW()'})
  createdAt = new Date()

  @Property({type: "date", default: 'NOW()' , onUpdate: () => new Date()})
  updatedAt = new Date()
}

import {Entity, PrimaryKey, Property} from "@mikro-orm/core";


@Entity()

export class Sex {
  @PrimaryKey()
  id!: number
  @Property()
  type: string
  @Property()
  desc: string
}

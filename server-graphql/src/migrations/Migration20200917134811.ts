import { Migration } from '@mikro-orm/migrations';

export class Migration20200917134811 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "username" text not null, "email" varchar(255) null, "password" varchar(255) not null, "name" varchar(255) null, "surname" varchar(255) null, "created_at" timestamptz(0) not null default \'NOW()\', "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}

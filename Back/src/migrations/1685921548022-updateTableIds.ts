import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableIds1685921548022 implements MigrationInterface {
    name = 'UpdateTableIds1685921548022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "usersId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "usersId" integer`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePhone1685737679475 implements MigrationInterface {
    name = 'UpdatePhone1685737679475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" integer NOT NULL`);
    }

}

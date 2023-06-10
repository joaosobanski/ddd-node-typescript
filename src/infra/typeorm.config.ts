import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import { UsersEntity } from "./entity/users.entity";

function Config(synchronize: boolean = false) {
    return {
        type: "mysql",
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: "root",
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        synchronize,
        logging: true,
        entities: [
            UsersEntity
        ]
    } as TypeOrmModuleOptions | DataSourceOptions
}

export default Config
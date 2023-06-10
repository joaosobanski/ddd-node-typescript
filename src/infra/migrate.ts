import * as dotenv from 'dotenv'
dotenv.config()

import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

import Config from "./typeorm.config"

const AppDataSource = new DataSource(Config(true) as DataSourceOptions)

AppDataSource.initialize()
    .then(() => process.exit(0))
    .catch((error) => console.log(error))

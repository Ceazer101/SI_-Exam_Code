import mysql from 'mysql2/promise';
import pkg from 'pg';
const { Client } = pkg;
import config from "./config.js";

const mysqlConfig = config.mysql;
const postgresConfig = config.postgres;

async function migrateDB() {
    const mysqlConnection = await mysql.createConnection(mysqlConfig);

    const postgresClient = new Client(postgresConfig);

    try {
        await postgresClient.connect();

        const [mysqlRows] = await mysqlConnection.query('SELECT * FROM m_lines');

        for (const row of mysqlRows) {
            console.log(row);
            await postgresClient.query('INSERT INTO metro_lines (idlines, name) VALUES ($1, $2)', [row.idlines, row.name]);
        }

        console.log('Migration completed successfully');
    } catch (error) {
        console.error('Error during migration', error);
    } finally {
        await mysqlConnection.end();
        await postgresClient.end();
    }
}

migrateDB();

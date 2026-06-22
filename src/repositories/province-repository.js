import pg from "pg";
import DBConfig from "../configs/db-config.js";
import LogHelper from "../helpers/log-helper.js";

const { Client } = pg;

class ProvinceRepository {

    async getAll() {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const result = await client.query(
                "SELECT * FROM provinces"
            );
            return result.rows;

        } catch (error) {
            LogHelper.logError(error);
            throw error;
        } finally {
            await client.end();
        }
    }

    async getById(id) {
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const result = await client.query(
                "SELECT * FROM provinces WHERE id = $1",
                [id]
            );

            return result.rows[0] || null;
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        } finally {
            await client.end();
        }
    }

    async insert(province) {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            await client.query(
                `INSERT INTO provinces
            (name, full_name, latitude, longitude, display_order)
            VALUES ($1, $2, $3, $4, $5)`,
                [
                    province.name,
                    province.full_name,
                    province.latitude,
                    province.longitude,
                    province.display_order
                ]
            );

        } catch (error) {
            LogHelper.logError(error);
            throw error;
        } finally {
            await client.end();
        }
    }

    async update(province) {

        const client = new Client(DBConfig);

        try {
            await client.connect();

            const result = await client.query(
                `UPDATE provinces
             SET name = $1,
                 full_name = $2,
                 latitude = $3,
                 longitude = $4,
                 display_order = $5
             WHERE id = $6`,
                [
                    province.name,
                    province.full_name,
                    province.latitude,
                    province.longitude,
                    province.display_order,
                    province.id
                ]
            );

            return result.rowCount;
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        } finally {
            await client.end();
        }
    }

    async delete(id) {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const result = await client.query(
                "DELETE FROM provinces WHERE id = $1",
                [id]
            );

            return result.rowCount;
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        } finally {
            await client.end();
        }
    }
}

export default ProvinceRepository;
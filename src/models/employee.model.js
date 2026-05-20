import { db } from "../config/database.js";

async function selectAll() {

    try {
        let employees = await db.any('SELECT * FROM employee');

        return employees;
    } catch (e) {
        console.log('ERROR:', error);
    }
}

export { selectAll };


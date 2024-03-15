const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    try {
        const [result] = await connection.execute('SELECT * FROM bbgTechUser.meeting;');
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findByClientId = async (client_id) => {
    try {        
        const [result] = await connection.execute('SELECT * FROM bbgTechUser.meeting WHERE client_id = ?;', [client_id]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findById = async (id) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.meeting WHERE id = ?;', [id]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findByDate = async (date) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.meeting WHERE date_meeting = ?;', [date]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const create = async ( client_id, date ) => {
    try {        
        const result = await connection.execute(`INSERT INTO bbgTechUser.meeting ( client_id, date_meeting ) VALUES (?, ?)`, [ client_id, date ]);
        return camelize(result);
    } catch (error) {
        console.log(error);
        return { type: 200, message: error };
    }
};

const update = async (id, date) => {
    try {
        const result = await connection.execute(
            'UPDATE bbgTechUser.meeting SET date_meeting = ? WHERE id = ?',
            [date, id]
        );
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const deleteById = async (id) => {
    try {
        await connection.execute(
            'DELETE FROM bbgTechUser.meeting WHERE id = ?',
            [id],
          );
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
}

const findByClientAndMonth = async (client_id, date) => {
    try {
        const year = new Date(date).getFullYear();
        const month = new Date(date).getMonth() + 1;

        const [result] = await connection.execute(
            'SELECT * FROM bbgTechUser.meeting WHERE client_id = ? AND YEAR(date_meeting) = ? AND MONTH(date_meeting) = ?;',
            [client_id, year, month]
        );
        
        return camelize(result);
    } catch (error) {
        console.log(error);
        return { type: 200, message: 'Error db' };
    }
};

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
    update,
    findByDate,
    findByClientAndMonth,
    findByClientId
};
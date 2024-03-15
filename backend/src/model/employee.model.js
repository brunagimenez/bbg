const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    try {
        const [result] = await connection.execute('SELECT * FROM bbgTechUser.employees;');
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findById = async (employeeId) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.employees WHERE id = ?;', [employeeId]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findByEmail = async (email) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.employees WHERE email = ?;', [email]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const create = async ( name, email, birthday, phone ) => {
    try {        
        const result = await connection.execute(`INSERT INTO bbgTechUser.employees ( name, email, birthday, phone ) VALUES (?, ?, ?, ?)`, [ name, email, birthday, phone ]);
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const deleteById = async (employeeId) => {
    try {        
        await connection.execute(
            'DELETE FROM bbgTechUser.employees WHERE id = ?',
            [employeeId],
          );
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
}

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
    findByEmail,
};
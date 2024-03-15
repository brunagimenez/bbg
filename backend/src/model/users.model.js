const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    try {
        const [result] = await connection.execute('SELECT id, username, client_id, employee_id, role FROM bbgTechUser.users;');
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findById = async (userId) => {
    try {
        const [[result]] = await connection.execute('SELECT id, username, client_id, employee_id, role FROM bbgTechUser.users WHERE id = ?;', [userId]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findByUsername = async (username) => {
    try {
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.users WHERE username = ?;', [username]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const create = async ( username, password, client_id, employee_id, role ) => {
    try {        
        const result = await connection.execute(`INSERT INTO bbgTechUser.users ( username, password, client_id, employee_id, role ) VALUES (?, ?, ?, ?, ? )`, [ username, password, client_id, employee_id, role ]);
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const deleteById = async (userId) => {
    try {        
        await connection.execute(
            'DELETE FROM bbgTechUser.users WHERE id = ?',
            [userId],
          );
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
}

const updatePassword = async (client_id, password, employee_id) => {
    try {
        if (client_id) {
            const result = await connection.execute(
                'UPDATE bbgTechUser.users SET password=? WHERE client_id=?;',
                [password, client_id]
            );
            return camelize(result);
        } else {
            const result = await connection.execute(
                'UPDATE bbgTechUser.users SET username=?, password=? WHERE employee_id=?;',
                [password, employee_id]
            );
            return camelize(result);
        }
    } catch (error) {
        return { type: 200, message: error };
    }
};

const updateUsername = async (client_id, username, employee_id) => {
    try {
        if (client_id) {
            const result = await connection.execute(
                'UPDATE bbgTechUser.users SET username=? WHERE client_id=?;',
                [username, client_id]
            );
            return camelize(result);
        } else {
            const result = await connection.execute(
                'UPDATE bbgTechUser.users SET username=? WHERE employee_id=?;',
                [username, employee_id]
            );
            return camelize(result);
        }
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
    findByUsername,
    updateUsername,
    updatePassword
};
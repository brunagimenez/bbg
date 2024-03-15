const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    try {        
        const [result] = await connection.execute('SELECT id, email, client_id FROM bbgTechUser.email_marketing_access;');
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findById = async (id) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.email_marketing_access WHERE id = ?;', [id]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const create = async ( email, password, client_id ) => {
    try {        
        const result = await connection.execute(`INSERT INTO bbgTechUser.email_marketing_access ( email, password, client_id ) VALUES (?, ?, ?)`, [ email, password, client_id ]);
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const update = async (client_id, newData) => {
    const { email, password } = newData;
    try {        
        await connection.execute(
            'UPDATE bbgTechUser.email_marketing_access SET email = ?, password = ? WHERE id = ?',
            [email, password, client_id]
        );
        const emailAccess = await findAll();
        return emailAccess;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const deleteById = async (id) => {
    try {        
        await connection.execute(
            'DELETE FROM bbgTechUser.email_marketing_access WHERE id = ?',
            [id],
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
    update,
};
const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
    try {        
        const [result] = await connection.execute('SELECT * FROM bbgTechUser.clients;');
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const findById = async (clientId) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.clients WHERE id = ?;', [clientId]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const create = async (name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id  ) => {
    try {        
        const result = await connection.execute(`INSERT INTO bbgTechUser.clients ( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [ name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id ]);
        return result;
    } catch (error) {
        return { type: 200, message: 'Error db' };
    }
};

const updatePhone = async (id, phone) => {
    try {
        const result = await connection.execute(
            'UPDATE bbgTechUser.clients SET phone=? WHERE id=?;',
            [phone, id]
        );
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

const updateEmail = async (id, email) => {
    try {
        const result = await connection.execute(
            'UPDATE bbgTechUser.clients SET email=? WHERE id=?;',
            [email, id]
        );
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

const updateName = async (id, name) => {
    try {
        const result = await connection.execute(
            'UPDATE bbgTechUser.clients SET name=? WHERE id=?;',
            [name, id]
        );
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

const updateCPF = async (id, cpf) => {
    try {
        const result = await connection.execute(
            'UPDATE bbgTechUser.clients SET cpf=? WHERE id=?;',
            [cpf, id]
        );
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

const deleteById = async (clientId) => {
    try {
        await connection.execute(
            'DELETE FROM bbgTechUser.clients WHERE id = ?',
            [clientId],
          );
    } catch (error) {
        return { type: 200, message: error };
    }
};

const findByCpf = async (cpf) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.clients WHERE cpf = ?;', [cpf]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

const findByCnpj = async (cnpj) => {
    try {        
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.clients WHERE cnpj = ?;', [cnpj]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

const findByEmail = async (email) => {
    try {
        const [[result]] = await connection.execute('SELECT * FROM bbgTechUser.clients WHERE email = ?;', [email]);
        return camelize(result);
    } catch (error) {
        return { type: 200, message: error };
    }
};

module.exports = {
    findAll,
    findById,
    create,
    deleteById,
    findByCpf,
    findByCnpj,
    findByEmail,
    updatePhone,
    updateEmail,
    updateName,
    updateCPF
};
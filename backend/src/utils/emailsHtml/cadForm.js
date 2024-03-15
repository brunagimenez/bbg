const cadForm = (name, email, phone, company, sizeCompany, invoicing) => {
    return `
        <html>
        <body>
            <h1>Cadastro Recebido</h1>
            <p>Nome: ${name}</p>
            <p>E-mail: ${email}</p>
            <p>Telefone: ${phone}</p>
            <p>Empresa: ${company}</p>
            <p>Funcionários: ${sizeCompany}</p>
            <p>Faturamento: ${invoicing}</p>
        </body>
        </html>
    `;
}

module.exports = {
    cadForm,
}
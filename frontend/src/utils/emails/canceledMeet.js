const canceledMeet = (name) => {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verificação de E-mail</title>
    </head>
    <body style="font-family: 'Arial', sans-serif; text-align: center; background-color: #f4f4f4; padding: 20px;">
    
        <div style="background: linear-gradient(to bottom left,#FFCC70, #C850C0,#8455D3, #435bd0); max-width: 600px; margin: 0 auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    
            <!-- Header -->
            <header style="box-shadow:22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042);">
                <a href="https://cbbb-131-196-160-238.ngrok-free.app/login" target="_blank"><img src="https://i.postimg.cc/dVgYGWGX/BBG.png" width="100px" style="margin: 20px;" alt="Logo BBG"/></a>
            </header>
    
            <!-- Main Content -->
            <main style="padding: 20px; display: flex; flex-direction: column; align-items: center;">
                <h2 style="background-color: #4158D0; color: white; font-size: 20pt; padding: 0% 3%;">🚀 Olá ${name}!</h2>
                <p>Esperamos que esta mensagem o encontre bem. 😔</p>
                <p>Recebemos a notificação do cancelamento da nossa reunião agendada, e queremos expressar o quanto sentimos por essa mudança de planos. Valorizamos muito a oportunidade de nos conectar e estamos aqui para apoiá-lo em qualquer decisão.</p>
                <p>Entendemos que imprevistos acontecem, e queremos assegurar que estamos prontos para reagendar a reunião sempre que for mais conveniente para você. Sua presença é muito importante para nós, e queremos garantir que a nossa próxima interação seja tão produtiva quanto planejamos.</p>
                <p>Se surgir um novo momento adequado, ficaremos felizes em remarcar a reunião. Você pode fazer isso facilmente através do nosso site, onde encontrará opções de agendamento disponíveis. Estamos aqui para facilitar e adaptar conforme sua agenda.</p>
                <p>Agradecemos pela compreensão e pela oportunidade de colaborar com você. Ficamos aguardando ansiosamente por uma nova data para continuarmos nossa conversa.</p>
                <p>Se precisar de mais alguma informação ou se houver algo em que possamos ajudar, não hesite em entrar em contato.</p>
                <p style="margin-top: 20px; font-size: 14px; color: #d3d3d3;">Atenciosamente,<br>BBG Solutions</p>
            </main>
    
            <!-- Footer -->
            <footer style="background-color:white; padding: 60px 10px 3px;">
                <div>
                    <a style="text-decoration: none; padding: 5px;" href="https://www.facebook.com/design.bbg" target="_blank">
                    <img src="https://i.postimg.cc/1tQ1jfCr/facebook.png" alt="Ícone Facebook" width="40" />
                    </a>
                    <a style="text-decoration: none; padding: 5px;" href="https://www.instagram.com/seu_perfil" target="_blank">
                    <img src="https://i.postimg.cc/R0fzdcR0/instagram.png" alt="Ícone Instagram" width="40" />
                    </a>
                    <a style="text-decoration: none; padding: 5px;" href="https://api.whatsapp.com/send?phone=5519981470706" target="_blank">
                    <img src="https://i.postimg.cc/XqNSnt0Z/whatsapp.png" alt="Ícone WhatsApp" width="40" />
                    </a>
                </div>
                <p style="font-size: 10px; color: #706f6f;">Todos os direitos reservados a BBG Solutions</p>
            </footer>
        </div>
    
    </body>
    </html>
    `
};

module.exports = {
    canceledMeet,
};
const meetingConfirm = (name, data, hour) => {
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
                        <p>Esperamos que esta mensagem chegue até você como um foguete cheio de boas energias! 🌟</p>
                        <p>Estamos super animados em confirmar que a nossa reunião está marcada para <spam style="background-color: #4158D0; color: white; padding: 0% 1%;">${data} às ${hour}h</spam>. Prepare-se para uma experiência incrível, pois estamos prontos para decolar com ideias incríveis e soluções fantásticas!</p>
                        <p><spam style="background-color: #4158D0; color: white; padding: 0% 2%;">Mas atenção, não queremos que você perca nada dessa viagem emocionante. Um dia antes do grande encontro, você receberá o link mágico de acesso direto no seu e-mail ou WhatsApp. Sim, é como a senha do foguete para a nossa jornada espacial de ideias inovadoras! 🚀✨</p>
                        <p>A equipe da BBG Solutions está empolgada e pronta para contribuir com o sucesso da sua empresa. Juntos, vamos decolar para novos horizontes e conquistar o espaço do sucesso empresarial!</p>
                        <p>Se surgir qualquer dúvida ou se precisar de alguma informação extra, estamos sempre aqui para ajudar. Mal podemos esperar para nos encontrarmos e fazer deste momento algo extraordinário!</p>
                        <p>Contagem regressiva para a decolagem! 🌌🚀</p>
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
    meetingConfirm,
};
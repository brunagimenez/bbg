export const formatDateTimeForAPI = (selectedDate, selectedHour) => {
  // Criar um objeto Date com a data selecionada
  const dateObject = new Date(selectedDate);

  // Extrair ano, mês e dia
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Adiciona um zero à esquerda se for necessário
  const day = dateObject.getDate().toString().padStart(2, '0'); // Adiciona um zero à esquerda se for necessário

  // Extrair a hora e os minutos do horário selecionado
  const [hour, minute] = selectedHour.split(':');
  const formattedHour = (hour.length < 2) ? `0${hour}` : hour;

  // Criar uma nova data com a data e hora combinadas (ajustado para UTC)
  const combinedDate = new Date(`${year}-${month}-${day}T${formattedHour}:${minute}:00Z`);

  // Formatar a data para o formato desejado
  const formattedDate = combinedDate.toISOString().slice(0, 19).replace('T', ' ');

  return formattedDate;
}


export const formatDateAndTime = (dateString) => {
  // Criando uma data UTC com base na string fornecida
  const dateUTC = new Date(dateString);

  // Adicionando 3 horas à data UTC
  dateUTC.setUTCHours(dateUTC.getUTCHours() + 3);

  // Obtendo a data no formato brasileiro
  const optionsDate = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDate = dateUTC.toLocaleDateString('pt-BR', optionsDate);

  // Obtendo a hora no formato de 24 horas
  const optionsTime = { hour: '2-digit', minute: '2-digit' };
  const formattedTime = dateUTC.toLocaleTimeString('pt-BR', optionsTime);

  // Retornando um objeto com a data e a hora formatadas
  return {
      formattedDate,
      formattedTime
  };
}


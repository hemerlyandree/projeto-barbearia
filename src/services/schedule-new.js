import {apiConfig} from './api-config'

export async function scheduleNew({id, name, when}) {
  try {
    // Request para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "aplication/json"
      }, 
      body: JSON.stringify({id, name, when})
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar, tente novamente mais tarde.")
  }
}
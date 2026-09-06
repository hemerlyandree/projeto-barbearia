import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({date}) {
  try {
    // Request para enviar os dados do agendamento
    const response = await fetch (`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    // Filtra os agendamentos para o dia selecionado
    const dailySchedules = data.filter(schedule => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os horários disponíveis para o dia selecionado. Tente novamente mais tarde.")
  }
}
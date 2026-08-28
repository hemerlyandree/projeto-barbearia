import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

const Hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const availableHours = openingHours.map((hour) => {
    // recupera a hora
    const [scheduleHour] = hour.split(":")
    console.log(scheduleHour)

    // Adiciona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    console.log(isHourPast)

    // Define se o horário está disponível
    return {
      hour,
      available: isHourPast,
    }
  })

  // Renderiza os horários disponíveis
  availableHours.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour
    Hours.append(li)
  })
}
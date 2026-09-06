import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js"

const Hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários 
  hours.innerHTML = ""

  // Obtém a lista de todos horários ocupados
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("H:mm") )

  const availableHours = openingHours.map((hour) => {
    // recupera a hora
    const [scheduleHour] = hour.split(":")

    // Adiciona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    // Define se o horário está disponível
    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available,
    }
  })

  // Renderiza os horários disponíveis
  availableHours.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00") {
      hoursHeaderAdd("Manhã")
    } else if(hour === "13:00") {
      hoursHeaderAdd("Tarde")
    } else if(hour === "18:00") {
      hoursHeaderAdd("Noite")
    }
    Hours.append(li)
  })
 
  // Adiciona o evento de click nos horários disponíveis
  hoursClick()
}

function hoursHeaderAdd(tittle) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = tittle

  Hours.append(header)
}
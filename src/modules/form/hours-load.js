import {openingHours} from ".../../utils/opening-hours.js"
import dayjs from "dayjs"

export function hoursLoad( {date} ) {
  const openingHours = openingHours.map((hour) => {
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
}
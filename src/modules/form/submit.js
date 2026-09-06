import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")


// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima para agendamento como a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

// Carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima para agendamento como a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
  // Previne o comportamento padrão do formulário.
  event.preventDefault()

  try {
    // Recupera o nome do cliente
    const name = clientName.value.trim()
    
    if(!name) {
      return alert("Informe o nome do cliente.")
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected") 

    // Recupera o horário selecionado
    if(!hourSelected) {
      return alert("Selecione o horário")
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value)
    .set("hour",hour)
    .set("minute", 0)
    .set("second", 0)

    // Gera um id
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })
    alert("Agendamento realizado com sucesso!")
    } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}
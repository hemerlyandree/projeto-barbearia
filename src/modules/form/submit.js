import dayjs from "dayjs"
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

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
  console.log("Formulário enviado")
}
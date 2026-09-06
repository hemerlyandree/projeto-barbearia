import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load.js"
const periods = document.querySelectorAll(".period")


// Gera evento de clique para cada lista
periods.forEach((period) => {
  // Captura o evento de clique da lista
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      // Obtém a LI pai do elemento clicado
      const item = event.target.closest("li")
      // Pega o ID do agendamento para remover
      const { id } = item.dataset
      // Verifica que o ID foi selecionado.
      if(id) {
        // Confirma se o usuário deseja realmente cancelar o agendamento
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?")
        if(isConfirm) {
          await scheduleCancel({id})
          schedulesDay() // Recarrega a lista de agendamentos após o cancelamento
        }
      }
    }
  })
})
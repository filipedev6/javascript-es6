export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(n => Number(n));
    const horarioSemana = funcionamento.dataset.horario.split(',').map(n => Number(n));

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay(); // DIAS SEMANA
    const horarioAgora = dataAgora.getHours(); // HORARIO ATUAL

    const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

    if(semanaAberta && horarioAberto){
        funcionamento.classList.add('aberto')
    }
}


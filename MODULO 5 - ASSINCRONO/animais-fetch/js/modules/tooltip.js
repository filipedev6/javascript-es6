export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
  
  // DISPARA SOMENTE UMA VEZ AO PASSAR MOUSE SOBRE A DIV
  function onMouseOver(event) { 
    // TOOLTIP COM A DIV
    const tooltipBox = criartooltipBox(this);
  
    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove);
  
    // DISPARA SOMENTE UMA VEZ AO SAIR COM MOUSE SOBRE A DIV
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }
  
  // DISPARA TODA VEZ AO PASSAR MOUSE SOBRE A DIV
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }
  
  // CRIANDO TOOLTIP
  function criartooltipBox(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox)
    return tooltipBox;
  } 
}

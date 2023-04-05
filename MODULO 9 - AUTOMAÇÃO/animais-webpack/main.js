(()=>{"use strict";function t(t,e,n){const o=document.documentElement,a="data-outside";function c(i){t.contains(i.target)||(n(),t.removeAttribute(a,""),e.forEach((t=>{o.removeEventListener(t,c)})))}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,c)}))})),t.setAttribute(a,""))}!function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelectorAll('[data-anime="accordion"] dt'),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');t.forEach(((n,o)=>{n.addEventListener("click",(()=>{if(t.length&&e.length){e[0].classList.add("ativo");const t=e[o].dataset.anime;e[o].classList.add("ativo",t)}e.forEach((t=>{t.classList.remove("ativo")}))}))}))}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){function t(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY} 20 px`,this.tooltipBox.style.left=`${t.pageY} 20 px`}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};e.tooltipBox=t,this.addEventListener("mousemove",e),n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n)}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)}))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o=["click","touchstart"];function a(){n.classList.add("active"),e.classList.add("active"),t(n,o,(()=>{n.classList.remove("active"),e.classList.remove("active")}))}e&&o.forEach((t=>{e.addEventListener(t,a)}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map((t=>Number(t))),n=t.dataset.horario.split(",").map((t=>Number(t))),o=new Date,a=o.getDay(),c=o.getHours(),i=-1!==e.indexOf(a),s=c>=n[0]&&c<n[1];i&&s&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`\n      <h3>${t.specie}</h3>\n      <span data-numero>${t.total}</span>\n    `,e}(t);n.append(e)})),function(){const t=document.querySelectorAll("[data-numero]");let e;e=new MutationObserver((function(n){n[0].target.classList.contains("ativo")&&(e.disconnect(),t.forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))}),25*Math.random())})))}));const n=document.querySelector(".numeros");e.observe(n,{attributes:!0})}()}catch(t){console.log(t)}}()})();
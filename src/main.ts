import "aos/dist/aos.css";
import './style.css';
import './output.css';
import AOS from "aos";
import goLogo from "./assets/logo.svg";

// document.getElementById("app")!.innerHTML = `
//   <div class="h-screen w-screen bg-primary-700">
//     ${getHeader().outerHTML}
//   </div>
// `

window.addEventListener("load", handleLoad);

function handleLoad() {
  AOS.init()
  AOS.refresh()
  document.getElementById("app")?.append(...getPage())
}

function getHeader(): HTMLDivElement {
  const element = document.createElement("div")

  element.classList.add("h-14", "w-full", "bg-primary-700", "flex", "items-center", "justify-center", "font-display", "z-50", "overflow-hidden");
  element.appendChild(getLogo())
  return element;
}

function getLogo(): HTMLImageElement {

  const logo = new Image();
  logo.src = goLogo;
  logo.classList.add("h-14")

  return logo;
}

function getSections(): HTMLElement {
  const sections = document.createElement("main");

  sections.classList.add("min-h-full", "-mt-14", "pt-14", "font-display")

  sections.innerHTML = `
    <section class="md:px-20 -z-10 h-dvh -mt-14 w-full flex flex-col items-center justify-center bg-primary-700 sticky top-0 text-primary-300">
      <div class="max-w-lg flex flex-col items-center justify-center text-center">
        <div class="text-4xl font-extrabold">
          <p>Radiografia antiga?</p>
          <p>Não guarde como <strong class="text-primary-100 italic">troféu</strong>!</p>
        </div>
        <div class="mt-4 font-light">
          <p>Campanha de Conscientização sobre o Descarte Correto de Raios-X e Exames por Imagem</p>
        </div>
      </div>
  </section>
<section class="z-10 min-h-full relative bg-primary-400 text-primary-100 flex pt-10  items-center justify-center">
  <img class="absolute top-2 sm:top-4 -translate-y-full" src="/grass.svg">
      <div class="sm:mr-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img class="h-20 hidden sm:block" src="/whistle.svg" alt="whistle">
      </div>
      <div class="sm:max-w-md mb-10 px-10 md:px-0" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <p class="font-bold text-3xl mb-4">Por que o descarte certo é o Jogo da Vida?</p>
        <p class="font-light ">Exames por imagem, como raios-X, podem parecer inofensivos à primeira vista, mas contêm metais pesados que, se descartados inadequadamente no lixo comum, representam sérios riscos ao meio ambiente. Esses materiais podem contaminar o solo e a água, afetando a saúde de toda a cadeia ecológica. Por isso, é essencial dar o destino correto a esse tipo de resíduo.</p>
      </div>
    </section>
    <section class="min-h-full overflow-x-hidden relative bg-primary-400 text-primary-100 flex flex-col items-center justify-center py-5">
      <div class="flex flex-col mb-10" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
        <p class="text-3xl md:text-4xl font-bold">Esquema tático</p>
        <img class="h-14 md:h-16 translate-x-1/4 -translate-y-1/3" src="/tactics.svg">
      </div>
      <div class="w-full px-4 md:pl-20">
        <ul class="mb-10">
          <li data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="flex items-center mb-5">
            <p class="text-6xl font-extrabold text-primary-200 w-20">1</p>
            <div class="self-end max-w-md text-start ml-2">
              <p class="font-bold text-lg">Revise seu time de exames</p>
              <p class="font-light md:font-thin">Tá guardando exame desde o século passado? Hora de passar o pente fino e separar o que não precisa mais. Nem todo exame precisa continuar no time titular!</p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="flex items-center mb-5">
            <p class="text-6xl font-extrabold text-primary-200 w-20">2</p>
            <div class="self-end max-w-md text-start ml-2">
              <p class="font-bold text-lg">Procure o ponto de coleta certo</p>
              <p class="font-light md:font-thin">Não vá dar aquele passe errado jogando no lixo comum! Procure hospitais, clínicas de radiologia ou farmácias que aceitam exames para descarte. Eles têm um time treinado para lidar com esse tipo de coisa.</p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="flex items-center">
            <p class="text-6xl font-extrabold text-primary-200 w-20">3</p>
            <div class="self-end max-w-md text-start ml-2">
              <p class="font-bold text-lg">Faça o descarte e comemore!</p>
              <p class="font-light md:font-thin">Leva seus exames ao ponto de coleta e pode comemorar como se tivesse acabado de ganhar a Copa! Agora sim você está ajudando o planeta e jogando limpo.</p>
            </div>
          </li>
        </ul>
        </div>
        <img class="md:absolute h-52 md:bottom-10 md:right-0 self-end" src="/tab.svg">
    </section>
    <section class=" min-h-screen relative -z-10 bg-primary-200 text-primary-700 flex flex-col py-10 md:py-0 md:flex-row justify-center items-center">
     <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="max-w-xl px-4 sm:pr-32 mb-20">
      <p class="font-extrabold text-4xl mb-10 text-center md:text-left">O Planeta é seu <strong class="text-primary-400">técnico</strong></p>
      <p>Agora que você já sabe o esquema tático do descarte correto, tá na hora de entrar em campo e fazer sua parte. Descartar radiografias antigas no lugar certo não só te deixa livre de bagunça, como ainda garante que o meio ambiente continue jogando no seu time.</p>
     </div>
     <img class="h-64 md:self-end -mb-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="/goal.svg">
    </section>
  `;
  sections.append(getFooter())
  return sections
}

function getFooter(): HTMLElement {
  const footer = document.createElement("footer");

  footer.classList.add("min-h-60", "bg-primary-700", "w-full", "flex", "items-center", "justify-center", "text-primary-100", "font-display", "z-50");

  footer.innerHTML = `
  <div class="md:max-w-2xl flex items-center p-2"> 
    <img class="h-10 sm:h-14 m-5" src="${goLogo}" alt="Go recycle logo">
      <div>
        <p class="font-thin text-xl">
          Este site foi desenvolvido para alertar e conscientizar as pessoas a <strong class="font-regular italic">pensarem verde</strong>.
        </p>
        <p class="font-thin text-xs mt-4">
          Desenvolvido para fins academicos por alunos do curso de Engenharia de Software da Universidade Positivo.
        </p>
      </div>
    </div>
  `;

  return footer;
}

function getPage(): HTMLElement[] {
  const header = getHeader();
  const content = getSections();
  // const footer = getFooter();

  return [header, content];
}
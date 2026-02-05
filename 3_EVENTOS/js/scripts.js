document.addEventListener("DOMContentLoaded", () => {

  // -------- PARTE 1: BOTÃO SIMPLES --------
  const btn = document.querySelector("#my-button");

  if (btn) {
    btn.addEventListener("click", () => {
      console.log("clicou aqui!");
    });
  }

  // -------- PARTE 3: EVENTO NO TÍTULO --------
  const myTitle = document.querySelector("#my-title");

  if (myTitle) {
    myTitle.addEventListener("click", (event) => {
      console.log(event);
      console.log(event.offsetX);
      console.log(event.pointerType);
      console.log(event.target);
    });
  }

  // -------- PARTE 4: PROPAGAÇÃO --------
  const containerBtn = document.querySelector("#btn-container");
  const btnInsideContainer = document.querySelector("#div-btn");

  console.log("container:", containerBtn);
  console.log("botão:", btnInsideContainer);

  if (!containerBtn || !btnInsideContainer) {
    console.error("Erro: não encontrei #btn-container ou #div-btn");
    return;
  }

  containerBtn.addEventListener("click", () => {
    console.log("Evento 1 (container)");
  });

  btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2 (botão)");
  });

});
 
// 5- removendo evento padrão 

const a= document.querySelector("a"); 

a.addEventListener("click", (e) => { 
     e.preventDefault(); 
    console.log("Não alterou a página");
}); 


// 6- eventos de tecla 
document.addEventListener("keyup",(E) => { 
    console.log(`Soltou a tecla ${E.key}`);
}); 



document.addEventListener("keydown",(E) => { 
    console.log(`Apertou a tecla ${E.key}`);
}); 

// 7- eventos de mouse 
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {  
   console.log("Pressionou o botão"); 
});

mouseEvents.addEventListener("mouseup", () => {  
   console.log("Soltou o botão"); 
});

mouseEvents.addEventListener("dblclick", () => {  
   console.log("Clique duplo"); 
});

// 8- movimento do mouse 
//document.addEventListener("mousemove", (e) => { 
   // console.log(`No eixo X: ${e.x}`); 
   // console.log(`No eixo y: ${e.y}`);
//}); 

//9 - evento de scroll 
window.addEventListener("scroll", (e) => { 
    if (window.pageYOffset > 200) { 
        console.log("Passamos de 200px");
    }
}); 

// 10 - evento de focus/blur 
const input = document.querySelector("#my-input"); 

input.addEventListener("focus", (e) => { 
    console.log("Entrou no input");
}); 

// 11- evento de carregamento 
window.addEventListener("load", () => { 
    console.log("A página carregou!"); 
}); 

        window.addEventListener("beforeunload", (e) => {
            e.preventDefault(); // Necessário para alguns navegadores
            e.returnValue = ""; 
        });
         
//11 -debounce

const debounce = (f, delay) => { 
    let timeout;

    return (...args) => { 
        if(timeout) { 
            clearTimeout(timeout)
        } 
     timeout = setTimeout (()  => { 
    f.apply(args)
     }, delay);
    };
    }; 

    window.addEventListener ("mousemove" , debounce(()=> {
        console.log("Executando a cada 400ms");
   }, 400) 
    ); 

const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgmodal = document.querySelector(".modal img");
const botonesFlecha = document.querySelectorAll(".modal button");
let rutasImg = [];
let imgActual = 0;

miniaturas.forEach((miniatura, indice) => {
	rutasImg.push(miniatura.getAttribute("href"));
	miniatura.addEventListener("click", function(evento){
		event.preventDefault(); //corta el evento que crea el navegador automaticamente
		imgActual = indice;
		imgmodal.setAttribute("src",rutasImg[imgActual]);

		modal.classList.add("visible");
	});
});
modal.addEventListener("click", function(){
	this.classList.remove("visible");
});

botonesFlecha.forEach((boton,indice) =>{
	boton.addEventListener("click", evento => {
		evento.stopPropagation();
		if(indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;
		}
		else{
			imgActual = imgActual < rutasImg.length -1 ? imgActual + 1 : 0;
		}
		imgmodal.setAttribute("src",rutasImg[imgActual]);
		
	});
});
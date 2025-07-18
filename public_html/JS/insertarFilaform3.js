function insertarFilaE(){
    let tablaForm = document.getElementById('tabla');

    let codigo = document.createElement('input');
    codigo.type = 'number';
    codigo.className = 'celda';

    let materia = document.createElement('input');
    materia.type = 'text';
    materia.className = 'celda';
    
    let codigo2 = document.createElement('input');
    codigo2.type = 'number';
    codigo2.className = 'celda';

    let materia2 = document.createElement('input');
    materia2.type = 'text';
    materia2.className = 'celda';

    
    tablaForm.appendChild(codigo);
    tablaForm.appendChild(materia);
    tablaForm.appendChild(codigo2);
    tablaForm.appendChild(materia2);

}

document.addEventListener("DOMContentLoaded", () => {

    
  let seleccion = document.getElementById('typeMovilidad');
  
  let hiddenTabla = document.getElementById('tabla');

  seleccion.addEventListener("change", function () {

    let valor = seleccion.value;

    
  if(valor && valor === 'intercambio'){

    hiddenTabla.style.display = 'grid';

  }else{
    hiddenTabla.style.display= 'none';
  }

  });


});

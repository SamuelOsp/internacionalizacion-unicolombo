function insertarFila(){
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

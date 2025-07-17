function insertarFila() {
    const formulario = document.querySelector("form.tabla-movilidad");
    const tabla = formulario.querySelector(".tabla");

    const campos = [
      { type: 'text', name: 'No' },
      { type: 'text', name: 'Nombre' },
      { type: 'text', name: 'Apellido' },
      { type: 'text', name: 'ID' },
      { type: 'text', name: 'Pasaporte' },
      { type: 'date', name: 'Nacimiento' },
      { type: 'text', name: 'CopiaID' },
      { type: 'text', name: 'Compromiso' },
      { type: 'text', name: 'EPS' },
      { type: 'text', name: 'Seguro' },
      { type: 'text', name: 'Poliza' },
      { type: 'text', name: 'Prueba' },
      { type: 'text', name: 'Telefono' },
      { type: 'email', name: 'Email' }
    ];

    campos.forEach(campo => {
      const input = document.createElement('input');
      input.type = campo.type;
      input.name = campo.name + "[]";
      input.className = 'celda';
      tabla.appendChild(input);
    });
  }
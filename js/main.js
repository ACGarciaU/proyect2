const botonInicio = document.querySelector('a[href="#"]');
const botonContacto = document.querySelector('a[href="#contacto"]');
botonInicio.addEventListener('mouseover', () => {
    // Agregar código para el efecto deseado al botón Inicio
  });
  
  botonInicio.addEventListener('mouseout', () => {
    // Agregar código para revertir el efecto al botón Inicio
  });
  
  botonContacto.addEventListener('mouseover', () => {
    // Agregar código para el efecto deseado al botón Contacto
  });
  
  botonContacto.addEventListener('mouseout', () => {
    // Agregar código para revertir el efecto al botón Contacto
  });
  botonInicio.addEventListener('mouseover', () => {
    botonInicio.style.backgroundColor = 'red';
    botonInicio.style.color = 'white';
  });
  
  botonInicio.addEventListener('mouseout', () => {
    botonInicio.style.backgroundColor = 'transparent';
    botonInicio.style.color = 'black';
  });
  
  botonContacto.addEventListener('mouseover', () => {
    botonContacto.style.backgroundColor = 'blue';
    botonContacto.style.color = 'white';
  });
  
  botonContacto.addEventListener('mouseout', () => {
    botonContacto.style.backgroundColor = 'transparent';
    botonContacto.style.color = 'black';
  });
  
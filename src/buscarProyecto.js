function buscarProyecto(nameOfProyect, proyectsList) {
  if(proyectsList[0] === nameOfProyect){
    return proyectsList[0];
  }
  return "";
}

export default buscarProyecto;

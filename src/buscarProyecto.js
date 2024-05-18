function buscarProyecto(nameOfProyect, proyectsList) {
  let foundProyects = [];
  if(proyectsList[0]){
    for(const proyect of proyectsList){
      if(proyect === nameOfProyect){
        foundProyects.push(proyect)
      }
    }
    return foundProyects;
  }
  return "";
}

export default buscarProyecto;

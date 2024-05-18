function buscarProyecto(searchCriterion, proyectsList) {
  let foundProyects = [];
  for(const proyect of proyectsList)
    if(proyect.includes(searchCriterion)) foundProyects.push(proyect)
  if(foundProyects[0]) return foundProyects;
  return "";
}

export default buscarProyecto;

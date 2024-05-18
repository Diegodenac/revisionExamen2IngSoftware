import buscarProyecto from "./buscarProyecto.js";

//Casos

// buscar un proyecto enn una lista vacia 

// buscar y encontrar un proyecto en una lista de 1 proyecto

// buscar y encontrar un proyecto en una lista de varios proyectos

// buscar y enceontrar mas de una coindencia de proyectos

// buscar y enceontrar proyectos cuyo nombre empieza con el criterio de busqueda

// por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos



describe("Buscar", () => {

  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
          
    let proyectos = [];
          
    expect (buscarProyecto("ejercicio1", proyectos)).toEqual("");
          
  });
          
  it("encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
          
    let proyectos = [];
          
    proyectos.push("miUnicoProyecto");
          
    expect (buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
          
  });
          
          
          
  // it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
          
  //   let proyectos = [];
          
  //   proyectos.push("proyecto1");
          
  //   proyectos.push("proyecto2");
          
  //   proyectos.push("proyecto3");
          
  //   expect (buscarProyecto("proyecto2", proyectos)).toEqual("proyecto2");
          
  // });
        
});
        
        //Para terminar:
        
        // 1.- buscar y enceontrar mas de una coindencia de proyectos
        
        // 2.-buscar y enceontrar proyectos cuyo nombre empieza con el criterio de busqueda
        
                 // por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos
        
        // 3.- Devuelve "" cuando no existe una coincidencia con ningun proyecto
        
import buscarProyecto from "./buscarProyecto.js";

//Casos

// buscar un proyecto enn una lista vacia DONE

// buscar y encontrar un proyecto en una lista de 1 proyecto DONE

// buscar y encontrar un proyecto en una lista de varios proyectos DONE

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
          
    expect (buscarProyecto("miUnicoProyecto", proyectos)).toEqual(["miUnicoProyecto"]);
          
  });
          
          
          
  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
          
    let proyectos = [];
          
    proyectos.push("proyecto1");
          
    proyectos.push("proyecto2");
          
    proyectos.push("proyecto3");
          
    expect (buscarProyecto("proyecto2", proyectos)).toEqual(["proyecto2"]);
          
  });

  it("encuentra todos los proyecto con el mismo nombre en una lista de varios proyectos", () => {
          
    let proyectos = [];
          
    proyectos.push("proyecto1");
          
    proyectos.push("proyecto");
          
    proyectos.push("proyecto");

    proyectos.push("proyecto2");
          
    expect (buscarProyecto("proyecto", proyectos)).toEqual(["proyecto", "proyecto"]);
          
  });
        
});
        
        //Para terminar:
        
        // 1.- buscar y enceontrar mas de una coindencia de proyectos
        
        // 2.-buscar y enceontrar proyectos cuyo nombre empieza con el criterio de busqueda
        
                 // por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos
        
        // 3.- Devuelve "" cuando no existe una coincidencia con ningun proyecto
        
let navItem = document.querySelectorAll('.nav-item');
navItem.forEach(function (item) {
    item.addEventListener('click', function () {
        navItem.forEach(event => event.querySelector('.nav-link').classList.remove('active'));
        item.querySelector('.nav-link').classList.add('active');

        let zona = item.querySelector('.nav-link').textContent;
        let obj_zona;
        switch (zona) {
            case "General":
                obj_zona = ["escalera", "puerta_principal", "balcon", "techo", "paredes", "caja_breaker", "suelo"];
                console.log(zona);
                break;
            case "Sala":
                obj_zona = ["iluminacion", "ventanas", "vidrios", "tubos_cortina", "tomas_electricos", "switches", "televisor", "telefono"];
                console.log(zona);
                break;
            case "Cocina":
                obj_zona = ["iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "tubos_cortina", "barra", "meson", "lava_platos", "gabinete_superior", "gabinete", "campana_extractora", "fogon"]
                console.log(zona);
                break;
            case "Baño":
                obj_zona = ["puerta", "iluminacion", "tomas_electricos", "switches", "paredes_baño", "ducha", "cabina", "piso", "sanitario", "lava_manos", "ventanas", "vidrios", "repisas", "accesorios"];
                //Revisar el input de cabina de baños
                console.log(zona);
                break;
            case "Alcoba":
                obj_zona = ["puerta", "iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "tubos_cortina", "puertas_closet", "cajones_closet", "entre_paños"];
                console.log(zona);
                break;
            case "Patio":
                obj_zona = ["puerta", "iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "lavadero", "lavadora", "rejas", "piso", "tendedero", "tejas_transparentes"];
                console.log(zona);
                break;
        }
        let template = `
            <form class="forms" name="${zona}" id="desc_general">
                <div class="buttons">
                    <button class="btn btn-primary"  type="button">Guardar</button>
                </div>
            </form> 
        `
        document.querySelector('.forms').remove();
        document.querySelector('.nav-tabs').insertAdjacentHTML('afterend', template);
        formulario(zona, obj_zona);
        check();
    });
});

class objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones) {
        this.id_inventario = id_inventario;
        this.id_zona = id_zona;
        this.estado_inicial = estado_inicial;
        this.estado_final = estado_final;
        this.observaciones = observaciones;
    }

}
// tipo 1, seleccion SI o NO
// tipo 2, cantidad
// tipo 3, caja de texto
// tipo 4, tipos de meson
// tipo 5, tipo de llave de agua
// tipo 6, tipo de gabinete
// tipo 7, tipo de fogon
// tipo 8, tipo de ducha
// tipo 9, tipo de cabina de baño

// OBJETOS DE LOS FORMULARIOS
class escalera extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, reja, pasa_manos, chapa, llaves, ojo_magico) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.reja = [{ valor: reja }, { tipo: "1" }];
        this.pasa_manos = [{ valor: pasa_manos }, { tipo: "1" }];
        this.chapa = [{ valor: chapa }, { tipo: "1" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
        this.ojo_magico = [{ valor: ojo_magico }, { tipo: "1" }];
    }
}
class puerta_principal extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, reja, timbre, citofono, chapa, llaves, ojo_magico) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.reja = [{ valor: reja }, { tipo: "1" }];
        this.timbre = [{ valor: timbre }, { tipo: "1" }];
        this.citofono = [{ valor: citofono }, { tipo: "1" }];
        this.chapa = [{ valor: chapa }, { tipo: "1" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
        this.ojo_magico = [{ valor: ojo_magico }, { tipo: "1" }];
    }
}
class paredes extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, color) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{ valor: color }, { tipo: "1" }];
    }
}
class caja_breaker extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class suelo extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, tipo, zocalo) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.tipo = [{ valor: tipo }, { tipo: "3" }];
        this.zocalo = [{ valor: zocalo }, { tipo: "3" }];
    }
}
class iluminacion extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, plafones, rosetas, lamapra_led, ojo_buey) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.plafones = [{ valor: plafones }, { tipo: "2" }];
        this.rosetas = [{ valor: rosetas }, { tipo: "2" }];
        this.lamapra_led = [{ valor: lamapra_led }, { tipo: "2" }];
        this.ojo_buey = [{ valor: ojo_buey }, { tipo: "2" }];
    }
}
class ventanas extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, seguro) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.seguro = [{ valor: seguro }, { tipo: "2" }];
    }
}
class vidrios extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, sanos, averiados, faltantes) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.sanos = [{ valor: sanos }, { tipo: "2" }];
        this.averiados = [{ valor: averiados }, { tipo: "2" }];
        this.faltantes = [{ valor: faltantes }, { tipo: "2" }];
    }
}
class tubos_cortina extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, soporte_tubos, persianas) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.soporte_tubos = [{ valor: soporte_tubos }, { tipo: "2" }];
        this.persianas = [{ valor: persianas }, { tipo: "2" }];
    }
}
class tomas_electricos extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class switches extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class meson extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, material) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.material = [{ valor: material }, { tipo: "4" }];
    }
}
class lava_platos extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, rejilla, llave_agua) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.rejilla = [{ valor: rejilla }, { tipo: "1" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "5" }];
    }
}
class gabinete_superior extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, puertas, manijas, vidrios, locero) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.puertas = [{ valor: puertas }, { tipo: "2" }];
        this.manijas = [{ valor: manijas }, { tipo: "2" }];
        this.vidrios = [{ valor: vidrios }, { tipo: "2" }];
        this.locero = [{ valor: locero }, { tipo: "1" }];
    }
}
class gabinete extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, gabinete, puertas, manijas) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.gabinete = [{ valor: gabinete }, { tipo: "6" }];
        this.puertas = [{ valor: puertas }, { tipo: "2" }];
        this.manijas = [{ valor: manijas }, { tipo: "2" }];
    }
}
class campana_extractora extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, marca) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.marca = [{ valor: marca }, { tipo: "3" }];
    }
}
class fogon extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, fogon, cubierta, perillas, encendido_electrico) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.fogon = [{ valor: fogon }, { tipo: "7" }];
        this.cubierta = [{ valor: cubierta }, { tipo: "1" }];
        this.perillas = [{ valor: perillas }, { tipo: "2" }];
        this.encendido_electrico = [{ valor: encendido_electrico }, { tipo: "1" }];
    }
}
class puerta extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, chapa, llaves) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.chapa = [{ valor: chapa }, { tipo: "1" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
    }
}
class paredes_baño extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, enchapados, perforaciones) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.enchapados = [{ valor: enchapados }, { tipo: "1" }];
        this.perforaciones = [{ valor: perforaciones }, { tipo: "2" }];
    }
}
class ducha extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, ducha, llave_agua) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.ducha = [{ valor: ducha }, { tipo: "8" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "5" }];
    }
}
class cabina extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cabina, llave_agua) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cabina = [{ valor: cabina }, { tipo: "9" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "5" }];
    }
}
class piso extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, tipo, rejilla) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.tipo = [{ valor: tipo }, { tipo: "3" }];
        this.rejilla = [{ valor: rejilla }, { tipo: "1" }];
    }
}
class sanitario extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, color, mueble) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{ valor: color }, { tipo: "3" }];
        this.mueble = [{ valor: mueble }, { tipo: "1" }];
    }
}
class lava_manos extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, color, pedestal, mueble_madera, llave_agua) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{ valor: color }, { tipo: "3" }];
        this.pedestal = [{ valor: pedestal }, { tipo: "1" }];
        this.mueble_madera = [{ valor: mueble_madera }, { tipo: "5" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "1" }];
    }
}
class repisas extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class accesorios extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, jabonera, gancho, cepillero, toallero, papelera, cilindro) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.jabonera = [{ valor: jabonera }, { tipo: "1" }];
        this.gancho = [{ valor: gancho }, { tipo: "1" }];
        this.cepillero = [{ valor: cepillero }, { tipo: "1" }];
        this.toallero = [{ valor: toallero }, { tipo: "1" }];
        this.papelera = [{ valor: papelera }, { tipo: "1" }];
        this.cilindro = [{ valor: cilindro }, { tipo: "1" }];
    }
}
class puertas_closet extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, jaladera, cerradura, llaves) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.jaladera = [{ valor: jaladera }, { tipo: "2" }];
        this.cerradura = [{ valor: cerradura }, { tipo: "2" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
    }
}
class cajones_closet extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, cerradura, llaves) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.cerradura = [{ valor: cerradura }, { tipo: "2" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
    }
}
class entre_paños extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, cerradura) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.zapatero = [{ valor: cerradura }, { tipo: "1" }];
    }
}
class lavadero extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, lavadero, tapon, canilla) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.lavadero = [{ valor: lavadero }, { tipo: "3" }];
        this.tapon = [{ valor: tapon }, { tipo: "1" }];
        this.canilla = [{ valor: canilla }, { tipo: "1" }];
    }
}
class lavadora extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, desague, canilla) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.desague = [{ valor: desague }, { tipo: "1" }];
        this.canilla = [{ valor: canilla }, { tipo: "1" }];
    }
}
class tejas_transparentes extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}

// Formulario por defecto
let obj_zona = ["escalera", "puerta_principal", "balcon", "techo", "paredes", "caja_breaker", "suelo"];
formulario("General", obj_zona);
check();
//

function formulario(zona, obj_zona) {
    switch (zona) {
        case "General":
            obj_zona.forEach(nombre => {
                let objeto;
                switch (nombre) {
                    case "escalera":
                        objeto = new escalera();
                        break;
                    case "puerta_principal":
                        objeto = new puerta_principal();
                        break;
                    case "balcon":
                        objeto = new objetos();
                        break;
                    case "techo":
                        objeto = new objetos();
                        break;
                    case "paredes":
                        objeto = new paredes();
                        break;
                    case "caja_breaker":
                        objeto = new caja_breaker();
                        break;
                    case "suelo":
                        objeto = new suelo();
                        break;
                }
                crearPlantilla(nombre, objeto)
            })
            break;
        case "Sala":
            obj_zona.forEach(nombre => {
                let objeto;
                switch (nombre) {
                    case "iluminacion":
                        objeto = new iluminacion();
                        break;
                    case "ventanas":
                        objeto = new ventanas();
                        break;
                    case "vidrios":
                        objeto = new vidrios();
                        break;
                    case "tubos_cortina":
                        objeto = new tubos_cortina();
                        break;
                    case "tomas_electricos":
                        objeto = new tomas_electricos();
                        break;
                    case "switches":
                        objeto = new switches();
                        break;
                    case "televisor":
                        objeto = new objetos();
                        break;
                    case "telefono":
                        objeto = new objetos();
                        break;
                }
                crearPlantilla(nombre, objeto)
            })
            break;
        case "Cocina":
            obj_zona.forEach(nombre => {
                let objeto;
                switch (nombre) {
                    case "iluminacion":
                        objeto = new iluminacion();
                        break;
                    case "tubos_cortina":
                        objeto = new tubos_cortina();
                        break;
                    case "tomas_electricos":
                        objeto = new tomas_electricos();
                        break;
                    case "switches":
                        objeto = new switches();
                        break;
                    case "ventanas":
                        objeto = new ventanas();
                        break;
                    case "vidrios":
                        objeto = new vidrios();
                        break;
                    case "tubos_cortina":
                        objeto = new tubos_cortina();
                        break;
                    case "barra":
                        objeto = new objetos();
                        break;
                    case "meson":
                        objeto = new meson();
                        break;
                    case "lava_platos":
                        objeto = new lava_platos();
                        break;
                    case "gabinete_superior":
                        objeto = new gabinete_superior();
                        break;
                    case "gabinete":
                        objeto = new gabinete();
                        break;
                    case "campana_extractora":
                        objeto = new campana_extractora();
                        break;
                    case "fogon":
                        objeto = new fogon();
                        break;
                }
                crearPlantilla(nombre, objeto)
            })
            break;
        case "Baño":
            obj_zona.forEach(nombre => {
                let objeto;
                switch (nombre) {
                    case "puerta":
                        objeto = new puerta();
                        break;
                    case "iluminacion":
                        objeto = new iluminacion();
                        break;
                    case "tomas_electricos":
                        objeto = new tomas_electricos();
                        break;
                    case "switches":
                        objeto = new switches();
                        break;
                    case "ventanas":
                        objeto = new ventanas();
                        break;
                    case "vidrios":
                        objeto = new vidrios();
                        break;
                    case "paredes_baño":
                        objeto = new paredes_baño();
                        break;
                    case "ducha":
                        objeto = new ducha();
                        break;
                    case "cabina":
                        objeto = new cabina();
                        break;
                    case "piso":
                        objeto = new piso();
                        break;
                    case "sanitario":
                        objeto = new sanitario();
                        break;
                    case "lava_manos":
                        objeto = new lava_manos();
                        break;
                    case "repisas":
                        objeto = new repisas();
                        break;
                    case "accesorios":
                        objeto = new accesorios();
                        break;
                }
                crearPlantilla(nombre, objeto)
            })
            //Revisar el input de cabina de baños
            break;
        case "Alcoba":
            obj_zona.forEach(nombre => {
                let objeto;
                switch (nombre) {
                    case "puerta":
                        objeto = new puerta();
                        break;
                    case "iluminacion":
                        objeto = new iluminacion();
                        break;
                    case "tomas_electricos":
                        objeto = new tomas_electricos();
                        break;
                    case "switches":
                        objeto = new switches();
                        break;
                    case "ventanas":
                        objeto = new ventanas();
                        break;
                    case "vidrios":
                        objeto = new vidrios();
                        break;
                    case "tubos_cortina":
                        objeto = new tubos_cortina();
                        break;
                    case "puertas_closet":
                        objeto = new puertas_closet();
                        break;
                    case "cajones_closet":
                        objeto = new cajones_closet();
                        break;
                    case "entre_paños":
                        objeto = new entre_paños();
                        break;
                }
                crearPlantilla(nombre, objeto)
            })
            break;
        case "Patio":
            obj_zona.forEach(nombre => {
                let objeto;
                switch (nombre) {
                    case "puerta":
                        objeto = new puerta();
                        break;
                    case "iluminacion":
                        objeto = new iluminacion();
                        break;
                    case "tomas_electricos":
                        objeto = new tomas_electricos();
                        break;
                    case "switches":
                        objeto = new switches();
                        break;
                    case "ventanas":
                        objeto = new ventanas();
                        break;
                    case "vidrios":
                        objeto = new vidrios();
                        break;
                    case "lavadero":
                        objeto = new lavadero();
                        break;
                    case "lavadora":
                        objeto = new lavadora();
                        break;
                    case "rejas":
                        objeto = new objetos();
                        break;
                    case "piso":
                        objeto = new piso();
                        break;
                    case "tendedero":
                        objeto = new objetos();
                        break;
                    case "tejas_transparentes":
                        objeto = new tejas_transparentes();
                        break;
                }
                crearPlantilla(nombre, objeto)
            })
            break;
    }
}

function crearPlantilla(nombre, object) {
    let tem_object = template_object(nombre, object);
    document.querySelector('.forms').insertAdjacentHTML('beforeend', tem_object);
}

function template_object(nom, template_obj) {
    let nombre = nom.replace(/_/, " "); //nombre para los titulos
    let template = `
        <fieldset class="object disabled" name="${nom}">
            <aside class="custom-control custom-switch">
                <input type="checkbox" name="switch" class="custom-control-input" id="${nom}-switch">
                <label class="custom-control-label" for="${nom}-switch"></label>
            </aside>
            <legend>${nombre}</legend>
            <aside class="content-object">
                ${template_atributos(template_obj, nom)}
                <fieldset class="atributo">
                    <legend>Estado Inicial</legend>
                    <aside>
                        <label for="${nom}-estado_ini">Estado</label>
                        <select name="${nom}-estado_ini" id="${nom}-estado_ini" required>
                            <option></option>
                            <option value="1">Muy Malo</option>
                            <option value="2">Malo</option>
                            <option value="3">Regular</option>
                            <option value="4">Bueno</option>
                            <option value="5">Muy bueno</option>
                        </select>
                    </aside>
                </fieldset>
                <fieldset class="atributo">
                    <legend>Estado Final</legend>
                    <aside>
                        <label for="${nom}-estado_fin">Estado</label>
                        <select name="${nom}-estado_fin" id="${nom}-estado_fin" required>
                            <option value=""></option>
                            <option value="1">Muy Malo</option>
                            <option value="2">Malo</option>
                            <option value="3">Regular</option>
                            <option value="4">Bueno</option>
                            <option value="5">Muy bueno</option>
                        </select>
                    </aside>
                </fieldset>
            </aside>
            <fieldset class="atributo">
                <legend>Observaciones</legend>
                <textarea type="number" name="${nom}-observaciones" id="${nom}-observaciones" rows="3" col="100" maxlength="255"></textarea>
            </fieldset>
        </fieldset>
    `
    return template;
}
function template_atributos(object, nom) {
    let a = 0;
    let template = "";
    let nom_obj = nom; //nombre para utilizar las variables
    Object.entries(object).forEach(element => {
        if (a > 4) { // no tomar los primeros campos de la clase Objetos
            let nombre = element[0].replace(/_/, " "); //nombre para los titulos
            let nom = element[0]; //nombre para utilizar las variables
            if (element[1][1].tipo == 1) { //SELECIONAR SI O NO
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}_si">Si</label>
                            <input type="radio" name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}_si" value="si" required>
                        </aside>
                        <aside>
                            <label for="${nom_obj + `-` + nom}_no">No</label>
                            <input type="radio" name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}_no" value="no">
                        </aside>
                    </fieldset>
                `
            } else if (element[1][1].tipo == 2) { // CANTIDAD
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Cantidad</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1][1].tipo == 3) { // CAMPO DE TEXTO
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <textarea type="number" name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" rows="1" maxlength="30"></textarea>
                        </aside>
                    </fieldset>
                `
            } else if (element[1][1].tipo == 4) { //MESON
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Tipo</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value="">Selecionar</option>
                                <option value="Acero Inox">Acero Inox</option>
                                <option value="Enchapado">Enchapado</option>
                                <option value="Granito">Granito</option>
                                <option value="Quarzo">Quarzo</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1][1].tipo == 5) { // LLAVE DE AGUA
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Tipo</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value="">Selecionar</option>
                                <option value="Pomo">Pomo</option>
                                <option value="Canilla">Canilla</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1][1].tipo == 6) { //GABINETE
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Tipo</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value="">Selecionar</option>
                                <option value="Superior">Superior</option>
                                <option value="Auxiliar">Auxiliar</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1][1].tipo == 7) { // FOGON
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Tipo</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value="">Selecionar</option>
                                <option value="Fogon">Fogon</option>
                                <option value="Estufa">Estufa</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1][1].tipo == 8) { //DUCHA
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Tipo</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value="">Selecionar</option>
                                <option value="Regadera">Regadera</option>
                                <option value="Electrica">Electrica</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else { //CABINA BAÑO
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Tipo</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" required>
                                <option value="">Selecionar</option>
                                <option value="Acrilico">Acrilico</option>
                                <option value="Vidrio">Vidrio Templado</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            }
        }
        a++;
    })
    return template;
}
function check(){
    document.getElementsByName("switch").forEach(function (check) {
        check.addEventListener('click', function () {
            let parent = check.parentElement.parentElement;
            if (parent.classList.contains('disabled')) {
                parent.classList.remove('disabled');
            } else {
                parent.classList.add('disabled');
                let inputs = parent.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    if (input.type == "radio") {
                        input.checked = false;
                    } else if (input.tagName == "select") {
                        input.children.value = "";
                    } else {
                        input.value = "";
                    }
                })
            }
        })
    });
}


document.getElementById("code_pro").addEventListener('input',function(){
    let inventario = document.getElementById("num_invent");
    let BtnNuevo = document.getElementById("nuevo");
    if(document.getElementById("code_pro").value !== "" && inventario.value == ""){
        BtnNuevo.classList.remove('disabled')
    }else{
        BtnNuevo.classList.add('disabled')
    }
    inventario.addEventListener('input',function(){
        if(inventario.value == "" && document.getElementById("code_pro").value !== ""  ){
            BtnNuevo.classList.remove('disabled')
        }else{
            BtnNuevo.classList.add('disabled')
        }
    })
});


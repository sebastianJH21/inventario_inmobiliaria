let navItem = document.querySelectorAll('.nav-item');
navItem.forEach(function (item) {
    item.addEventListener('click', function () {
        navItem.forEach(event => event.querySelector('.nav-link').classList.remove('active'));
        item.querySelector('.nav-link').classList.add('active');
    });
});

// const objects = [
// accesorios_banos,balcon,barra,cabina,caja_breaker,cajones_closet,campana_extractora,ducha,entre_panos,escalera,espejo,fogon,gabinete,gabinete_superior,iluminacion,lavadero,lava_manos,lava_platos,meson,paredes,pared_bano,puertas,puertas_closet,puerta_principal,reja,repisas,sanitario,suelo,suelo_bano,switches,techo,tejas_transparentes,telefono,televisor,tendedero,toma_electrico,tubos_cortina,ventanas,vidrios,zonas
// ]
// class inventario {
//     constructor(id_inventario,codigo_propiedad){
//         this.inventario = id_inventario;
//         this.propiedad = codigo_propiedad
//     }
// }
// class zonas {
//     constructor(){
//         this.desc_general = 1;
//         this.sala = 2;
//         this.comida = 3;
//         this.bano = 4;
//         this.alcoba = 5;
//         this.patio = 6;
//     }
// }

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
class escalera extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, reja, pasa_manos, chapa, llaves, ojo_magico) {
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.reja = [{valor: reja},{tipo: "1"}];
        this.pasa_manos = [{valor: pasa_manos},{tipo: "1"}];
        this.chapa = [{valor: chapa},{tipo: "1"}];
        this.llaves = [{valor: llaves},{tipo: "2"}];
        this.ojo_magico = [{valor: ojo_magico},{tipo: "1"}];
    }
}
class puerta_principal extends objetos {
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones,reja,timbre,citofono,chapa,llaves,ojo_magico){
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.reja = [{valor: reja},{tipo: "1"}];
        this.timbre = [{valor: timbre},{tipo: "1"}];
        this.citofono = [{valor: citofono},{tipo: "1"}];
        this.chapa = [{valor: chapa},{tipo: "1"}];
        this.llaves = [{valor: llaves},{tipo: "2"}];
        this.ojo_magico = [{valor: ojo_magico},{tipo: "1"}];
    }
}
class paredes extends objetos{
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, color){
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{valor: color},{tipo: "1"}];
    }
}
class caja_breaker extends objetos{
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad){
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{valor: cantidad},{tipo: "2"}];
    }
}
class suelo extends objetos{
    constructor(id_inventario, id_zona, estado_inicial, estado_final, observaciones, tipo, zocalo){
        super(id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.tipo = [{valor: tipo},{tipo: "3"}];
        this.zocalo = [{valor: zocalo},{tipo: "3"}];
    }
}

const obj_zona = ["escalera","puerta_principal","balcon","techo","paredes","caja_breaker","suelo"];

obj_zona.forEach(nombre=>{
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
    crearPlantilla(nombre,objeto)   
})

function crearPlantilla(nombre,object){
    let tem_object = template_object(nombre,object);
    document.querySelector('.forms').insertAdjacentHTML('beforeend', tem_object);
}

function template_object(nom,template_obj) {
    let nombre = nom.replace(/_/, " "); //nombre para los titulos
    let template = `
        <fieldset class="object" name="${nom}">
            <legend>${nombre}</legend>
            <div class="content-object">
                ${template_atributos(template_obj,nom)}
                <fieldset class="bars">
                    <legend>Estado Inicial</legend>
                    <div>
                        <label for="${nom}-status_ini">Estado</label>
                        <select name="${nom}-status_ini" id="${nom}-status_ini" required>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset class="bars">
                    <legend>Estado Final</legend>
                    <div>
                        <label for="${nom}-status_end">Estado</label>
                        <select name="${nom}-status_end" id="${nom}-status_end" required>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </fieldset>
            </div>
            <fieldset class="bars">
                <legend>Observaciones</legend>
                <textarea type="number" name="${nom}-observaciones" id="${nom}-observaciones" rows="3" col="100" maxlength="255"></textarea>
            </fieldset>
        </fieldset>
    `
    return template;
}
function template_atributos(object,nom) {
    let a = 0;
    let template = "";
    let nom_obj = nom; //nombre para utilizar las variables
    Object.entries(object).forEach(element => {
        if (a > 4) { // no tomar los primeros campos de la clase Objetos
            let nombre = element[0].replace(/_/, " "); //nombre para los titulos
            let nom = element[0]; //nombre para utilizar las variables
            if (element[1][1].tipo == 1) {
                template += `
            <fieldset class="bars">
                <legend>${nombre}</legend>
                <div>
                    <label for="${nom_obj+`-`+nom}_si">Si</label>
                    <input type="radio" name="${nom_obj+`-`+nom}" id="${nom_obj+`-`+nom}_si" value="si" required>
                </div>
                <div>
                    <label for="${nom_obj+`-`+nom}_no">No</label>
                    <input type="radio" name="${nom_obj+`-`+nom}" id="${nom_obj+`-`+nom}_no" value="no">
                </div>
            </fieldset>
            `
            } else if(element[1][1].tipo == 2) {
                template += `
            <fieldset class="bars">
                <legend>${nombre}</legend>
                <div>
                    <label for="${nom_obj+`-`+nom}">Cantidad</label>
                    <input type="number" name="${nom_obj+`-`+nom}" id="${nom_obj+`-`+nom}">
                </div>
            </fieldset>
            `
            }else{
                template += `
                    <fieldset class="bars">
                        <legend>${nombre}</legend>
                        <div>
                            <textarea type="number" name="${nom_obj+`-`+nom}" id="${nom_obj+`-`+nom}" rows="1" maxlength="30"></textarea>
                        </div>
                    </fieldset>
                `
            }
        }
        a++;
    })
    return template;
}
// $('#liveToastBtn').click(function(){
//     $('.toast').toast('show');
// });


// OBJETOS DE LOS FORMULARIOS
class objetos {
    constructor(estado_inicial, estado_final, observaciones) {
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
// tipo 9, tipo de cabina de bano
class escaleras extends objetos {
    constructor(reja, pasa_manos, chapa, llaves, ojo_magico, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.reja = 1;
        this.pasa_manos = 1;
        this.chapa = 1;
        this.llaves = 2;
        this.ojo_magico = 1;
    }
}
class puerta_principal extends objetos {
    constructor(reja, timbre, citofono, chapa, llaves, ojo_magico, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.reja = 1;
        this.timbre = 1;
        this.citofono = 1;
        this.chapa = 1;
        this.llaves = 2;
        this.ojo_magico = 1
    }
}
class paredes extends objetos {
    constructor(color, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.color = 3;
    }
}
class caja_breaker extends objetos {
    constructor(cantidad, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
    }
}
class espejos extends objetos {
    constructor(cantidad, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
    }
}
class suelo extends objetos {
    constructor(tipo, zocalo, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 3;
        this.zocalo = 3;
    }
}
class iluminacion extends objetos {
    constructor(plafones, rosetas, lamapra_led, ojo_buey, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.plafones = 2;
        this.rosetas = 2;
        this.lampara_led = 2;
        this.ojo_buey = 2;
    }
}
class ventanas extends objetos {
    constructor(cantidad, seguro, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
        this.seguro = 2;
    }
}
class vidrios extends objetos {
    constructor(sanos, averiados, faltantes, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.sanos = 2;
        this.averiados = 2;
        this.faltantes = 2;
    }
}
class tubos_cortina extends objetos {
    constructor(cantidad, soporte_tubos, persianas, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
        this.soporte_tubos = 2;
        this.persianas = 2;
    }
}
class tomas_electricos extends objetos {
    constructor(cantidad, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
    }
}
class switches extends objetos {
    constructor(cantidad, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
    }
}
class meson extends objetos {
    constructor(material, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 4;
    }
}
class lava_platos extends objetos {
    constructor(rejilla, llave_agua, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.rejilla = 1;
        this.llave_agua = 5;
    }
}
class gabinete_superior extends objetos {
    constructor(puertas, manijas, vidrios, locero, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.puertas = 2;
        this.manijas = 2;
        this.vidrios = 2;
        this.locero = 1;
    }
}
class gabinete extends objetos {
    constructor(gabinete, puertas, manijas, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 6;
        this.puertas = 2;
        this.manijas = 2;
    }
}
class campana_extractora extends objetos {
    constructor(marca, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.marca = 3;
    }
}
class fogon extends objetos {
    constructor(fogon, cubierta, perillas, encendido_electrico, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 7;
        this.cubierta = 1;
        this.perillas = 2;
        this.encendido_electrico = 1;
    }
}
class puertas extends objetos {
    constructor(chapa, llaves, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.chapa = 1;
        this.llaves = 2;
    }
}
class paredes_bano extends objetos {
    constructor(enchapados, perforaciones, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.enchapados = 1;
        this.perforaciones = 2;
    }
}
class ducha extends objetos {
    constructor(ducha, llave_agua, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 8;
        this.llave_agua = 5;
    }
}
class cabina extends objetos {
    constructor(cabina, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 9;
    }
}
class piso extends objetos {
    constructor(tipo, rejilla, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 3;
        this.rejilla = 1;
    }
}
class sanitario extends objetos {
    constructor(color, mueble, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.color = 3;
        this.mueble = 1;
    }
}
class lava_manos extends objetos {
    constructor(color, pedestal, mueble_madera, llave_agua, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.color = 3;
        this.pedestal = 1;
        this.mueble_madera = 1;
        this.llave_agua = 5;
    }
}
class repisas extends objetos {
    constructor(cantidad, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
    }
}
class accesorios extends objetos {
    constructor(jabonera, gancho, cepillero, toallero, papelera, cilindro, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.jabonera = 1;
        this.gancho = 1;
        this.cepillero = 1;
        this.toallero = 1;
        this.papelera = 1;
        this.cilindro = 1;
    }
}
class puertas_closet extends objetos {
    constructor(cantidad, jaladera, cerradura, llaves, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
        this.jaladeras = 2;
        this.cerraduras = 2
        this.llaves = 2;
    }
}
class cajones_closet extends objetos {
    constructor(cantidad, cerradura, llaves, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
        this.cerraduras = 2;
        this.llaves = 2;
    }
}
class entre_panos extends objetos {
    constructor(cantidad, cerradura, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
        this.zapatero = 1;
    }
}
class lavadero extends objetos {
    constructor(lavadero, tapon, canilla, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.tipo = 3;
        this.tapon = 1;
        this.canilla = 1;
    }
}
class lavadora extends objetos {
    constructor(desague, canilla, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.desague = 1;
        this.canilla = 1;
    }
}
class tejas_transparentes extends objetos {
    constructor(cantidad, estado_inicial, estado_final, observaciones) {
        super(estado_inicial, estado_final, observaciones);
        this.cantidad = 2;
    }
}

const obj_inventario = {
    "accesorios": accesorios, //1
    "balcon": objetos, //2 
    "barra": objetos, //3 
    "cabina": cabina, //4
    "caja_breaker": caja_breaker, //5
    "cajones_closet": cajones_closet, //6
    "campana_extractora": campana_extractora, //7 
    "ducha": ducha, //8
    "entre_panos": entre_panos, //9
    "escaleras": escaleras, //10
    "espejos": objetos, //11
    "fogon": fogon, //12
    "gabinete": gabinete, //13
    "gabinete_superior": gabinete_superior, //14 
    "iluminacion": iluminacion, //15
    "lavadero": lavadero, //16
    "lavadora": lavadora, //17
    "lava_manos": lava_manos, //18
    "lava_platos": lava_platos, //19
    "meson": meson, //20 
    "paredes": paredes, //21
    "paredes_bano": paredes_bano, //22 
    "piso": piso, //23
    "puertas": puertas, //24
    "puertas_closet": puertas_closet, //25
    "puerta_principal": puerta_principal, //26
    "rejas": objetos, //27
    "repisas": repisas, //28
    "sanitario": sanitario, //29
    "suelo": suelo, //30
    "switches": switches, //31
    "techo": objetos, //32
    "tejas_transparentes": tejas_transparentes, //33
    "telefono": objetos, //34
    "televisor": objetos, //35
    "tendedero": objetos, //36
    "tomas_electricos": tomas_electricos, //37
    "tubos_cortina": tubos_cortina, //38
    "ventanas": ventanas, //39
    "vidrios": vidrios, //40
}
// botones del fomrmulairo
document.querySelector('.forms').addEventListener('submit', guardar);
document.getElementById('eliminar').addEventListener('click', eliminar);
let clickNuevo;
document.getElementById('nuevo').addEventListener('click', function () {
    let nuevoInv = nuevo();
    console.log(nuevoInv);
    if (nuevoInv) {
        clickNuevo = 1;
        cancelar();
        habilitarForms();
        document.querySelector('#nuevo').classList.add('disabled')
    }
});
document.getElementById('cancelar').addEventListener('click', cancelar)

// alerta temproral
function toast(tipo, mensaje) {
    let titulo;
    let alerta;
    if (tipo == 1) {
        alerta = "success";
        titulo = "Proceso Exitoso";
    } else {
        alerta = "danger";
        titulo = "Proceso Fallido";
    }
    let template = `
        <aside class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
            <aside class="alert alert-${alerta} toast-header">
                <strong class="mr-auto text-center col">¡${titulo}!</strong>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </aside>
            <aside class="toast-body">
                <p>${mensaje}</p>
            </aside>
        </aside>
    `
    let cont_toast = document.querySelector('.contenedor-toast');
    cont_toast.insertAdjacentHTML('beforeend', template);
    $('.toast').toast('show');
    setTimeout(function () {
        cont_toast.firstElementChild.remove();
    }, 5000)
}
//funcion checkbox para habilitar formularios

function check(check, funcion = 0) {
    let parent = check.parentElement.parentElement;
    if (funcion == 1) {
        if (parent.classList.contains('disabled')) {
            parent.classList.remove('disabled');
            parent.querySelectorAll('input, select').forEach(input => {
                if (input.name != "switch") {
                    input.setAttribute('required', 'true')
                }
            })
        } else {
            parent.classList.add('disabled');
            vaciarInput(parent);
            parent.querySelectorAll('input, textarea, select').forEach(input => {
                input.removeAttribute('required')
            })
        }
    } else {
        parent.classList.add('disabled');
        vaciarInput(parent);
        parent.querySelectorAll('input, textarea, select').forEach(input => {
            input.removeAttribute('required')
        })
    }
}
function vaciarInput(padre) {
    padre.querySelectorAll('input, textarea, select').forEach(function (input) {
        if (input.type == "radio") {
            input.checked = false;
        } else if (input.tagName == "select") {
            input.children.value = "";
        } else {
            input.value = "";
        }
    });
}
function cancelar() {
    document.querySelector('.num_invent').classList.remove('disabled')
    document.querySelector('#num_invent').value = "";
    document.querySelector('.code_pro').classList.remove('disabled')
    document.querySelector('#nuevo').classList.remove('disabled')
    window.scrollTo(0, 0);
    document.getElementsByName("switch").forEach(function (swit) {
        check(swit);
        swit.checked = false;
    })
}
function habilitarForms() {
    document.querySelectorAll('input[type="checkbox"').forEach(function (swit) {
        swit.disabled = false;
    })
    document.getElementsByName("switch").forEach(function (swit) {
        swit.addEventListener('click', function () {
            check(swit, 1);
            let i = 0;
            let checks = Array();
            document.querySelectorAll(".object").forEach(function (obj) {
                checks[i] = obj.classList.contains('disabled');
                i++;
            })
            if (checks.includes(false)) {
                document.querySelector('#guardar').classList.remove('disabled')
            } else {
                document.querySelector('#guardar').classList.add('disabled')
            }
        })
    })
}
// funciones de los botones
function nuevo() {
    let codigo_pro = document.querySelector('#code_pro').value;
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Nota: en JavaScript, los meses van de 0 a 11
    let year = fechaActual.getFullYear();
    // Formatear el día y el mes con dos dígitos si es necesario
    dia = (dia < 10) ? '0' + dia : dia;
    mes = (mes < 10) ? '0' + mes : mes;
    // Crear la cadena con el formato "dd-mm-yyyy"
    let fecha = year + '-' + mes + '-' + dia;
    return new Promise(function (respuesta) {
        $.ajax({
            url: 'includes/functions.php',
            type: 'POST',
            data: {
                "funcion": 1, //Crear nuevo inventario
                "codigo": codigo_pro,
                "fecha": fecha
            },
            success: function (response) {
                let inv = JSON.parse(response);
                if (inv["proceso"]) {
                    document.querySelector('#num_invent').value = inv["id_inventario"];
                    document.querySelector('.num_invent').classList.add('disabled')
                    document.querySelector('.code_pro').classList.add('disabled')

                    let msg = "Se creó el nuevo inventario";
                    toast(1, msg)
                    respuesta(true);
                } else {
                    let msg = "El código de inmobiliaria no existe";
                    toast(0, msg)
                    respuesta(false);
                }
            }
        })
    })
}

function guardar(event) {
    event.preventDefault();
    let form = document.querySelector('.forms');
    form.querySelectorAll('.object').forEach(function (obj) {
        if (!obj.classList.contains('disabled')) {
            let nombre = obj.name
            let objeto = new obj_inventario[nombre]();
            let id_inventario = document.querySelector('#num_invent').value;
            let zona = document.querySelector('.forms').name;
            let id_zona;
            switch (zona) {
                case "General":
                    id_zona = 1;
                    break;
                case "Sala":
                    id_zona = 2;
                    break;
                case "Cocina":
                    id_zona = 3;
                    break;
                case "Baño":
                    id_zona = 4;
                    break;
                case "Alcoba":
                    id_zona = 5;
                    break;
                case "Patio":
                    id_zona = 6;
                    break;
            }
            let propiedades = Array();
            let i = 0;
            obj.querySelectorAll('input, select, textarea').forEach(function (input) { //Selecionar todos los input del formulario 
                if (input.name.includes(nombre)) { //Selecionar los inputs de cada elemento
                    let atributo = input.name.split('-')[1]; // extraer el nombre de cada elemento del objeto
                    if (input.type == "radio") { //separar los input radio
                        if (input.checked) { //validad el radio seleccionado
                            objeto[atributo] = input.value; //extrar el valor y almacenar en el objeto
                            if (!propiedades.includes(atributo)) {
                                propiedades[i] = atributo;
                                i++
                            }
                        }
                    } else {
                        objeto[atributo] = input.value;
                        if (!propiedades.includes(atributo)) {
                            propiedades[i] = atributo;
                            i++
                        }
                    }
                }
            })
            $.ajax({
                url: 'includes/functions.php',
                type: 'POST',
                data: {
                    "funcion": 2, //guardar
                    "tabla": nombre,
                    "id_inventario": id_inventario,
                    // "id_inventario": 1, // INVENTARIO DE PRUEBA
                    "id_zona": id_zona,
                    "propiedades": propiedades,
                    "objeto": objeto
                },
                beforeSend: function () {
                    $('#loader_guardar').show();
                },
                success: function (response) {
                    let respuesta = JSON.parse(response);
                    if (respuesta["proceso"]) {
                        let nom1 = nombre.split('_')[0];
                        let nom2 = nombre.split('_')[0];
                        let mod_nombre = nom1 + " " + nom2;
                        let msg = `<strong>${mod_nombre}</strong> se guardo con exito`;
                        toast(1, msg)
                        cancelar();
                    } else {
                        let msg = `<strong>${mod_nombre}</strong> no se guardo con exito`;
                        toast(0, msg)
                    }
                    $('#loader_guardar').hide();
                }
            })
        }
    })
}

function eliminar() {
    let id_inventario = document.querySelector('#num_invent').value;
    let tablas = Array();
    let i = 0;
    Object.keys(obj_inventario).forEach(function (tabla) {
        tablas[i] = tabla;
        i++;
    })
    console.log(tablas)
    $.ajax({
        url: 'includes/functions.php',
        type: 'POST',
        data: {
            "funcion": 3,
            "tablas": tablas,
            "id_inventario": id_inventario
        },
        beforeSend: function () {
            $('#loader_eliminar').show();
        },
        success: function (response) {
            let respuesta = JSON.parse(response)
            console.log(respuesta);
            if (respuesta["proceso"]) {
                let msg = "Se elimino el formulario";
                console.log(msg)
                toast(1, msg);
            } else {
                let msg = "No existe este formulario";
                console.log(msg)
                toast(0, msg);
            }
            $('#loader_eliminar').hide();
        }
    })
}

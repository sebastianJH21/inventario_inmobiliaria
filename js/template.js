function form_DesGeneral() {
    let = obj_zona = ["escaleras", "puerta_principal", "balcon", "techo", "paredes", "caja_breaker", "suelo"];
    obj_zona.forEach(nombre => {
        let objeto;
        if (nombre == "balcon" || nombre == "techo") {
            objeto = new objetos();
        } else {
            objeto = new obj_inventario[nombre]();
        }
        crearPlantilla(nombre, objeto)
    })
}
form_DesGeneral();
document.querySelectorAll('input[type="checkbox"').forEach(function (swit) {
    swit.disabled = true;
})
if (clickNuevo == 1) {
    habilitarForms();
}
if(edit == 1){
    habilitarForms();
    document.querySelector('#editar').removeAttribute('hidden');
    document.querySelector('#guardar').setAttribute('hidden', 'true');
}
document.getElementsByName("switch").forEach(function (swit) {
    swit.addEventListener('click', function () {
        check(swit, 1);
        validarCheck();
    })
})

let navItem = document.querySelectorAll('.nav-item');
navItem.forEach(function (item) {
    item.addEventListener('click', function () {
        navItem.forEach(event => event.querySelector('.nav-link').classList.remove('active'));
        item.querySelector('.nav-link').classList.add('active');

        let zona = item.querySelector('.nav-link').textContent;
        let template = `
        <form class="forms" name="${zona}" id="${zona}">
            <aside class="buttons">
                <button class="btn btn-primary" type="button" name="cancelar" id="cancelar">Cancelar</button>
                <button class="btn btn-primary disabled"  type="submit" name="guardar" id="guardar">Guardar</button>
                <button class="btn btn-primary" type="submit" name="editar" id="editar" hidden><span
                        class="spinner-border" id="loader_editar"></span>Editar</button>
            </aside>
        </form> 
        `
        document.querySelector('.forms').remove();
        document.querySelector('.nav-tabs').insertAdjacentHTML('afterend', template);
        switch (zona) {
            case "General":
                form_DesGeneral();
                break;
            case "Sala":
                obj_zona = ["iluminacion", "ventanas", "vidrios", "tubos_cortina", "tomas_electricos", "switches", "televisor", "telefono"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    if (nombre == "televisor" || nombre == "telefono") {
                        objeto = new objetos();
                    } else {
                        objeto = new obj_inventario[nombre]();
                    }
                    crearPlantilla(nombre, objeto)
                })
                break;
            case "Cocina":
                obj_zona = ["iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "tubos_cortina", "barra", "meson", "lava_platos", "gabinete_superior", "gabinete_inferior","gabinete_auxiliar", "campana_extractora", "fogon"]
                obj_zona.forEach(nombre => {
                    let objeto;
                    if (nombre == "barra") {
                        objeto = new objetos();
                    } else {
                        objeto = new obj_inventario[nombre]();
                    }
                    crearPlantilla(nombre, objeto)
                })
                break;
            case "Baño":
                obj_zona = ["puertas", "iluminacion", "tomas_electricos", "switches", "paredes_bano", "ducha", "cabina", "piso", "sanitario", "espejos", "lava_manos", "ventanas", "vidrios", "repisas", "accesorios"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    objeto = new obj_inventario[nombre]();
                    crearPlantilla(nombre, objeto)
                })
                break;
            case "Alcoba":
                obj_zona = ["puertas", "iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "tubos_cortina", "puertas_closet", "cajones_closet", "entre_panos"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    objeto = new obj_inventario[nombre]();
                    crearPlantilla(nombre, objeto)
                })
                break;
            case "Patio":
                obj_zona = ["puertas", "iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "lavadero", "lavadora", "reja", "piso", "tendedero", "tejas_transparentes"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    if (nombre == "rejas" || nombre == "tendedero") {
                        objeto = new objetos();
                    } else {
                        objeto = new obj_inventario[nombre]();
                    }
                    crearPlantilla(nombre, objeto)
                })
                break;
        }
        document.querySelector('#editar').classList.add('disabled');
        document.querySelector('#guardar').classList.add('disabled');

        document.querySelectorAll('input[type="checkbox"').forEach(function (swit) {
            swit.disabled = true;
        })
        
        if (clickNuevo == 1) {
            habilitarForms();
        }
        if(edit == 1){
            habilitarForms();
            document.querySelector('#editar').removeAttribute('hidden');
            document.querySelector('#guardar').setAttribute('hidden', 'true');
        }
        //funciones botones
        document.getElementById('cancelar').addEventListener('click', cancelar)
        document.querySelector('.forms').addEventListener('submit', function (event) {
            event.preventDefault();
            if (edit == 1) {
                editar(idObejtos);
            } else {
                confirmarGuardar();
            }
        });
        document.getElementsByName("switch").forEach(function (swit) {
            swit.addEventListener('click', function () {
                check(swit, 1);
                validarCheck();
            })
        })
        document.getElementById('cancelar').addEventListener('click', function () {
            let msg = "¿Esta seguro de quiere canelar este formulario?";
            modal(msg).then(result => {
                if (result) {
                    cancelar();
                }
            })
            document.querySelector('.btn-modal').click();
        })
    });
});
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
                        <select name="${nom}-estado_inicial" id="${nom}-estado_inicial" style="width:10rem">
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
                        <select name="${nom}-estado_final" id="${nom}-estado_final" style="width:10rem">
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
        if (a > 2) { // no tomar los primeros campos de la clase Objetos
            let nombre = element[0].replace(/_/, " "); //nombre para los titulos
            let nom = element[0]; //nombre para utilizar las variables
            if (element[1] == 1) { //SELECIONAR SI O NO
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}_si">Si</label>
                            <input type="radio" name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}_si" value="1">
                        </aside>
                        <aside>
                            <label for="${nom_obj + `-` + nom}_no">No</label>
                            <input type="radio" name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}_no" value="0">
                        </aside>
                    </fieldset>
                `
            } else if (element[1] == 2) { // CANTIDAD
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <label for="${nom_obj + `-` + nom}">Cantidad</label>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}">
                                <option value=""></option>
                                <option value="0">0</option>
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
            } else if (element[1] == 3) { // CAMPO DE TEXTO
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <input type="text" name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" maxlength="30">
                        </aside>
                    </fieldset>
                `
            } else if (element[1] == 4) { //MESON
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" style="width:10rem">
                                <option value="">Selecionar</option>
                                <option value="1">Acero Inox</option>
                                <option value="2">Enchapado</option>
                                <option value="3">Granito</option>
                                <option value="4">Quarzo</option>
                                <option value="5">Resina</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1] == 5) { // LLAVE DE AGUA
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" style="width:10rem">
                                <option value="">Selecionar</option>
                                <option value="1">Pomo</option>
                                <option value="2">Canilla</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1] == 6) { //GABINETE
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" style="width:10rem">
                                <option value="">Selecionar</option>
                                <option value="1">Inferior</option>
                                <option value="2">Auxiliar</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1] == 7) { // FOGON
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" style="width:10rem">
                                <option value="">Selecionar</option>
                                <option value="1">Fogon</option>
                                <option value="2">Estufa</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else if (element[1] == 8) { //DUCHA
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" style="width:10rem">
                                <option value="">Selecionar</option>
                                <option value="1">Regadera</option>
                                <option value="2">Electrica</option>
                            </select>
                        </aside>
                    </fieldset>    
                `
            } else { //CABINA BAÑO
                template += `
                    <fieldset class="atributo">
                        <legend>${nombre}</legend>
                        <aside>
                            <select name="${nom_obj + `-` + nom}" id="${nom_obj + `-` + nom}" style="width:10rem">
                                <option value="">Selecionar</option>
                                <option value="1">Acrilico</option>
                                <option value="2">Vidrio Templado</option>
                                <option value="3">Cortina</option>
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
function modal(msg,btns = 0){
    let btn1;
    let btn2;
    let classBtn;
    if(btns == 0){
        btn1 = "Cancelar"
        btn2 = "Confirmar"
        classBtn = "secondary"
    }else{
        classBtn = "primary"
        btn1 = "Agregar"
        btn2 = "Editar"
    }
    let template = `
    <aside class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <aside class="modal-dialog">
                <aside class="modal-content">
                    <aside class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </aside>
                    <aside class="modal-body">
                        <p>${msg}</p>
                    </aside>
                    <aside class="modal-footer">
                        <button type="button" class="btn btn-${classBtn}" data-dismiss="modal" id="cancelar-modal">${btn1}</button>
                        <button type="button" class="btn btn-primary" id="confirmar">${btn2}</button>
                    </aside>
                </aside>
            </aside>
        </aside>
    `
    document.querySelector('.btn-modal').insertAdjacentHTML('afterend', template);
    return new Promise((resolve)=>{
        document.querySelector('#cancelar-modal').addEventListener('click',function(){
            document.querySelector('.modal').remove();
            document.querySelector('.modal-backdrop').remove();
            document.querySelector('body').classList.remove('modal-open')
            document.querySelector('body').style.paddingRight = '0px';
            resolve(false)
        })
        document.querySelector('#confirmar').addEventListener('click',function(){
            document.querySelector('.close').click();
            document.querySelector('.modal').remove();
            document.querySelector('.modal-backdrop').remove();
            document.querySelector('body').classList.remove('modal-open')
            document.querySelector('body').style.paddingRight = '0px';
            resolve(true)
        })
    })
}

document.getElementById("code_pro").addEventListener('input',habilitarBotones)
document.getElementById("num_invent").addEventListener('input',habilitarBotones)
 function habilitarBotones() {
    let cod_propiedad = document.getElementById("code_pro");
    let numInventario = document.getElementById("num_invent");
    let BtnNuevo = document.getElementById("nuevo");
    let BtnBuscar = document.getElementById("buscar");
    let BtnEliminar = document.getElementById("eliminar");

    if (cod_propiedad.value == "" && numInventario.value != "") {
        BtnBuscar.classList.remove('disabled');
        BtnEliminar.classList.remove('disabled');
        BtnNuevo.classList.add('disabled');
    } else if(cod_propiedad.value != "" && numInventario.value == ""){
        BtnNuevo.classList.remove('disabled');
        BtnBuscar.classList.remove('disabled');
        BtnEliminar.classList.add('disabled');
    }else{
        BtnNuevo.classList.add('disabled');
        BtnBuscar.classList.add('disabled');
        BtnEliminar.classList.add('disabled');
    }
 }


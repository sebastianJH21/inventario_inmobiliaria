function form_DesGeneral() {
    let = obj_zona = ["escalera", "puerta_principal", "balcon", "techo", "paredes", "caja_breaker", "suelo"];
    obj_zona.forEach(nombre => {
        let objeto;
        if (nombre == "balcon" || nombre == "techo") {
            objeto = new objetos();
        } else {
            objeto = new obj_inventario[nombre]();
        }
        obj_inventario[nombre].id_zona = 1;
        crearPlantilla(nombre, objeto)
    })
}
form_DesGeneral();
check();
BtnCancelar();

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
                <button class="btn btn-primary"  type="button" name="guardar" id="guardar">Guardar</button>
            </aside>
        </form> 
        `
        document.querySelector('.forms').remove();
        document.querySelector('.nav-tabs').insertAdjacentHTML('afterend', template);
        switch (zona) {
            case "General":
                form_DesGeneral();
                console.log(zona);
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
                    objeto.id_zona = 2;
                    crearPlantilla(nombre, objeto)
                })
                console.log(zona);
                break;
            case "Cocina":
                obj_zona = ["iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "tubos_cortina", "barra", "meson", "lava_platos", "gabinete_superior", "gabinete", "campana_extractora", "fogon"]
                obj_zona.forEach(nombre => {
                    let objeto;
                    if (nombre == "barra") {
                        objeto = new objetos();
                    } else {
                        objeto = new obj_inventario[nombre]();
                    }
                    objeto.id_zona = 3;
                    crearPlantilla(nombre, objeto)
                })
                console.log(zona);
                break;
            case "Baño":
                obj_zona = ["puerta", "iluminacion", "tomas_electricos", "switches", "paredes_baño", "ducha", "cabina", "piso", "sanitario", "espejo", "lava_manos", "ventanas", "vidrios", "repisas", "accesorios"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    objeto = new obj_inventario[nombre]();
                    objeto.id_zona = 4;
                    crearPlantilla(nombre, objeto)
                })
                //Revisar el input de cabina de baños
                console.log(zona);
                break;
            case "Alcoba":
                obj_zona = ["puerta", "iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "tubos_cortina", "puertas_closet", "cajones_closet", "entre_paños"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    objeto = new obj_inventario[nombre]();
                    objeto.id_zona = 5;
                    crearPlantilla(nombre, objeto)
                })
                console.log(zona);
                break;
            case "Patio":
                obj_zona = ["puerta", "iluminacion", "tomas_electricos", "switches", "ventanas", "vidrios", "lavadero", "lavadora", "rejas", "piso", "tendedero", "tejas_transparentes"];
                obj_zona.forEach(nombre => {
                    let objeto;
                    if (nombre == "rejas" || nombre == "tendedero") {
                        objeto = new objetos();
                    } else {
                        objeto = new obj_inventario[nombre]();
                    }
                    objeto.id_zona = 6;
                    crearPlantilla(nombre, objeto)
                })
                console.log(zona);
                break;
        }
        check();
        BtnCancelar();
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
        if (a > 5) { // no tomar los primeros campos de la clase Objetos
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
function check() {
    document.getElementsByName("switch").forEach(function (check) {
        check.addEventListener('click', function () {
            let parent = check.parentElement.parentElement;
            if (parent.classList.contains('disabled')) {
                parent.classList.remove('disabled');
                let nombre = parent.name;
                obj_inventario[nombre].disponible = 1;
                obj_inventario[nombre].id_inventario = document.querySelector('#num_invent').value;
                // console.log(obj_inventario[nombre].id_inventario);
                // console.log(obj_inventario[nombre].disponible);
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
                let nombre = parent.name;
                obj_inventario[nombre].disponible = 0;
                obj_inventario[nombre].id_inventario = "";
                // console.log(obj_inventario[nombre].id_inventario);
                // console.log(obj_inventario[nombre].disponible);
            }
        })
    });
}
document.getElementById("code_pro").addEventListener('input', function () {
    let cod_propiedad = document.getElementById("code_pro");
    let inventario = document.getElementById("num_invent");
    let BtnNuevo = document.getElementById("nuevo");
    if (cod_propiedad.value !== "" && inventario.value == "") {
        BtnNuevo.classList.remove('disabled')
    } else {
        BtnNuevo.classList.add('disabled')
    }
    inventario.addEventListener('input', function () {
        if (inventario.value == "" && cod_propiedad.value !== "") {
            BtnNuevo.classList.remove('disabled')
        } else {
            BtnNuevo.classList.add('disabled')
        }
    })
});
document.getElementById('nuevo').addEventListener('click',function (){
    document.querySelector('.num_invent').classList.add('disabled')
    document.querySelector('.code_pro').classList.add('disabled')
    $.ajax({
        url: 'includes/functions.php',
        type: 'GET',
        success: function (response){
            let inv = JSON.parse(response);
            document.querySelector('#num_invent').value = inv;
        }
    })
})
function BtnCancelar(){
    document.getElementById('cancelar').addEventListener('click', function(){
            document.querySelector('.num_invent').classList.remove('disabled')
            document.querySelector('#num_invent').value = "";
            document.querySelector('.code_pro').classList.remove('disabled')
            window.scrollTo(0,0);
    })
}



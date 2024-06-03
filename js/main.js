
// OBJETOS DE LOS FORMULARIOS
class objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones) {
        this.disponible = disponible;
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
class escalera extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, reja, pasa_manos, chapa, llaves, ojo_magico) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.reja = [{ valor: reja }, { tipo: "1" }];
        this.pasa_manos = [{ valor: pasa_manos }, { tipo: "1" }];
        this.chapa = [{ valor: chapa }, { tipo: "1" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
        this.ojo_magico = [{ valor: ojo_magico }, { tipo: "1" }];
    }
}
class puerta_principal extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, reja, timbre, citofono, chapa, llaves, ojo_magico) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.reja = [{ valor: reja }, { tipo: "1" }];
        this.timbre = [{ valor: timbre }, { tipo: "1" }];
        this.citofono = [{ valor: citofono }, { tipo: "1" }];
        this.chapa = [{ valor: chapa }, { tipo: "1" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
        this.ojo_magico = [{ valor: ojo_magico }, { tipo: "1" }];
    }
}
class paredes extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, color) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{ valor: color }, { tipo: "1" }];
    }
}
class caja_breaker extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class espejo extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class suelo extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, tipo, zocalo) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.tipo = [{ valor: tipo }, { tipo: "3" }];
        this.zocalo = [{ valor: zocalo }, { tipo: "3" }];
    }
}
class iluminacion extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, plafones, rosetas, lamapra_led, ojo_buey) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.plafones = [{ valor: plafones }, { tipo: "2" }];
        this.rosetas = [{ valor: rosetas }, { tipo: "2" }];
        this.lamapra_led = [{ valor: lamapra_led }, { tipo: "2" }];
        this.ojo_buey = [{ valor: ojo_buey }, { tipo: "2" }];
    }
}
class ventanas extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, seguro) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.seguro = [{ valor: seguro }, { tipo: "2" }];
    }
}
class vidrios extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, sanos, averiados, faltantes) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.sanos = [{ valor: sanos }, { tipo: "2" }];
        this.averiados = [{ valor: averiados }, { tipo: "2" }];
        this.faltantes = [{ valor: faltantes }, { tipo: "2" }];
    }
}
class tubos_cortina extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, soporte_tubos, persianas) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.soporte_tubos = [{ valor: soporte_tubos }, { tipo: "2" }];
        this.persianas = [{ valor: persianas }, { tipo: "2" }];
    }
}
class tomas_electricos extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class switches extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class meson extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, material) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.material = [{ valor: material }, { tipo: "4" }];
    }
}
class lava_platos extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, rejilla, llave_agua) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.rejilla = [{ valor: rejilla }, { tipo: "1" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "5" }];
    }
}
class gabinete_superior extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, puertas, manijas, vidrios, locero) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.puertas = [{ valor: puertas }, { tipo: "2" }];
        this.manijas = [{ valor: manijas }, { tipo: "2" }];
        this.vidrios = [{ valor: vidrios }, { tipo: "2" }];
        this.locero = [{ valor: locero }, { tipo: "1" }];
    }
}
class gabinete extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, gabinete, puertas, manijas) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.gabinete = [{ valor: gabinete }, { tipo: "6" }];
        this.puertas = [{ valor: puertas }, { tipo: "2" }];
        this.manijas = [{ valor: manijas }, { tipo: "2" }];
    }
}
class campana_extractora extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, marca) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.marca = [{ valor: marca }, { tipo: "3" }];
    }
}
class fogon extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, fogon, cubierta, perillas, encendido_electrico) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.fogon = [{ valor: fogon }, { tipo: "7" }];
        this.cubierta = [{ valor: cubierta }, { tipo: "1" }];
        this.perillas = [{ valor: perillas }, { tipo: "2" }];
        this.encendido_electrico = [{ valor: encendido_electrico }, { tipo: "1" }];
    }
}
class puerta extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, chapa, llaves) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.chapa = [{ valor: chapa }, { tipo: "1" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
    }
}
class paredes_baño extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, enchapados, perforaciones) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.enchapados = [{ valor: enchapados }, { tipo: "1" }];
        this.perforaciones = [{ valor: perforaciones }, { tipo: "2" }];
    }
}
class ducha extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, ducha, llave_agua) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.ducha = [{ valor: ducha }, { tipo: "8" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "5" }];
    }
}
class cabina extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cabina, llave_agua) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cabina = [{ valor: cabina }, { tipo: "9" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "5" }];
    }
}
class piso extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, tipo, rejilla) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.tipo = [{ valor: tipo }, { tipo: "3" }];
        this.rejilla = [{ valor: rejilla }, { tipo: "1" }];
    }
}
class sanitario extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, color, mueble) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{ valor: color }, { tipo: "3" }];
        this.mueble = [{ valor: mueble }, { tipo: "1" }];
    }
}
class lava_manos extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, color, pedestal, mueble_madera, llave_agua) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.color = [{ valor: color }, { tipo: "3" }];
        this.pedestal = [{ valor: pedestal }, { tipo: "1" }];
        this.mueble_madera = [{ valor: mueble_madera }, { tipo: "5" }];
        this.llave_agua = [{ valor: llave_agua }, { tipo: "1" }];
    }
}
class repisas extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}
class accesorios extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, jabonera, gancho, cepillero, toallero, papelera, cilindro) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.jabonera = [{ valor: jabonera }, { tipo: "1" }];
        this.gancho = [{ valor: gancho }, { tipo: "1" }];
        this.cepillero = [{ valor: cepillero }, { tipo: "1" }];
        this.toallero = [{ valor: toallero }, { tipo: "1" }];
        this.papelera = [{ valor: papelera }, { tipo: "1" }];
        this.cilindro = [{ valor: cilindro }, { tipo: "1" }];
    }
}
class puertas_closet extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, jaladera, cerradura, llaves) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.jaladera = [{ valor: jaladera }, { tipo: "2" }];
        this.cerradura = [{ valor: cerradura }, { tipo: "2" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
    }
}
class cajones_closet extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, cerradura, llaves) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.cerradura = [{ valor: cerradura }, { tipo: "2" }];
        this.llaves = [{ valor: llaves }, { tipo: "2" }];
    }
}
class entre_paños extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad, cerradura) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
        this.zapatero = [{ valor: cerradura }, { tipo: "1" }];
    }
}
class lavadero extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, lavadero, tapon, canilla) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.lavadero = [{ valor: lavadero }, { tipo: "3" }];
        this.tapon = [{ valor: tapon }, { tipo: "1" }];
        this.canilla = [{ valor: canilla }, { tipo: "1" }];
    }
}
class lavadora extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, desague, canilla) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.desague = [{ valor: desague }, { tipo: "1" }];
        this.canilla = [{ valor: canilla }, { tipo: "1" }];
    }
}
class tejas_transparentes extends objetos {
    constructor(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones, cantidad) {
        super(disponible, id_inventario, id_zona, estado_inicial, estado_final, observaciones);
        this.cantidad = [{ valor: cantidad }, { tipo: "2" }];
    }
}

const obj_inventario = {
    "accesorios":accesorios, //1
    "balcon":objetos, //2 
    "barra":objetos, //3 
    "cabina":cabina, //4
    "caja_breaker":caja_breaker, //5
    "cajones_closet":cajones_closet, //6
    "campana_extractora":campana_extractora, //7 
    "ducha":ducha, //8
    "entre_paños":entre_paños, //9
    "escalera":escalera, //10
    "espejo":objetos, //11
    "fogon":fogon, //12
    "gabinete":gabinete, //13
    "gabinete_superior":gabinete_superior, //14 
    "iluminacion":iluminacion, //15
    "lavadero":lavadero, //16
    "lavadora":lavadora, //17
    "lava_manos":lava_manos, //18
    "lava_platos":lava_platos, //19
    "meson":meson, //20 
    "paredes":paredes, //21
    "paredes_baño":paredes_baño, //22 
    "piso":piso, //23
    "puerta":puerta, //24
    "puertas_closet":puertas_closet, //25
    "puerta_principal": puerta_principal, //26
    "rejas":objetos, //27
    "repisas":repisas, //28
    "sanitario":sanitario, //29
    "suelo":suelo, //30
    "switches":switches, //31
    "techo":objetos, //32
    "tejas_transparentes":tejas_transparentes, //33
    "telefono":objetos, //34
    "televisor":objetos, //35
    "tendedero":objetos, //36
    "tomas_electricos":tomas_electricos, //37
    "tubos_cortina":tubos_cortina, //38
    "ventanas":ventanas, //39
    "vidrios":vidrios, //40
}

// let nombre = "techo";
// let id_zona = 2;
// const x = new obj_inventario[nombre]();
// x.id_zona = 2;
// console.log(x);

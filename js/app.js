const cargarApp = () => {
    cargarCabecero();
}

const cargarCabecero = () => {
    //let funcionIngreso = totalIngresos();
    let presupuesto = totalIngresos() - totalEgresos();
    console.log(presupuesto);
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(porcentajeEgreso);
    console.log(totalIngresos());//los paréntesis azules son porque es una función
    console.log(totalEgresos());
}

const totalIngresos = () => {
    let totalIngresos = 0;
    let ingresos = {
        Quincena: 9000,
        Venta: 400
    };

    for (let value of Object.values(ingresos)) {
        totalIngresos = totalIngresos + value;
    }
    return totalIngresos;
}


const totalEgresos = () => {
    let totalEgresos = 0;
    let egresos = {
        Renta: 900,
        Ropa: 400
    };

    for (let value of Object.values(egresos)) {
        totalEgresos = totalEgresos + value;
    }
    return totalEgresos;
}

const formatoMoneda = () => {
    return visualViewport.toLocaleString('es-MX',{style:'currency', currency:'MXN', miniumFractionDigital:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {style:'percent', miniumFractionDigital:2});
}




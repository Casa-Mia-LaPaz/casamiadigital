// ========= MENÚ PRINCIPAL =========

const tarjetaPizzas = document.getElementById("pizzas");

if (tarjetaPizzas) {
    tarjetaPizzas.addEventListener("click", function () {
        window.location.href = "paginas/pizzas.html";
    });
}

const tarjetaPastas = document.getElementById("pastas");

if (tarjetaPastas) {
    tarjetaPastas.addEventListener("click", function () {
        alert("Próximamente");
    });
}

const tarjetaLasagna = document.getElementById("lasagna");

if (tarjetaLasagna) {
    tarjetaLasagna.addEventListener("click", function () {
        alert("Próximamente");
    });
}

const tarjetaBebidas = document.getElementById("bebidas");

if (tarjetaBebidas) {
    tarjetaBebidas.addEventListener("click", function () {
        alert("Próximamente");
    });
}

const tarjetaPromociones = document.getElementById("promociones");

if (tarjetaPromociones) {
    tarjetaPromociones.addEventListener("click", function () {
        alert("Próximamente");
    });
}

// ========= PÁGINA DE PIZZAS =========

const lista = document.getElementById("listaPizzas");

if (lista && typeof pizzas !== "undefined") {

    pizzas.forEach(function (pizza) {

        lista.innerHTML += `
            <div class="tarjeta">
                <img src="${pizza.imagen}" alt="${pizza.nombre}">
                <div class="titulo">${pizza.nombre}</div>
            </div>
        `;

    });

}
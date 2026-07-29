// Página principal
const tarjetaPizzas = document.getElementById("pizzas");

if (tarjetaPizzas) {
    tarjetaPizzas.addEventListener("click", function () {
        window.location.href = "paginas/pizzas.html";
    });
}

// Página de pizzas
const lista = document.getElementById("listaPizzas");

if (lista && typeof pizzas !== "undefined") {

    pizzas.forEach(function (pizza) {

        lista.innerHTML += `
            <div class="tarjeta">

                <img src="${pizza.imagen}" alt="${pizza.nombre}">

                <div class="titulo">
                    ${pizza.nombre}
                </div>

            </div>
        `;

    });

}
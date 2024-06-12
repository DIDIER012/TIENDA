
const fijarProductos = () => {
    const contenedor = document.querySelector("#contenedor");

    productos.forEach(producto => { 
        const div = document.createElement('div');
        div.className = 'card-grid';

        div.innerHTML = `
            <div class="card-image">
            <div class="card" style="width: 20rem;">
        <img src="${producto.img}" class="card-img-top" alt="img 1">
        <div class="card-body text-center">
            <p class="card-text ">${producto.desc}</p>
            <p class="card-text ">$ ${producto.precio}</p>
            <a href="#" class="btn btn-primary agregar" id = "agregar">AGREGAR AL CARRITO</a>
        </div>
        </div>
        </div>`
        
        contenedor.appendChild(div);
    });
};


fijarProductos();


// BUSCADOR DE PRODUCTOS

function buscarProducto(event) {
    event.preventDefault();

    const busquedaInput = document.getElementById("busquedaInput");
    const valorBusqueda = busquedaInput.value.toLowerCase();

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(valorBusqueda)
    );

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById("resultadosBusqueda");
    resultadosDiv.innerHTML = "";

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = "No se encontraron resultados.";
    } else {
        resultados.forEach(producto => {
            const card = `
                <div class="card" style="width: 20rem;">
                    <img src="${producto.img}" class="card-img-top" alt="Producto">
                    <div class="card-body text-center">
                        <p class="card-text">${producto.desc}</p>
                        <p class="card-text">$ ${producto.precio}</p>
                        <a href="#" class="btn btn-primary agregar" id = "agregar">AGREGAR AL CARRITO</a>
                    </div>
                </div>`;
            const cardDiv = document.createElement("div");
            cardDiv.innerHTML = card;
            resultadosDiv.appendChild(cardDiv);
        });
    };
};

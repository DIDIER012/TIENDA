
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
            <a href="#" class="btn btn-primary">AGREGAR AL CARRITO</a>
        </div>
        </div>
        </div>`
        
        contenedor.appendChild(div);
    });
};


fijarProductos();

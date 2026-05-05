const productos = [
  { id: 1, nombre: "Teclado", precio: 30, categoria: "entrada", img: "img/teclado.jpg" },
  { id: 2, nombre: "Ratón", precio: 20, categoria: "entrada", img: "img/raton.jpg" },
  { id: 3, nombre: "Monitor 24\"", precio: 200, categoria: "monitores", img: "img/monitor.jpg" },
  { id: 4, nombre: "Portátil", precio: 800, categoria: "computacion", img: "img/portatil.jpg" },
  { id: 5, nombre: "Auriculares", precio: 50, categoria: "audio", img: "img/auriculares.jpg" },
  { id: 6, nombre: "Mando PS4", precio: 70, categoria: "gaming", img: "img/mando.jpg" }
];

// carrito en memoria
let carrito = [];

// mostrar productos
const contenedorProductos = document.getElementById("productos");

function mostrarProductos(lista) {
  contenedorProductos.innerHTML = "";

  lista.forEach(prod => {
    const div = document.createElement("div");

    div.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}€</p>
        <p>${prod.categoria}</p>
        <button onclick="agregarCarrito(${prod.id})">Añadir al carrito</button>
    `;

    contenedorProductos.appendChild(div);
  });
}

// carrito
function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito");
  const total = document.getElementById("total");

  lista.innerHTML = "";

  let suma = 0;

  carrito.forEach((prod, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${prod.nombre} - ${prod.precio}€
      <button onclick="eliminarProducto(${index})">X</button>
    `;

    lista.appendChild(li);
    suma += prod.precio;
  });

  total.textContent = suma;
}

// eliminar producto
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// filtro
document.getElementById("filtro").addEventListener("change", (e) => {
    const valor = e.target.value;

    if(valor === "todos") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === valor);
        mostrarProductos(filtrados);
    }
});

// carrito lateral
const carritoLateral = document.getElementById("carrito-lateral");
const btnCarrito = document.getElementById("btn-carrito");
const cerrarCarrito = document.getElementById("cerrar-carrito");

btnCarrito.addEventListener("click", () => {
    carritoLateral.classList.add("activo");
});

cerrarCarrito.addEventListener("click", () => {
    carritoLateral.classList.remove("activo");
});

// formulario
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

    const errores = document.getElementById("errores");
    errores.textContent = "";

    // validación vacíos
    if (!nombre || !email || !password || !confirmar) {
        errores.textContent = "Todos los campos son obligatorios";
        return;
    }

    // email válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        errores.textContent = "Email no válido";
        return;
    }

    // contraseñas iguales
    if (password !== confirmar) {
        errores.textContent = "Las contraseñas no coinciden";
        return;
    }

    errores.style.color = "black";
    errores.textContent = "Compra realizada correctamente ✅";

    // limpiar carrito
    carrito = [];
    actualizarCarrito();
    });

// inicializar
mostrarProductos(productos);



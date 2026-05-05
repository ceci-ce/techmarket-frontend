## 11. ¿Por qué es necesario validar los datos también en el servidor?

Aunque los datos se validen en el cliente mediante JavaScript, esta validación puede ser modificada o incluso desactivada por el usuario. Por ello, no se puede considerar una medida de seguridad definitiva.

La validación en el servidor es necesaria para garantizar que los datos recibidos son correctos, completos y seguros, evitando errores, información inválida o posibles ataques maliciosos. De esta forma, el servidor actúa como última capa de control antes de procesar o almacenar la información.

---

## 12. ¿Qué ocurriría si los productos estuvieran escritos directamente en HTML en lugar de generarse con JavaScript?

Si los productos estuvieran escritos directamente en HTML, la aplicación sería mucho menos dinámica y escalable. Cada producto tendría que añadirse o modificarse manualmente en el código HTML, lo que aumentaría el tiempo de mantenimiento y la posibilidad de cometer errores.

Además, funcionalidades como el filtrado por categoría, la actualización automática de productos o la reutilización de datos serían más difíciles de implementar. Generarlos con JavaScript permite trabajar con los datos de forma más flexible, automatizada y eficiente.

---

## 13. ¿Qué ventaja tiene almacenar los datos del carrito en memoria (array) frente a no hacerlo?

Almacenar los productos del carrito en un array permite mantener el estado de la compra mientras el usuario interactúa con la aplicación. Gracias a ello, es posible añadir productos, eliminarlos, recorrerlos, mostrar su contenido y calcular el precio total de forma dinámica.

Si no se almacenaran en memoria, la aplicación no podría saber qué productos ha seleccionado el usuario en cada momento, dificultando la gestión del carrito y limitando la interacción dinámica de la página.
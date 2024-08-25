import express from 'express'; 
// Importa el framework Express para crear el enrutador.

const router = express.Router(); 
// Crea una instancia del enrutador de Express.

import { consultarProducto, eliminarProducto } from '../controllers/productoControllers.js'; 
// Importa las funciones del controlador para manejar las rutas.

router.get('/consultar/:idproducto', consultarProducto); 
// Define una ruta GET para consultar un producto por su ID, llamando a `consultarProducto`.

router.delete('/eliminar/:idproducto', eliminarProducto); 
// Define una ruta DELETE para eliminar un producto por su ID, llamando a `eliminarProducto`.

export default router; 
// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
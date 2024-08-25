import productoModels from '../models/productoModels.js'; 
// Importa el modelo de datos del producto para interactuar con la base de datos.

const consultarProducto = async (req, res) => { 
  // Función asíncrona que consulta un producto basado en el ID.

  const { idproducto } = req.params; 
  // Extrae el ID del producto de los parámetros de la solicitud.

  try { 
    // Bloque `try` para manejar errores durante la consulta.

    const producto = await productoModels.findOne({ idproducto }); 
    // Busca un producto en la base de datos que coincida con el ID proporcionado.

    if (!producto) { 
      // Si no se encuentra el producto, retorna un mensaje de error.
      return res.status(400).json({ msg: `El producto con el Id: ${idproducto} no existe` });
    }

    res.json(producto); 
    // Si se encuentra el producto, lo devuelve como respuesta en formato JSON.
  } catch (error) { 
    // Si ocurre un error en la consulta, captura el error.
    res.status(500).json({ msg: 'Error en la solicitud: contactar al administrador' });
    // Envía un mensaje de error al cliente.
    console.log(`Error ${error.status || 500}: ${error.message}`); 
    // Registra el error en la consola.
  }
};

const eliminarProducto = async (req, res) => { 
  // Función asíncrona que elimina un producto basado en el ID.

  const { idproducto } = req.params; 
  // Extrae el ID del producto de los parámetros de la solicitud.

  try { 
    // Bloque `try` para manejar errores durante la eliminación.

    const producto = await productoModels.findOne({ idproducto }); 
    // Busca un producto en la base de datos que coincida con el ID proporcionado.

    const nombre = producto.nombre; 
    // Extrae el nombre del producto encontrado.

    await producto.deleteOne(); 
    // Elimina el producto de la base de datos.

    res.json({ 
      // Devuelve un mensaje confirmando que el producto fue eliminado.
      msg: `El producto ${nombre} con el Id: ${idproducto} ha sido eliminado de manera exitosa`
    });
  } catch (error) { 
    // Si ocurre un error durante la eliminación, captura el error.
    res.status(500).json({ msg: 'Error en la solicitud: contactar al administrador' });
    // Envía un mensaje de error al cliente.
    console.log(`Error ${error.status || 500}: ${error.message}`); 
    // Registra el error en la consola.
  };
};

export { consultarProducto, eliminarProducto }; 
// Exporta las funciones para que puedan ser utilizadas en las rutas.
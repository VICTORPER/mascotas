const producto=require("../models/productos")

exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "En esta ruta ud va a poder ver todos los producto1"
    })
}

exports.getProductById= async (req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"No encontramos el producto"
        })
    }
    res.status(200).json({
        success:true,
        mensaje:"Aqui debajo encuentras la información de tus productos1",
        product
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}
//Update un producto
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}  
//eliminar
  exports.deleteProduct= async(req,res,next)=>{
    let product= await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"No encontramos el producto"
        })
    }  
   await product.remove
   res.status(200).json({
    sucesss:true,
    message:"Producto eleiminado correctamente"
   })
}

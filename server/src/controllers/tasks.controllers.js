export const handleCreateTask = async(req, res)=>{
    res.json("Aqui podremos crear una tarea");
}

export const handleDeleteTaskByID = (req, res)=>{
    res.json("Aqui podremos eliminar una tara por su id");
}
export const handleGetAllTaskByLogedUser = async(req,res)=>{
    res.json("Aqui se verán las tareas del usuario ingresado")
}

export const handleGetTaskById = async(req,res)=>{
    res.json("Aqui se verá unicamente la tarea por id");
}

export const handleUpdateTaskById = (req, res)=>{
    res.json("Aqui podremos actualizar una tarea por su id");
}

module.exports = app => {
    const tasks = require("../controller/taskController");
  
    var router = require("express").Router();
  
    // Crear
    router.post("/", tasks.create);
  
    // Ver todas
    router.get("/", tasks.findAll);
    
    // Ver una
    router.get("/:id", tasks.findOne);
  
    // Elimina una
    router.delete("/:id", tasks.delete);
  
    app.use('/api/tasks', router);
  };
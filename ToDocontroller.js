const ToDomodel= require("../models/ToDoModel");


module.exports.getToDos=async(req,res)=>{
const toDos=await ToDoModel.find();
res.send(toDos);

};

module.exports.saveToDo=(req,res)=>{
    const {toDo}=req.body;

    ToDomodel.create({toDo})
    .then((data)=>{
        console.log("Saved Sucessfully...");

        res.status(201).send(data);

    })
    .catch((err)=>console.log(err));
    };

    module.exports.updateToDo=(req,res)=>{

        const {id}=req.params
        const {toDo}=req.body;
    
        ToDomodel.findByIdAndUpdate(id,{toDo}) .then(()=>{
            console.log("Saved Sucessfully...");

            res.send("updated succesfully...");
            
        })
        .catch((err)=>{
            console.log(err);
            res.send({error: err,msg: "something went wrong!"});
        });
        };

        module.exports.deleteToDo=(req,res)=>{

            const {id}=req.params
            const {toDo}=req.body;
        
            ToDomodel.findByIdAndDelete(id) 
            .then(()=>{
                console.log("Saved Sucessfully...");
    
                res.send("deleted succesfully...");
                
            })
            .catch((err)=> {
                console.log(err)

                res.send({error: err,msg: "something went wrong!"});
               
            });
            };
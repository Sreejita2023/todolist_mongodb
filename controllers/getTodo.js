const Todo=require('../models/Todo')

exports.getTodo=async(req,res)=>{
      try{
        const response=await Todo.find({})
        res.status(200).json({
            success:true,
            date:response,
            message:'entire data fetched'
        })
      }
      catch(err){
         console.error(err)
         console.log(err)
         res.status(500)
         .json({
            success:false,
            data:"internal server error",
            message:err.message,
         })
      }
}
exports.getTodoById=async(req,res)=>{
      try{
        const id=req.params.id
        const todo=await Todo.findById({_id:id})
        if(!todo){
            res.status(400).json({
                success:false,
                message:'no data is found with given id'
            })
        }
        res.status(200).json({
            success:true,
            date:todo,
            message:`Todo with ${id} is successfully fetched`
        })
      }
      catch(err){
         console.error(err)
         console.log(err)
         res.status(500)
         .json({
            success:false,
            data:"internal server error",
            message:err.message,
         })
      }
}
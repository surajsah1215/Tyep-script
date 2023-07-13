import {Router} from 'express'
import { Todo } from '../models/todo'
const router = Router()

const todo:Todo[] = []
router.get('/',(req,res,next)=>{
    res.status(200).json({todo:todo})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo = {
        id:new Date().toString(),
        text: req.body.text
    }
    todo.push(newTodo)
    res.status(201).json({message:'Added Todo',tod:newTodo, todo:todo})
})

router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id
    if(todo){
    // todo[id].remove()
    const filter = todo.filter((item)=>item.id !==id)
    res.status(200).json({message:'Deleted todo',todo:filter})
    }
    else{
        res.status(404).json({message:'item not found'})
    }    
})

router.put('/edit/:id',(req,res,)=>{
    const id = req.params.id
    const todoIndex = todo.findIndex((index)=> index.id = id)
    if(todoIndex >=0 ){
        todo[todoIndex] = {id:todo[todoIndex].id,text:req.body.text}
     return res.status(200).json({message:'Updated todo',todo:todo})
    }
   
   res.status(404).json({message:'item not found'})
})

export default router
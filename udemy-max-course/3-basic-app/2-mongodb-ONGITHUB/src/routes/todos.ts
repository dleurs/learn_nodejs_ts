import { Router } from 'express';
import { Todo, showTodos } from '../models/todo'

export const todoRoutes = Router();

todoRoutes.get('/', async (_, res, __) =>
{
    console.log(`Request received at "/"`);
    let todos: Array<Todo> = await Todo.getAll()
    //console.log(todos[0].toString());
    res.status(200).send(`<h1>All your todos</h1>` + showTodos(todos) + `<h1>Add a todo</h1> <form action="/todo" method="POST"><input type="text" name="title"><button type="submit">Add Todo</button></form>`);
})

todoRoutes.post('/todo', async (req, res, __) =>
{
    const newTodo: Todo = new Todo({ title: req.body.title });
    await newTodo.save();
    return res.status(300).redirect('/');
})

todoRoutes.post('/todo/checking/:check/:todoId', async (req, res, __) =>
{
    const todoId: string = req.params.todoId;
    const check: string = req.params.check; 
    let todo: Todo = await Todo.get(todoId);
    todo.done = (check == "true");
    await todo.save();
    return res.status(300).redirect('/');
})

todoRoutes.post('/todo/delete/:todoId', async (req, res, __) =>
{
    const todoId: string = req.params.todoId;
    await Todo.delete(todoId);
    return res.status(300).redirect('/');
})

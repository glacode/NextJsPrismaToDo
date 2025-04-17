import { prisma } from "@/db"
import Link from "next/link"
import { ToDo } from '../generated/prisma';
import TodoItem from "@/components/TodoItem";
import { revalidatePath } from "next/cache";

function getTodos() {
  return prisma.toDo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.toDo.update({
    where: { id },
    data: { complete }
  });
}

async function deleteTodo(id: string) {
  'use server'
  await prisma.toDo.delete({
    where: { id }
  });
  revalidatePath('/');
}

async function Home() {
  // await prisma.toDo.create({data: {title: "Sample Todo",complete: false}});
  const todos: ToDo[] = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new">New</Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </>
  )
}

export default Home
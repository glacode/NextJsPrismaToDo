import { prisma } from '@/db';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

async function createTodo(formData: FormData) {
  'use server'
  const title = formData.get('title') as string;
  if (!title) {
    throw new Error('Title is required');
  }
  await prisma.toDo.create({
    data: {
      title,
      complete: false,
    },
  });
  return redirect('/');
}

const newPage = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className='flex flex-col gap-2'>
        <input type="text" name="title" id="title" placeholder="Enter todo title"
          className='border border-slate-300 bg-transparent px-2 py-1 rounded outline-none focus-within:border-slate-100' />
        <div className='flex justify-end gap-1 pt-1'>
          <Link href='..' className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
          <button type='submit'
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
        </div>
      </form>
    </>
  )
}

export default newPage
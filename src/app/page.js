'use client'
import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Page = () => {
 const [title, setTitle] = useState("Hello");
 const [desc, setDesc] = useState("How are you?");
 const [mainTask, setMainTask] = useState([]);

 const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setDesc("");
    setTitle("");
 };

  // Function to handle task deletion
  const deleteTask = (index) => {
    const newTasks = mainTask.filter((task, i) => i !== index);
    setMainTask(newTasks);
 };

 let renderTask = <h2>No Task Available</h2>;

 if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className='flex justify-between items-center'>
        <div className='flex justify-center items-center w-full'>
          <div className='flex justify-between text-center mb-5 w-full'>
            <h5 className='text-xl font-bold'>{t.title}</h5>
            <h6 className='text-gray-500 font-medium text-xl'>{t.desc}</h6>
          </div>
        </div>
        <button 
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => deleteTask(i)} // Call deleteTask with the current index
        >
          Delete
        </button>
      </li>
    ));
 }

 return (
    <>
    <Header></Header>
      <div className='text-center'>
        <h1 className='text-center text-zinc-600 p-5 font-bold text-2xl'>Om's ToDo List</h1>
        <form className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
          <input type="text" className='text-1xl border-zinc-700 h-14 rounded-xl border-2 mb-2 p-2' 
          placeholder='Enter the title here...' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" className='text-1xl border-zinc-700 h-14 rounded-xl border-2 mb-2 p-2' 
          placeholder='Enter the description here...' 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)}/> {/* Two-way binding for description */}
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 h-10 rounded mt-2'>
            +
          </button>
        </form>
        <hr />
        <div className='mt-4 p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
   
 );
};

export default Page;
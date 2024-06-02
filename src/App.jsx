import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-2 w-full h-screen bg-slate-200'>
      
        <div className='flex justify-center items-center' >
          
          <div className='flex flex-col'>
          <h1 className='text-7xl font-bold text-sky-600'>facebook</h1>
         
          <p className='font-medium'>Facebook helps you connect and share <br /> with the people in your life.</p>
         
          </div>
          
        </div>
        
        <div className='flex flex-col justify-center items-center'>
          
        <div className="w-80 h-96 flex flex-col justify-center items-center gap-2 h-56 bg-white rounded-xl drop-shadow-2xl">
          <input className='w-full bg-white h-10 p-2 border-spacing-2 border-solid border-2 border-sky-500 ' type="text" placeholder='Your User Name' />
          <input className='w-full bg-white h-10 p-2 border-gray-100 border-solid border-2 border-sky-500 ' type="text" placeholder='Your email address or phone no' />
          <input className='w-full bg-white h-10 p-2 border-solid border-2 border-sky-500 'type="password" placeholder='password' />
          <button className='px-3 py-1 rounded-md bg-sky-600 btn:btn-primary w-60' >Login</button>
          <h2>Forgotten Password?</h2>
          <button className='px-3 py-1 rounded-md bg-green-600 btn:btn-primary w-60' >Create New Account</button>
        </div>
        <p className='p-7'><span className='font-semibold'>Create a Page</span> for a celebrity, brand or business..</p>
        </div>
    </div>
  )
}

export default App

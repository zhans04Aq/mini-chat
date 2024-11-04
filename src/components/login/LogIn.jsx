import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const LogIn = () => {

    const[avatar, setAvatar] = useState({
        file: null,
        url:""
    })

    const handleAvatar = e =>{

        if(e.target.files[0]){  
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }

    }

    const handleLogin = (e) =>{
        e.preventDefault();
        
    }

return (
    <div className='login w-full h-full flex items-center gap-24'>
        <div className="item flex-1 flex flex-col items-center gap-5">
            <h1>Welcome back</h1>
            <form 
                action="" 
                autoComplete='off' 
                className='gap-5 flex flex-col items-center justify-center'
                onSubmit={handleLogin}
            >
                <input 
                    type="text" 
                    placeholder='Enter your email' 
                    name="email" 
                    className='bg-blue-950 px-4 py-2 text-white outline-none border-none rounded-md'
                />
                <input 
                    type="password" 
                    placeholder='Enter your password' 
                    name="password"
                    className='bg-blue-950 px-4 py-2 text-white outline-none border-none rounded-md'
                />
                <button type='submit' className='w-full px-4 py-2 rounded-md font-bold border-none bg-blue-500 color-white'>Sign in</button>
            </form>
        </div>
        <div className="separator h-4/5 w-1 bg-[#dddddd35]">

        </div>
        <div className="item flex-1 flex flex-col items-center gap-5">
            <h1>Create an Account</h1>
            <form 
                action="" 
                className='flex flex-col items-center justify-center gap-5'
                autoComplete='off'    
            >
                <label 
                    htmlFor="file"
                    className='w-full flex items-center justify-between cursor-pointer underline'
                >
                    <img 
                        src={avatar.url || "/avatar.png"} 
                        alt="" 
                        className='w-12 h-12 rounded-lg opacity-60'
                    />
                    Upload an image</label>
                <input 
                    type="file" 
                    name="email" 
                    id='file' 
                    className='hidden' 
                    onChange={handleAvatar}
                />
                <input 
                    type="text" 
                    placeholder='Enter your username' 
                    name="username" 
                    className='bg-blue-950 px-4 py-2 text-white outline-none border-none rounded-md'
                />
                <input 
                    type="text" 
                    placeholder='Enter your email' 
                    name="email" 
                    className='bg-blue-950 px-4 py-2 text-white outline-none border-none rounded-md'
                />
                <input 
                    type="password" 
                    placeholder='Enter your password' 
                    name="password"
                    className='bg-blue-950 px-4 py-2 text-white outline-none border-none rounded-md'
                />
                <button className='w-full px-4 py-2 rounded-md font-bold border-none bg-blue-500 color-white'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

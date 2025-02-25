import React, { useRef, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SendHorizontal } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'
import { useUser } from '@clerk/clerk-react'


const Chatbot = () => {
    const [chats, setChats] = useState([{user:"Admin",message:"Hello, How can I help you?"}])
    const [message, setMessage] = useState('')
    const scroll = useRef(null)
   const {user} =  useUser();
    const handleSubmit = (e) => {
        e.preventDefault()
        if(message==="")return;
        setChats([...chats, {"user":"You","message":message}])
        setMessage('')
    }
    // console.log(user.fullName)
    return (
        <div className=' flex flex-col justify-center items-center w-full h-screen z-12 gap-2'>
            <div className='w-full text-center text-3xl bg-slate-600/20 px-10 py-4 -mt-[150px] '>FreeLancerName</div>
            <ScrollArea  className='w-[100%] h-[50%] px-12 mt-20' > 
                <div ref={scroll}>
                    {chats.map((chat)=>{
                        return <div key={Math.random()*1000} className='flex-col text-black justify-center items-center   m-2 rounded-md'><span className='text-[12px] text-teal-100 '>{chat.user}</span> <p className='text-white bg-slate-800/0.5 py-1 pl-2 text-2xl rounded-sm bg-slate-700/10'>{chat.message}</p></div>
                    })}
                </div>
                 </ScrollArea>

            <div className="flex w-full px-12 py-6 items-center space-x-2  bottom-12">
                <Input className='w-full' type="text" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button onClick={handleSubmit} variant="secondary"><SendHorizontal />Send</Button>
            </div>
        </div>
    )
}

export default Chatbot
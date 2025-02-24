import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { SendHorizontal } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'


const Chatbot = () => {
    const [chats, setChats] = useState([])
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setChats([...chats, message])
        setMessage('')
    }
    return (
        <div className=' flex flex-col justify-center items-center w-full h-screen z-12 gap-2'>
            <ScrollArea className='w-[80%] h-[50%] ' dir="reverse"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus fugiat voluptatem vero impedit sed quod voluptate rerum! Perspiciatis molestiae assumenda facilis eos quod debitis, repellendus incidunt illo sit eligendi officiis delectus vero recusandae veniam natus impedit enim nostrum consequatur doloremque fugit iusto dignissimos consequuntur? Reprehenderit enim omnis nam fuga ab? Ut velit aliquid accusantium delectus quis corrupti optio sunt vel nostrum quidem ipsam necessitatibus quo eveniet debitis odit nisi a similique id quam, enim quisquam maiores placeat? Nisi, unde doloremque natus eaque veniam qui, assumenda nemo sunt odit, nostrum atque. Libero expedita ipsam praesentium dolor, molestias repellat repudiandae quis aperiam. </ScrollArea>

            <div className="flex w-full px-12 py-6 items-center space-x-2 sticky bottom-12">
                <Input className='w-full' type="text" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button onClick={handleSubmit} variant="secondary"><SendHorizontal />Send</Button>
            </div>
        </div>
    )
}

export default Chatbot
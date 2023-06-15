import { PlusIcon } from '@heroicons/react/24/solid'
import ChatRow from './ChatRow'

function SideBar() {
    let chats = {
        docs: [
            { id: 2343234 },
            { id: 4564566 },
            { id: 9034578 },
        ]
    }
    return (
        <div className="flex flex-col p-2 h-screen">
            <div className="flex-1">
                <div className="border-gray-700 border chatRow hover:bg-gray-700/50">
                    <PlusIcon className="h-4 w-4" />
                    <p className="hidden sm:inline">New Chat</p>
                </div>
                <div className="flex flex-col space-y-2 my-2 ">
                    {/* Map through the ChatRows */}
                    {chats?.docs.map((chat) => (
                        <ChatRow key={chat.id} id={`${chat.id}`} />
                    ))}
                </div>
            </div>



            <img
                src='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg'
                alt="Profile pic"
                className="h-12 w-12 rounded-full mx-auto cursor-pointer mb-2 hover:opacity-50"
            />
        </div>
    )
}

export default SideBar
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import Message from './Message'

type Props = {
    chatId: string
}

function Chat({ chatId }: Props) {

    var arr: any[] = []
    for (let i = 0; i < 20; i += 2) {
        arr.push(
            {
                id: i, data: function () {
                    return ({
                        user: {
                            name: 'hinhnx',
                            avatar: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg'
                        },
                        text: chatId + ' Đây là câu hỏi'
                    })
                }
            }
        )

        arr.push(
            {
                id: i + 1, data: function () {
                    return ({
                        user: {
                            name: 'ChatGPT',
                            avatar: 'https://cdn.pixabay.com/photo/2016/12/13/21/20/alien-1905155_640.png'
                        },
                        text: chatId + ' Đây là câu trả lời'
                    })
                }
            }
        )
    }

    let messages = {
        docs: arr
    }

    return (
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {!messages && (
                <>
                    <p className="mt-10 text-center text-white">
                        Type a prompt in below to get started!
                    </p>
                    <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
                </>
            )}

            {messages?.docs.map((message) => (
                <Message key={message.id} message={message.data()} />
            ))}
        </div>)
}

export default Chat

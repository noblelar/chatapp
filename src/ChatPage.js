// MultiChatWindow
import {  MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '13d16f36-eed0-4b62-bbb5-ee1e39ef6722',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }} className="">
            <MultiChatSocket {...chatProps} />
            <PrettyChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
};

export default ChatsPage;
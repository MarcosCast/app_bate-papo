import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
    return(
        <form className="message-form">
            <input
               className="message-input"
               placeholder="Envie sua mensagem"
               />
        </form>
    )

}

export default MessageForm;
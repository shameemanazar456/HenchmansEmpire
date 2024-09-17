import React from 'react'
import ChatBot from "react-chatbotify";

function ChatBoat() {   
      const flow = {
        start: {
          message: "Hello, Welcome to Henchman's Empire. I am here to Help You. \nPlease Type Your Name",
          path: "1"
        },
        
        1: {
          message: (params) => `Hi ${params.userInput}! Please Fill The Grievance Form by clicking 'Grievance Form' From the Top Right Corner. I will Solve It`,
          chatDisabled: true

        },
        }
      
    return (
    <div >
      <ChatBot   flow={flow}  />
    </div>
  )
}

export default ChatBoat

import React from 'react';
import './style.css';
import io from 'socket.io-client';

export default function Chatbar() {
    const socket = io.connect("http://localhost:5000");
    socket.on('msg-recieve',(msg)=>{
        console.log('msg send');
        let msgdiv = document.createElement('div');
        msgdiv.classList.add('msg');
        msgdiv.innerText= msg;
        let msgs = document.querySelector('.msgs');
        msgs.append(msgdiv);
        console.log("set");
    })
    function sendmsg(){
        let msg = document.getElementById("msgtxt").value;
        document.getElementById("msgtxt").value = "";
        console.log(msg);
        //emit
        socket.emit('msg-sent',msg);
        //append
        let msgdiv = document.createElement('div');
        msgdiv.classList.add('msg');
        msgdiv.innerHTML= msg;
        let msgs = document.querySelector('.msgs');
        msgs.append(msgdiv);
    }
    return (
        <div>
            <div className="chatbox">
                    <div className="msgs">
                        
                    </div>
                    <div className="msginp">
                        <input type="text" name="msgtxt" id="msgtxt" />
                        <button type="submit" onClick={sendmsg}>send</button>
                    </div>
                </div>
        </div>
    )
}

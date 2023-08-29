'use client'

import { io } from "socket.io-client";
import { useEffect } from "react";

export default function Connector() {

    useEffect(()=>{

        console.log("Is this running");
        //THis will connect the app
        const socket = io("http://127.0.0.1:6500");

        socket.on("connect", ()=>{
            console.log("connected");
            socket.emit("my event", {"data": "IDK"});
        });

        //This will happen when the server emits something
        socket.on("message", (data)=>{
            console.log(data);
        });
    
      }, []);

      return(
        <div></div>
      );
}
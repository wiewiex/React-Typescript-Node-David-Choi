import React, { Component } from 'react'

interface GreetingsProps {
    message: string;
}

export default function Greetings(props: GreetingsProps) {
    console.log("Render komponentu Greetings");
    
    return (
      <div>{props.message}</div>
    )
}

import ReactDOM from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import '@/styles/main.scss'
import React from 'react'

const container = document.getElementById('app')!
const root = ReactDOM.createRoot(container)

console.log(
    'test'
);

root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
)

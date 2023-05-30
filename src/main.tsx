import ReactDOM from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import '@/styles/main.scss'
import React from 'react'

const container = document.getElementById('app')

if (container) {
    const root = ReactDOM.createRoot(container)

    root.render(
        <React.StrictMode>
            <Routes />
        </React.StrictMode>
    )
}

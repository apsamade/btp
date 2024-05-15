'use client'

import '@styles/global.css'
import Nav from '@components/Nav'


const LayoutRoot = ({ children }) => {
    return (
        <html lang="fr">
            <head>
                <meta name="author" content="Abdel-Samade Bouderga" />
                <meta name="robots" content="index, follow" />
                <title>BTP</title>
                <meta name="description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />
                <link rel="shortcut icon" href="/logo/logo.png" type="image/x-icon" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta property="og:title" content="BTP" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="/logo/logo.png" />
                <meta property="og:url" content="https://localhost" />
            </head>

            <body>
                <Nav />
                {children}
            </body>

        </html>
    )
}

export default LayoutRoot
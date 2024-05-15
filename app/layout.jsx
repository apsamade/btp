'use client'

import '@styles/global.css'

const LayoutRoot = ({ children }) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export default LayoutRoot
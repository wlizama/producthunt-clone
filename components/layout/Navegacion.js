import React from 'react'
import Link from 'next/link'

const Navegacion = () => {
    return (
        <div>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/">Populares</Link>
                <Link href="/">Nuevo producto</Link>
            </nav>
        </div>
    )
}

export default Navegacion

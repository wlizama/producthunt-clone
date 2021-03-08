import Link from 'next/link'
import React from 'react'
import Buscar from '../../ui/Buscar'
import Navegacion from './Navegacion'

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <div>
                        <p>P</p>
                        <Buscar />
                        <Navegacion />
                    </div>
                    <div>
                        <p>Hola: User007</p>
                        <button type="button">Cerrar sesión</button>

                        <Link href="/">Login</Link>
                        <Link href="/">Crear cuenta</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header

import React from 'react'
import Header from './Header'
import { Global, css  } from '@emotion/core'

const Layout = props => {
    return (
        <>
            <Global
                styles={css`
                    :root {
                        --gris: #3d3d3d;
                        --gris2: #6f6f6f;
                        --naranja: #DA552F;
                    }
                `}
            />
            <Header />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout

import { useSelector } from 'react-redux'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// routing
import Routes from 'routes'

// defaultTheme
import themes from 'themes'

// project imports
import NavigationScroll from 'layout/NavigationScroll'

import Loadable from 'ui-component/loading/Loadable'
import { lazy, useEffect } from 'react'
const Canvas = Loadable(lazy(() => import('views/canvas')))
// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization)

    useEffect(() => {
      localStorage.setItem('temp', 'tempValue')

      if(localStorage.getItem('temp2')){
        console.log('temp2 found', localStorage.getItem('temp2'))
      }
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Canvas />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App

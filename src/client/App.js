import React from 'react'
import loadable from '@loadable/component'

const Vanilla = loadable(_ => import('./Vanilla'))
const Material = loadable(_ => import('./Material'))
const Chakra = loadable(_ => import('./Chakra'))

const App1 = () => <Vanilla />
const App2 = () => <Material />
const App3 = () => <Chakra />

export default App3

import routes from './router'
import YDAppHeader from '@/components/app-header'
import YDAppFooter from '@/components/app-footer'
import { HashRouter, useRoutes } from "react-router-dom"

// 渲染路由
function WrapRoute () {
  const element = useRoutes(routes)
  return element
}

function App () {

  return (


    <HashRouter>
      <WrapRoute />
      <YDAppHeader />
      <YDAppFooter />
    </HashRouter>

  )
}

export default App

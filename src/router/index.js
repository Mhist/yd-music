import YDDiscover from '@/pages/discover'
import YDFriend from '@/pages/friend'
import YDMine from '@/pages/mine'
import { Navigate } from 'react-router-dom'
//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />,

  },
  {
    path: "/discover",
    element: <YDDiscover />,

  },
  {
    path: "/mine",
    element: <YDMine />,
  },
  {
    path: "/friend",
    element: <YDFriend />,
  }
]

//将路由表数组导出
export default routes

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 项目规范

- 文件夹：文件夹名称统一小写，多个单词以连接符(-)连接
- JavaScript 变量名称采用小驼峰标识、常量全部使用大写字母，组件采用大驼峰
- css 采用普通 css 和 styled-component 结合来编写
- 整个项目不再使用 class 组件，统一使用函数式组件，全面拥抱 hooks
- 所有的函数式组件，为了避免不必要的渲染，全部使用 memo 进行包裹
- 所有内部的状态，使用 useState useReaducer;业务数据全部放在 redux 中管理
- 函数组件内部按照如下顺序编写代码：
  (1),组件内部 state 管理
  (2),redux 的 hooks 代码
  (3),其他组件的 hooks 代码
  (4),其他逻辑代码
  (5),返回的 jsx 代码

- redux 代码规范如下：
  (1),每个模块有自己独立的 reducer，通过 combineReducer 进行合并
  (2),异步请求代码使用 redux-thunk,并且写在 actionCreator 中
  (3),redux 直接采用 redux hooks 方式编写,不再使用 connect

- 网络请求采用 axios
  (1),对 axios 进行二次封装
  (2),所有的模块请求会放到一个请求文件中单独管理

- 项目使用 AntDesign
  (1),项目中某些 AntDesign 组件会被拿过来使用
  (2),但是大部分组件还是自己编写

## 样式初始化

```
npm install normalize.css
```

https://necolas.github.io/normalize.css/

## 配置别名

```
npm install @craco/craco --save
```

## 集中式路由

- [升 react-router v6 后，react-router-config 不能用了？——react-router v6 实现集中式路由](https://juejin.cn/post/7052933770260938783)
- [错误：useRoutes() 只能在 <Router> 组件的上下文中使用，即使应用程序包裹在 BrowserRouter 周围(Error: useRoutes() may be used only in the context of a <Router> component even if the app is wrapped around BrowserRouter)](https://www.likecs.com/ask-186064.html)

## nginx 部署

- 打包前端代码，并且上传服务器，并且由 nginx 进行驱动。
- 1.在服务器端安装 nginx，并且修改 conf 文件，以宝塔 centos 7 面板为例，![nginx文件位置](https://fastly.jsdelivr.net/gh/mhist/hexoImage@main/img/20220620203335.png)
  分别为配置文件存放位置和启动位置存放位置
- 2.查看上传的前端编译打包后的代码，并且编辑 nginx 配置文件
  ![前端代码位置](https://fastly.jsdelivr.net/gh/mhist/hexoImage@main/img/20220620203741.png)

- ![nginx配置文件上](https://fastly.jsdelivr.net/gh/mhist/hexoImage@main/img/20220620204353nginx1.png)

- ![nginx配置文件下](https://fastly.jsdelivr.net/gh/mhist/hexoImage@main/img/20220620204443nginx2.png)

由上图，指定 80 端口，当然在运行过程中是需要在设置中放行 80 端口的。
![80端口](https://fastly.jsdelivr.net/gh/mhist/hexoImage@main/img/20220620204638-80port.png)

最后在 ![启动](https://files.catbox.moe/yfb0eo.png)

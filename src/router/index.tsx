import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, useRoutes } from 'react-router-dom';
import { basePath, routes } from './config';
import { generateRouter } from './utils';

// class App extends React.Component {
//   componentWillMount() {
//     // let { history: { replace }, authorization, location } = this.props
//     // if (authorization) replace('./login')
//     // if (location.pathname === '/') replace('./asd')
//     console.log('路由跳转前的拦截', this.props);
//   }
//   render() {
//     return (
//       <Router>
//         <Routes>{generateRouter(basePath, true)(routes)}</Routes>
//       </Router>
//     );
//   }
// }

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>{generateRouter(basePath, true)(routes)}</Routes>
    </Router>
  );
};

export default App;

export { withBasePath } from './utils';
export { menuConfig, getSubMenuOnlyKeyByPath } from './config';

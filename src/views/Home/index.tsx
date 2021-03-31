import { Link } from 'react-router-dom';
import { Button } from 'antd';
import React from 'react';
import { withBasePath } from '@/router/index';

const Home: React.FC<{}> = () => {
  return (
    <>
      <div>dashboard 页面</div>
      <ul>
        <li>
          <Link to={withBasePath('/')}>
            <Button>Home</Button>
          </Link>
        </li>
        <li>
          <Link to={withBasePath('/about')}>
            <Button>About</Button>
          </Link>
        </li>
        <li>
          <Link to={withBasePath('/my')}>
            <Button>My</Button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;

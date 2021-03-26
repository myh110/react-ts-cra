import { Carousel } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'antd';
import { withBasePath } from '@/router/index';

const My = () => {
  function onChange(a: number) {
    console.log(a);
  }

  const contentStyle: any = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Link to={withBasePath('/my/star')}>
        <Button>My Star</Button>
      </Link>
      <Link to={withBasePath('/my/sun')}>
        <Button>My Sun</Button>
      </Link>
      <Outlet />
    </>
  );
};

export default My;

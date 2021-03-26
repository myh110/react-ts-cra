import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useRequest } from 'ahooks';
import styles from './index.module.scss';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);

  const [tip, setTip] = useState<string | null>(null);

  useEffect(() => {
    if (count > 5) {
      setTip('休息一下');
    }
  }, [count]);

  const { data, error, loading } = useRequest('/sun/info');

  console.log(data, error, loading);

  useEffect(() => {
    if (data?.name) {
      setTip(data.name);
    }
  }, [data]);

  return (
    <>
      <p className={styles.font_color}>
        你点击了 {count} 次 {tip}
      </p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        hello, {props.name}
      </Button>
    </>
  );
};

export default HelloHooks;

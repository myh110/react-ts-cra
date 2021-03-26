import React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

// const Hello: React.FC<Greeting> = (props: Greeting) => <Button>Hello, {props.name}</Button>;
const Hello = (props: Greeting) => <Button>Hello, {props.name}</Button>;

export default Hello;

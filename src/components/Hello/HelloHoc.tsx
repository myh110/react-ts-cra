import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Hello from './Hello';

interface Loading {
  loading: boolean;
}

function HelloHoc<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;

      return loading ? <div>loading</div> : <WrappedComponent {...(props as P)} />;
    }
  };
}

export default HelloHoc(Hello);

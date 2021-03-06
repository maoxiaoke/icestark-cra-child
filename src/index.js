import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './routes';
import { setLibraryName, isInIcestark } from '@ice/stark-app';

// import reportWebVitals from './reportWebVitals';

if (!isInIcestark()) {
  ReactDOM.render(<Route />, document.getElementById('root'))
}

setLibraryName('xxxx');

// [添加] - [icestark]: 导出 mount 生命周期
export async function mount({
  container,
  customProps,
}) {
  ReactDOM.render(
    <Route {...customProps} />,
    container,
  );
}

// [添加] - [icestark]: 导出 unmount 生命周期
export async function unmount({ container }) {
  ReactDOM.unmountComponentAtNode(container);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

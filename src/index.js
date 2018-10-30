import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './scss/common.scss';// 全局引入基础样式
import RouterConfig from './router/index.jsx';// 路由配置
// 路由配置
ReactDOM.render(
	<RouterConfig></RouterConfig>, 
	document.getElementById('root')
);

serviceWorker.unregister();


import 'antd/lib/style/index.less';
import 'antd/lib/style/components.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes/index';
ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('app'));



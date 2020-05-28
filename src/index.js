import dva from 'dva';

import createLoading from 'dva-loading';

import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/products').default);
app.model(require('./models/article').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

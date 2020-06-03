import dva from 'dva'; 
import  {createBrowserHistory as createHistory} from 'history';



// 1. Initialize 
/**
 * const app = dva({
 *  history: createHistory(), });
  * 
 */
const app = dva({
    history: createHistory(),
  });
// 2. Plugins
// app.use({});

// 3. Model
/**
 * @引入Model下面对应的文件
 * @如何在视图里面用呢
 */
app.model(require('./models/indexText').default);
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root'); 

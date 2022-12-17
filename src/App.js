import BtnIcon from './components/BtnIcon';
import Checkbox from './components/Checkbox';
import Droplist from './components/Droplist';
import Fab from './components/FAB';
import Tabs from './components/Tabs/index';
import TabsContext, { useTabContext } from './components/Tabs/TabsContext';
import TasksHead from './components/TasksHead';
import GlobalContextProvider from './GlobalContexts';
import './index.css'
import Popover from './components/Popover';

function App() {

  return (
    <>
      <GlobalContextProvider>
        <TabsContext>
            <div className="title">
                <h1>Simple To Do List</h1>
                <p className="body-m-16">
                  Today is awesome day. The weather is awesome, you are awesome too!
                </p>
              </div>
              <div className="tab-fab-container">
                <Tabs />
                <Fab>
                  <Popover />
                </Fab>
              </div>
              <TasksHead />
              <Checkbox />
          </TabsContext>
      </GlobalContextProvider>
    </>
  );
}

export default App;

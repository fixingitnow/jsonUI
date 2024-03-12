import './App.css';
import DynamicComponentRenderer from './components/DynamicComponentRenderer';
import jsonData from './data/data.json'

function App() {
  return (
    <div>
      <body className="App-header">
        {jsonData.views.map((data, index) =>
          <DynamicComponentRenderer
            key={index}
            view={data}
          ></DynamicComponentRenderer>
        )}
      </body>
    </div>
  );
}

export default App;

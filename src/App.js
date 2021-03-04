import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./components/portfolio.js";
import content from "./data.json";

const data = content[0];

function App() {
    return (
        <div className="App">
            <Portfolio data={data} />
        </div>
    );
}

export default App;

import Card from "./components/Card";
import { contacts } from "./data";

const App =() =>  {
    return (
        <div>
            <Card contacts={contacts} />
        </div>
    );
}

export default App;

import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import Test from "./components/Test"
import Test2 from "./components/Test2"

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/test2">
          <Test2 />
        </Route>
      </div>
    </div>
  );
}

export default App;
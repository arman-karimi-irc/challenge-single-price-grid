import JoinUs from "./JoinUs";
import Subscription from "./Subscription";
import WhyUs from "./WhyUs";
function App() {
  return (
    <div className="bg-teal-100 h-screen w-screen ">
      <div className="flex flex-col">
        <JoinUs />
        <Subscription />
        <WhyUs />
      </div>
    </div>
  );
}

export default App;

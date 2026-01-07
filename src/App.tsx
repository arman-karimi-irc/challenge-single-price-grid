import JoinUs from "./JoinUs";
import Subscription from "./Subscription";
import WhyUs from "./WhyUs";
function App() {
  return (
    <div className="bg-teal-100 h-screen w-screen ">
      <div className="flex flex-col shadow-xl shadow-gray-500/20">
        <JoinUs />
        <Subscription />
        <WhyUs />
      </div>
    </div>
  );
}

export default App;

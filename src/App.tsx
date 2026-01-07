import JoinUs from "./JoinUs";
import Subscription from "./Subscription";
import WhyUs from "./WhyUs";
function App() {
  return (
    <div className="bg-teal-100 h-screen w-screen flex items-center justify-center px-4">
      <div className="flex flex-col bg-white shadow-xl shadow-gray-500/20 rounded-md *:p-6">
        <JoinUs />
        <Subscription />
        <WhyUs />
      </div>
    </div>
  );
}

export default App;

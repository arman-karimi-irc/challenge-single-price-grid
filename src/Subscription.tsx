export default function Subscription() {
  return (
    <div className="flex flex-col space-y-4 mb-6 text-white bg-teal-500">
      <span className="">Monthly Subscription</span>
      <div className="flex items-center space-x-3">
        <h1 className="text-4xl font-semibold">$29</h1>
        <p className="font-thin text-teal-100">per month</p>
      </div>
      <h3 className="font-light">Full access for less than $1 a day</h3>
      <button className="bg-green-400 p-3 rounded-md shadow-md mt-3 font-bold tracking-wide">
        Sign Up
      </button>
    </div>
  );
}

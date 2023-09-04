import Plates from "./components/plates";
import Navbar from "./components/navbar";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <div className="absolute inset-x-0 top-32 m-auto h-80 max-w-lg bg-transparent dark:bg-gradient-to-tr dark:from-indigo-400 dark:via-teal-900 dark:to-[#C084FC] blur-[118px] z-0"></div>
      <Navbar />
      <Header />
      <Plates />
    </>
  );
}

export default App;
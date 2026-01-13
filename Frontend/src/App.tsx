import Navbar from "./components/Navbar";
import RandomSong from "./components/RandomSong";

function App(){



  return (
    <main className="w-full h-full bg-linear-to-br from-amber-50 to-orange-100">
    <Navbar/>
    <RandomSong/>
    </main>
  )
}

export default App;
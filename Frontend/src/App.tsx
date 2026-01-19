import Navbar from "./components/Navbar";
import RandomSong from "./components/RandomSong";

function App(){



  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Emerald-600 Basic Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            linear-gradient(to right, rgba(22, 163, 74, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22, 163, 74, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
         <div className="relative z-10">
           <Navbar/>
           <RandomSong/>
         </div>
    </div>
  )
}

export default App;
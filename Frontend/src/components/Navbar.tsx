 function Navbar(){
    return(
    <div className="px-5">
    <header className="flex flex-row p-4 mb-2 justify-between items-center shadow-md rounded-xl shadow-gray-500 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
        <h1 className="font-bold text-gray-700 text-xl">Muse_Type</h1>
        <div className="flex flex-row items-center justify-end">
        <a href="https://github.com/Adnan2208">
            <img src="../assets/github.png" alt="Github" className="w-12 h-12 mx-2"/>
        </a>
        <a href="https://linkedin.in/adnanchherawala/">
            <img src="../assets/linkedin.png" alt="Linked" className="w-12 h-12 "/>
        </a>
        <a href="https://x.com/Adnan_twt1">
            <img src="../assets/twitter.png" alt="Twitter" className="w-12 h-12 mx-2"/>
        </a>
        </div>
    </header>
    </div>
    )
}

export default Navbar;
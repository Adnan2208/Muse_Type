 function Navbar(){
    return(
    <>
    <header className="flex flex-row justify-between items-center p-1 shadow-md m-2 rounded-xl shadow-gray-500">
        <h1 className="font-bold text-black">Muse_Type</h1>
        <div className="flex flex-row items-center justify-end">
        <a href="https://github.com/Adnan2208">
            <img src="../assets/github.png" alt="Github" className="w-10 h-10 m-2"/>
        </a>
        <a href="https://linkedin.in/adnanchherawala/">
            <img src="../assets/linkedin.png" alt="Linked" className="w-10 h-10"/>
        </a>
        <a href="https://x.com/Adnan_twt1">
            <img src="../assets/twitter.png" alt="Twitter" className="w-10 h-10 m-2"/>
        </a>
        </div>
    </header>
    </>
    )
}

export default Navbar;
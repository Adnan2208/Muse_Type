import { useEffect, useRef } from 'react';

function Navbar(){

    const h1Text = "Muse_Type";
    let i = 0;
    const h1Ref = useRef<HTMLHeadingElement>(null);
    let timeoutId : number | undefined;
    const tw = () => {        
        const h1 = h1Ref.current;
        if(i < h1Text.length && h1){
            h1.textContent += h1Text.charAt(i);
            i++;
            return setTimeout(tw,100);
        }
        clearTimeout(timeoutId); // Extra clearTimeout for safety.
    }

    useEffect(() => {
        timeoutId = tw();
        return () => clearTimeout(timeoutId); // Clears the first timeout that calls the tw() function.
    }, []);

    

    return(
    <div className="px-5">
    <header className="flex flex-row p-4 mb-2 justify-between items-center shadow-md rounded-xl shadow-gray-500 bg-linear-to-br from-amber-50 to-orange-100 overflow-hidden">
        <h1 className="font-bold text-gray-700 text-xl tw" ref={h1Ref}></h1>
        <div className="flex flex-row items-center justify-end">
        <a href="https://github.com/Adnan2208">
            <img src="../assets/github.png" alt="Github" className="w-8 h-8 mx-2"/>
        </a>
        <a href="https://linkedin.in/adnanchherawala/">
            <img src="../assets/linkedin.png" alt="Linked" className="w-8 h-8 "/>
        </a>
        <a href="https://x.com/Adnan_twt1">
            <img src="../assets/twitter.png" alt="Twitter" className="w-8 h-8 mx-2"/>
        </a>
        </div>
    </header>
    </div>
    )
}

export default Navbar;
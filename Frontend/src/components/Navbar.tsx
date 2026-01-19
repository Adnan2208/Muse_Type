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
    <header className="flex flex-row p-4 mb-2 justify-between items-center shadow-md rounded-xl shadow-gray-500 bg-black overflow-hidden">
        <h1 className="font-bold text-emerald-600 text-xl tw" ref={h1Ref}></h1>
        <div className="flex flex-row items-center justify-end">
        <a href="https://github.com/Adnan2208" className="p-2 rounded">
            <img src="/github.png" alt="Github" className="bg-emerald-600 w-8 h-8 mx-2"/>
        </a>
        <a href="https://linkedin.in/adnanchherawala/" className="p-2 rounded">
            <img src="/linkedin.png" alt="Linked" className="bg-emerald-600 w-8 h-8 "/>
        </a>
        <a href="https://x.com/Adnan_twt1" className="p-2 rounded">
            <img src="/twitter.png" alt="Twitter" className="bg-emerald-600 w-8 h-8 mx-2"/>
        </a>
        </div>
    </header>
    </div>
    )
}

export default Navbar;
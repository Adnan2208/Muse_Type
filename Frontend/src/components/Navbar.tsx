import { useEffect, useRef } from 'react';

function Navbar() {
  const h1Text = "Muse_Type";
  let i = 0;
  const h1Ref = useRef<HTMLHeadingElement>(null);
  let timeoutId: number | undefined;

  const tw = () => {
    const h1 = h1Ref.current;
    if (i < h1Text.length && h1) {
      h1.textContent += h1Text.charAt(i);
      i++;
      return setTimeout(tw, 100);
    }
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    timeoutId = tw();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="px-6 pt-6">
      <header className="flex flex-row p-4 justify-between items-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-3 pl-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <h1 
            className="font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent" 
            ref={h1Ref}
          />
        </div>
        
        <div className="flex flex-row items-center gap-1">
          {[
            { href: "https://github.com/Adnan2208", icon: "/github.png", label: "Github" },
            { href: "https://linkedin.in/adnanchherawala/", icon: "/linkedin.png", label: "LinkedIn" },
            { href: "https://x.com/Adnan_twt1", icon: "/twitter.png", label: "Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-110"
            >
              <img 
                src={social.icon} 
                alt={social.label} 
                className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-md p-0.5"
              />
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
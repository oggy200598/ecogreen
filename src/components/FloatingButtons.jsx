import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const Item = ({ href, label, icon, bg }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative grid h-12 w-12 place-items-center rounded-full ${bg}
                 shadow-lg shadow-black/20 ring-1 ring-white/10
                 transition-transform hover:scale-110`}
      aria-label={label}
    >
      <img src={icon} alt={label} className="h-6 w-6" />
      {/* tooltip */}
      <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-md
                       bg-neutral-900/90 px-2 py-1 text-xs text-white shadow
                       group-hover:block">
        {label}
      </span>
    </a>
  );

  return (
    <div className="fixed bottom-6 right-6 z-250 flex flex-col items-center gap-3">
      {/* Call */}
      <Item
        href="tel:0938466982"
        label="Gọi điện"
        icon="/icons/phone.svg"
        
        bg="bg-emerald-600"
      />
      {/* Zalo */}
      <Item
        href="https://zalo.me/0564581196"
        label="Zalo chat"
        icon="/icons/zalo.svg"
        bg="bg-blue-600"
      />
      {/* Messenger */}
      <Item
        href="https://www.messenger.com/t/100013292320211"
        label="Messenger"
        icon="/icons/messenger.svg"
        bg="bg-indigo-600"
      />

      {/* Back to top */}
      {showTop && (
        <button
          onClick={goTop}
          className="group grid h-12 w-12 place-items-center rounded-full bg-amber-500
                     text-white shadow-lg shadow-black/20 ring-1 ring-white/10
                     transition-transform hover:scale-110"
          aria-label="Lên đầu trang"
        >
          <img src="/icons/arrow-up.svg" alt="Lên đầu" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

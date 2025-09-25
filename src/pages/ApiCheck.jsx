import { useEffect, useState } from "react";

export default function ApiCheck(){
  const [data,setData] = useState(null);
  const [err,setErr] = useState("");

  useEffect(()=>{
    const base = import.meta.env.VITE_API_URL;   // <-- VITE_*
    if(!base){ setErr("Thiếu VITE_API_URL"); return; }

    const url = new URL("/health", base).toString(); // tránh 'undefined/health'
    fetch(url, { cache:"no-store" })
      .then(r => { if(!r.ok) throw new Error("HTTP "+r.status); return r.json(); })
      .then(setData)
      .catch(e => setErr(e.message));
  },[]);

  return <pre>{ err ? `Error: ${err}` : JSON.stringify(data, null, 2) }</pre>;
}

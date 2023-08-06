'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar() {
  
    const [search, setSearch ] = useState("");

    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
        setSearch("");
    }
  
    return (
    <form className="flex max-w-6xl mx-auto justify-between items-center" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search keywords..."
            className="w-full h-14 rounded-sm placeholder:gray-500 bg-transparent outline-none flex-1"
            value={search} onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button disabled={!search} type="submit" 
        className="text-amber-600 disabled:text-gray-400" 
        onSubmit
        >Search</button>
    </form>
  )
}

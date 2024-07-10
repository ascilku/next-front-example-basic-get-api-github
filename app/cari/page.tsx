"use client";
import { useState } from "react";
import SectionResult from "./sectionResult";

export default function Cari() {
  const [query, setQuery] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder="search user" />
        <button>Search</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}

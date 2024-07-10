"use client";
import useSWR from "swr";

// async function getData(param: string) {
//   const res = await fetch(`https://api.github.com/users/${param}`);
//   return res.json();

// }
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Slug({ params }: { params: { slug: string } }) {
  // const data = await getData(params.slug);
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${params.slug}`,
    fetcher
  );
  return (
    <div>
      <p>data param {params.slug}</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

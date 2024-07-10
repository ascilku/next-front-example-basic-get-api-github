import { table } from "console";
import Link from "next/link";
import useSWR from "swr";

interface Prop {
  query: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SectionResult({ query }: Prop) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );
  // if (error) return "Error ...";
  // if (isLoading) return "Loading ...";
  var loading = !data && !error;
  return (
    <div>
      {loading && "Loading data .."}
      <p>hasil search : {query}</p>
      <div>{JSON.stringify(data && data.total_count)}</div>
      <table border={1}>
        <tr>
          <td>id</td>
          <td>username</td>
          <td>Site Admin</td>
        </tr>
        {data &&
          data.items.map((user: any, index: Number) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>
                  <Link href={`/cari/${user.login}`}>{user.login}</Link>
                </td>
                <td>
                  <Link href={user.repos_url}>Link Repo</Link>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

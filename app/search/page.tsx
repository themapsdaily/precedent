import Link from 'next/link';
export default async function SearchResults({ searchParams }: { searchParams: { query: string } }) {
  const response = await fetch(`/api/search?query=${searchParams.query}`);
  const results = await response.json();

  return (
    <div>
      <h1>Search Results for &quot;{searchParams.query}&quot;</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <Link href={`/theme/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

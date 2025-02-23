import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function SearchResults({ searchParams }: { searchParams: { query: string } }) {
  const results = await prisma.data.findMany({
    where: {
      OR: [
        { title: { contains: searchParams.query || '', mode: 'insensitive' } },
        { description: { contains: searchParams.query || '', mode: 'insensitive' } },
      ],
    },
  });

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

/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import data from "../books.json";
import { Book } from "@/models/models";
import { api } from "@/utils/services";

const books: Book[] = data.library.map((data) => data.book);
const genres: Book["genre"][] = Array.from(
  new Set(books.map((book) => book.genre))
);

export default function Home() {
  const [genre, setGenre] = useState<Book["genre"]>("");
  const [readList, setReadList] = useState<Book["ISBN"][]>([]);
  const matches = useMemo(() => {
    if (!genre) return books;

    return books.filter((book) => {
      if (book.genre !== genre) return false;

      return true;
    });
  }, [genre]);

  function handleBookClick(book: Book["ISBN"]) {
    const draft = readList.includes(book)
      ? readList.filter((readBook) => readBook !== book)
      : [...readList, book];

    setReadList(draft);
    api.readList.update(draft);
  }

  useEffect(() => {
    const unsubscribe = api.readList.onChange(setReadList);

    return () => unsubscribe();
  }, []);

  return (
    <article className="grid gap-4">
      <nav>
        <select
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        >
          <option value="">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </nav>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
        {matches.map((book) => (
          <li
            key={book.ISBN}
            className="grid gap-2"
            onClick={() => handleBookClick(book.ISBN)}
          >
            <img
              className="aspect-[9/14] object-cover"
              src={book.cover}
              alt={book.title}
            />
            <p>
              {readList.includes(book.ISBN) && <span>⭐ </span>}
              {book.title}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

import type { Book } from "@/models/types";
import data from "../books.json";
import IndexClientPage from "./client";

const books: Book[] = data.library.map((data) => data.book);
const genres: Book["genre"][] = Array.from(
  new Set(books.map((book) => book.genre))
);

export default function IndexPage() {
  return <IndexClientPage books={books} genres={genres} />;
}

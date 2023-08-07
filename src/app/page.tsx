import type { Book } from "@/models/types";

import IndexClientPage from "./client";

const api = {
  book: {
    list: async (): Promise<Book[]> =>
      import("../books.json").then((data) =>
        data.library.map((data) => data.book)
      ),
  },
};

export default async function IndexPage() {
  const books = await api.book.list();

  const genres: Book["genre"][] = Array.from(
    new Set(books.map((book) => book.genre))
  );
  return <IndexClientPage books={books} genres={genres} />;
}

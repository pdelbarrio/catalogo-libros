import { Book } from "@/models/models";

export const api = {
  readList: {
    update: (readList: Book["ISBN"][]) =>
      localStorage.setItem("readList", JSON.stringify(readList)),
    onChange: (callback: (readList: Book["ISBN"][]) => void) => {
      function getReadlist() {
        const readList = JSON.parse(
          localStorage.getItem("readList") ?? "[]"
        ) as Book["ISBN"][];

        callback(readList);
      }

      window.addEventListener("storage", getReadlist);

      getReadlist();

      return () => window.removeEventListener("storage", getReadlist);
    },
  },
};

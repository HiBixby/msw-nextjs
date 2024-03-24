// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/hello", () => {
    return HttpResponse.json(
      { text: "hello" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }),
];

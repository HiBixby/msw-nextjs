// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  // TODOLIST - GET
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

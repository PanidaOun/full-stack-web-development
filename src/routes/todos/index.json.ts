import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";
3
export const get: RequestHandler = (request) => {
  return api(request);
};

export const post: RequestHandler = async (request) => {
  const data = await request.request.formData();
  return api(request, {
    created_at: new Date(),
    text: data.get("text") as string,
    done: false,
  });
};
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

//   if (event.url.has)
  const response = await resolve(event);

  return response;
};
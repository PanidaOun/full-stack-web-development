import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

// get
export const get: RequestHandler = async ({ request }) => {
  return {
    status: 200,
    body: todos
  }
}

// post
export const post: RequestHandler = async ({ request }) => {
  const data = await request.formData();

  todos.push({
    created_at: new Date(),
    text: data.get('text') as string,
    done: false
  })

  return {
    status: 303,
    headers: {
      location: "/"
    }
  }
}
import { RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS } from "@/lib/constants";

let requestTimestamps: number[] = [];

export async function POST(request: Request) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.API_SECRET_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  requestTimestamps = requestTimestamps.filter((timestamp) => {
    return Date.now() - timestamp < RATE_LIMIT_WINDOW_MS;
  });
  if (requestTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return Response.json({ error: "Too Many Requests" }, { status: 429 });
  }
  requestTimestamps.push(Date.now());
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json({ message: "Hello, World!" });
}

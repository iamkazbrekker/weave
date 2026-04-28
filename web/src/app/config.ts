// API base URL — reads from environment variable at build time
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function apiRequest<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  body: any = null
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch("http://localhost:3000" + url, options)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return response.json()
}

export function buildQueryUrl(url: string, params: Record<string, string>): string {
  const query = new URLSearchParams(params).toString()
  return `${url}?${query}`
}

import { NextRequest, NextResponse } from "next/server"

import { Category } from "@/types/category-type"
import { categories } from "@/app/api/categories/categories"

/* GET : /api/categories/
 */
export async function GET() {
  return Response.json(categories)
}

/* POST : /api/categories/
  Content-Type: application/json
  Body:  { 
    "name": string, 
    "color": string, 
    "textColor": string 
  }
*/
export async function POST(req: NextRequest) {
  const category: Category = await req.json()

  category.id = Math.random().toString(36).slice(2)

  // check if some category already exists with the same name
  if (categories.some((p) => p.name === category.name)) {
    return NextResponse.json({ error: "Category already exists" }, { status: 400 })
  }

  categories.push(category)

  return NextResponse.json(category)
}

/* PUT : /api/categories/
  Content-Type: application/json
  Body:  { 
    "id": string,
    "name": string, 
    "color": string, 
    "textColor": string 
  }
*/
export async function PUT(req: NextRequest) {
  const category: Category = await req.json()

  const index = categories.findIndex((p) => p.id === category.id)

  if (index !== -1) {
    categories[index] = category
  }

  return NextResponse.json(category)
}

/* DELETE : /api/categories/
  Content-Type: application/json
  Body: {
    "id": string
  }
*/
export async function DELETE(req: NextRequest) {
  const { id } = await req.json()

  const index = categories.findIndex((p) => p.id === id)

  if (index !== -1) {
    categories.splice(index, 1)
  }

  return NextResponse.json({ id })
}

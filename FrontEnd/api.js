

export async function getWorks() {
    const request = await fetch("http://localhost:5678/api/works")
    const data = await request.json()

    return data
}

export async function getCategories() {
    const request = await fetch("http://localhost:5678/api/categories")
    const data = await request.json()

    return data
}






import { login } from "./login.js"

login()




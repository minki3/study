export const getDogs = async (page: number) => {
  try {
    const API_URL = `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${page}&limit=10`
    const response = await fetch(API_URL)
    const result = await response.json()
    return result
  } catch (e) {
    console.log(e)
  }
}

export const getAnimal = async () => {
  try {
    const API_URL = `http://localhost:8080/animals`
    const response = await fetch(API_URL, { cache: 'no-store' })
    const result = await response.json()
    return result
  } catch (e) {
    console.log(e)
  }
}

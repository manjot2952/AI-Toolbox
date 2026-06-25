const BASE_URL = "http://localhost:8081";

export async function getCategoryTools(
  categoryId,
  page = 0,
  size = 12
) {

  const response = await fetch(
    `${BASE_URL}/api/categories/${categoryId}/tools?page=${page}&size=${size}`
  );

  return await response.json();
}
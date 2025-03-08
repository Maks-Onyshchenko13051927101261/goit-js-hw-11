export function searchFetch(query) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api/";
  const KAY = "49101285-dc6548589a888be5ea0d6fe27";
  const searchProps = new URLSearchParams({
    keys: KAY,
    q: query,
    image_type: "photo"
    orientation: "horizontal",
    safesearch: "true",
  });
  const url = `${BASE_URL}${END_POINT}?${searchProps}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return response.json();
  });
}
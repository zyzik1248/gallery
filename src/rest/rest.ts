const API = "https://picsum.photos/v2/list";

export async function fetchImages() {
  try {
    const resp = await fetch(API, {
      method: "GET",
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

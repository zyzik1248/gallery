const API = "https://picsum.photos/v2/list";

export interface PhotoData {
  id: number
  url: string
}

export async function fetchPhotos() {
  try {
    const resp = await fetch(API, {
      method: "GET",
    });

    const data = await resp.json();
    return data as PhotoData[];
  } catch (error) {
    console.log(error);
  }
}

export function getPhotoUrl(url: string){
  const elList = url.split("/")
  const slug = elList[elList.length-1]

  return `http://source.unsplash.com/${slug}`
}
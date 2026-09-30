export function getCloudinaryImageUrl(
  url: string,
  width?: number
): string {
  if (!url) {
    return ''
  }

  // Nếu không truyền width → trả URL gốc
  if (!width) {
    return url
  }

  return url.replace(
    '/image/upload/',
    `/image/upload/f_auto,q_auto,w_${width}/`
  )
}
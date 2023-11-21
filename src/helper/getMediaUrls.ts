import type { Stored } from '../pages/stored.json'

export function getMediaUrls (item: Stored) {
  // console.log('getMediaUrls', item)
  const cdnUrl = Array.isArray(item.cdnUrl) ? item.cdnUrl[0] : item.cdnUrl
  const mediaUrl = cdnUrl.replace('cdn.discordapp.com', 'media.discordapp.net')
  const pixelUrl = `${mediaUrl}?format=jpeg&height=1&width=1`

  // height or width is 1000px, whichever is smaller
  const maxDimension = Math.min(1200, Math.max(item.height, item.width))
  const thumbHeight = item.height > item.width ? maxDimension : Math.round(item.height * (maxDimension / item.width))
  const thumbWidth = item.width > item.height ? maxDimension : Math.round(item.width * (maxDimension / item.height))

  const thumbnailUrl = `${mediaUrl}?format=jpeg&height=${thumbHeight}&width=${thumbWidth}`

  const isVideo = cdnUrl.endsWith('.mp4')
  const isGif = cdnUrl.endsWith('.gif')
  const isImage = !isVideo && !isGif

  return {
    cdnUrl,
    mediaUrl,
    pixelUrl,
    thumbnailUrl,
    isVideo,
    isGif,
    isImage,
  }
}

/** @jsxImportSource react */
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import { useState } from 'react'
import { Box } from '../../../styled-system/react'
import type { Stored } from '../../pages/stored.json'
import { css } from '../../../styled-system/css'

const MediaContainer = ({ item }: { item: Stored }) => {
  const cdnUrl = Array.isArray(item.cdnUrl) ? item.cdnUrl[0] : item.cdnUrl
  const mediaUrl = cdnUrl.replace('cdn.discordapp.com', 'media.discordapp.net')
  // const pixelUrl = `${mediaUrl}?format=jpeg&height=1&width=1`

  // height or width is 1000px, whichever is smaller
  const maxDimension = Math.min(1200, Math.max(item.height, item.width))
  const thumbHeight = item.height > item.width ? maxDimension : Math.round(item.height * (maxDimension / item.width))
  const thumbWidth = item.width > item.height ? maxDimension : Math.round(item.width * (maxDimension / item.height))

  const thumbnailUrl = `${mediaUrl}?format=jpeg&height=${thumbHeight}&width=${thumbWidth}`

  const isVideo = cdnUrl.endsWith('.mp4')
  const isGif = cdnUrl.endsWith('.gif')

  // base64 data uri with width and height and pixelUlr background
  const dataSrc = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="${item.width}" height="${item.height}"></svg>`)}`

  return (
    <Box pos="relative" className="group">
      <img width={`${item.width}px`} height={`${item.height}px`} src={dataSrc} alt="preload"/>
      {isVideo
        ? (
          <video
            className={css({
              top: 0,
              left: 0,
              pos: 'absolute',
              objectFit: 'contain',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
            })}
            src={cdnUrl}
            height={item.height}
            width={item.width}
            muted
            autoPlay
            loop
          />
          )
        : (
          <img
            className={css({
              top: 0,
              left: 0,
              pos: 'absolute',
              objectFit: 'contain',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
            })}
            loading="lazy"
            alt={item.title}
            src={isGif ? mediaUrl : thumbnailUrl}
          />
          )}
      <Box
        _groupHover={{
          opacity: 1,
        }}
        opacity={0}
        transition=".25s"
        pos="absolute"
        color="white"
        bottom="0"
        w="100%"
        backdropFilter="blur(5px)"
        padding="20px"
        fontSize="3xl"
        lineHeight={0.6}
        border="3px solid rgba(255,255,255,.75)"
        bg="rgba(0,0,0,.5)"
        _hover={{ bg: 'rgba(0,0,0,.75)' }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        cursor="pointer"
      >
        <Box
          _groupHover={{ transform: 'translateX(0)' }}
          transform="translateY(5px)"
          transition=".25s"
        >{item.title}
        </Box>
        <Box
          fontSize="5xl"
          _groupHover={{ transform: 'translateX(0)' }}
          transform="translateX(-5px)"
          transition=".25s"
        >→
        </Box>
      </Box>
    </Box>
  )
}

let _items: Stored[] = []
const getItems = async () => {
  if (_items.length) return _items
  _items = await fetch('/stored.json').then<Stored[]>((res) => res.json())
  return _items
}

export const MediaList: React.FC<{ prefetchedItems: Stored[] }> = ({ prefetchedItems }) => {
  const [items, setItems] = useState(prefetchedItems)

  return (
    <MasonryInfiniteGrid
      percentage
      gap={5}
      column={3}
      threshold={5000}
      onRequestAppend={async (e) => {
        e.wait()
        const items = await getItems()
        e.ready()
        setItems(items)
      }}
    >
      {items.map((item) => (
        <Box
          data-grid-groupkey={item.id}
          key={item.id}
          w="33cqw"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.900"
        >
          <MediaContainer item={item}/>
        </Box>
      ))}
    </MasonryInfiniteGrid>
  )
}

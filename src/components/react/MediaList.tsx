/** @jsxImportSource react */
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import { useState } from 'react'
import { Box } from '../../../styled-system/react'
import type { Stored } from '../../pages/stored.json'
import { css } from '../../../styled-system/css'

const MediaContainer = ({ item }: { item: Stored }) => {
  const cdnUrl = Array.isArray(item.cdnUrl) ? item.cdnUrl[0] : item.cdnUrl
  const pixelUrl = `${cdnUrl.replace('cdn.discordapp.com', 'media.discordapp.net')}?format=jpeg&height=1&width=1`

  const thumbnailWidth = 100
  const thumbnailHeight = Math.round((thumbnailWidth / item.width) * item.height)
  const thumbnailUrl = `${cdnUrl.replace('cdn.discordapp.com', 'media.discordapp.net')}?format=jpeg&height=${thumbnailHeight}&width=${thumbnailWidth}`

  const isVideo = cdnUrl.endsWith('.mp4')

  // base64 data uri with width and height and pixelUlr background
  const dataSrc = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="${item.width}" height="${item.height}"></svg>`)}`

  return (
    <div>
      <img width={`${item.width}px`} height={`${item.height}px`} src={dataSrc}/>
      {isVideo
        ? (
          <video
            className={css({
              top: 0,
              left: 0,
              pos: 'absolute',
              objectFit: 'cover',
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
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
            })}
            loading="lazy"
            src={cdnUrl}
          />
          )}
    </div>
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
  // <Container>
    <MasonryInfiniteGrid
        // container
      // useFirstRender
      percentage
      gap={5}
      column={3}
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
  // </Container>
  )
}

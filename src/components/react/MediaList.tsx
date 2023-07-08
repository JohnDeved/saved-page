/** @jsxImportSource react */
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import { useState } from 'react'
import { Box, Container } from '../../../styled-system/react'
import type { Stored } from '../../pages/stored.json'
import { css } from '../../../styled-system/css'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import { getMediaUrls } from '../../helper/getMediaUrls'

const MediaContainer = ({ item }: { item: Stored }) => {
  const { cdnUrl, mediaUrl, pixelUrl, thumbnailUrl, isVideo, isGif, isImage } = getMediaUrls(item)

  // base64 data uri with width and height and pixelUlr background
  const dataSrc = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="${item.width}" height="${item.height}"></svg>`)}`

  return (
    <a href={`/stored/${item.id}`}>
      <Box pos="relative" className="group" style={{ backgroundImage: `url(${pixelUrl})` }}>
        <img src={dataSrc} alt="preload"/>
        <Box pos="absolute" top={0} left={0} width="100%" height="100%">
          {isVideo
            ? (
              <LazyLoadComponent
                threshold={0}
                delayMethod="debounce"
              >
                <video
                  src={cdnUrl}
                  preload="none"
                  muted
                  autoPlay
                  loop
                />
              </LazyLoadComponent>
              )
            : (
              <LazyLoadImage
                threshold={0}
                delayMethod="debounce"
                effect="opacity"
                src={isGif ? mediaUrl : thumbnailUrl}
                alt={item.title}
              />
              )}
        </Box>
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
          fontSize="xl"
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
            fontSize="4xl"
            _groupHover={{ transform: 'translateX(0)' }}
            transform="translateX(-5px)"
            transition=".25s"
          >→
          </Box>
        </Box>
      </Box>
    </a>
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
      column={0}
      threshold={5000}
      // useRoundedSize
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
          className={css({
            '@media (max-width: 935px)': {
              w: '49.5%',
            },
            '@media (max-width: 460px)': {
              w: '100%',
            },
          })}
          key={item.id}
          w="33%"
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

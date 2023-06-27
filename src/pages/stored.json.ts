import type { APIRoute } from 'astro'
import s from '../../save/stored.json'

export const stored = s.sort((a, b) => b.created - a.created)
export type Stored = typeof stored[0]

export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify(stored),
  }
}

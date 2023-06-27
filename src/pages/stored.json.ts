import type { APIRoute } from 'astro'
import stored from '../../save/stored.json'

export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify(stored),
  }
}

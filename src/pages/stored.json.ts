import type { APIRoute } from 'astro'
import s from '@undefined/saved'

export const stored = s.sort((a, b) => b.created - a.created)
export type Stored = typeof stored[0]

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(stored),
  }
}

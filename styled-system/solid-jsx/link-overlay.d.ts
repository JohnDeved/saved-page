/* eslint-disable */
import { Component } from 'solid-js'
import { LinkOverlayProperties } from '../patterns/link-overlay'
import { HTMLStyledProps } from '../types/jsx'

export type LinkOverlayProps = LinkOverlayProperties & Omit<HTMLStyledProps<'a'>, keyof LinkOverlayProperties >


export declare const LinkOverlay: Component<LinkOverlayProps>
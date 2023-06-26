/* eslint-disable */
import { Component } from 'solid-js'
import { LinkBoxProperties } from '../patterns/link-box'
import { HTMLStyledProps } from '../types/jsx'

export type LinkBoxProps = LinkBoxProperties & Omit<HTMLStyledProps<'div'>, keyof LinkBoxProperties >


export declare const LinkBox: Component<LinkBoxProps>
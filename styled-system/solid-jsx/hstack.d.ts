/* eslint-disable */
import { Component } from 'solid-js'
import { HstackProperties } from '../patterns/hstack'
import { HTMLStyledProps } from '../types/jsx'

export type HstackProps = HstackProperties & Omit<HTMLStyledProps<'div'>, keyof HstackProperties >


export declare const HStack: Component<HstackProps>
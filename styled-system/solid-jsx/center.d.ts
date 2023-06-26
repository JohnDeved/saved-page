/* eslint-disable */
import { Component } from 'solid-js'
import { CenterProperties } from '../patterns/center'
import { HTMLStyledProps } from '../types/jsx'

export type CenterProps = CenterProperties & Omit<HTMLStyledProps<'div'>, keyof CenterProperties >


export declare const Center: Component<CenterProps>
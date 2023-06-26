/* eslint-disable */
import { Component } from 'solid-js'
import { DividerProperties } from '../patterns/divider'
import { HTMLStyledProps } from '../types/jsx'

export type DividerProps = DividerProperties & Omit<HTMLStyledProps<'div'>, keyof DividerProperties >


export declare const Divider: Component<DividerProps>
/* eslint-disable */
import { Component } from 'solid-js'
import { GridItemProperties } from '../patterns/grid-item'
import { HTMLStyledProps } from '../types/jsx'

export type GridItemProps = GridItemProperties & Omit<HTMLStyledProps<'div'>, keyof GridItemProperties >


export declare const GridItem: Component<GridItemProps>
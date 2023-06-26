/* eslint-disable */
import { Component } from 'solid-js'
import { GridProperties } from '../patterns/grid'
import { HTMLStyledProps } from '../types/jsx'

export type GridProps = GridProperties & Omit<HTMLStyledProps<'div'>, keyof GridProperties >


export declare const Grid: Component<GridProps>
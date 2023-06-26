/* eslint-disable */
import { Component } from 'solid-js'
import { BoxProperties } from '../patterns/box'
import { HTMLStyledProps } from '../types/jsx'

export type BoxProps = BoxProperties & Omit<HTMLStyledProps<'div'>, keyof BoxProperties >


export declare const Box: Component<BoxProps>
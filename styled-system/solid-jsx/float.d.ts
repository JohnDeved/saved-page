/* eslint-disable */
import { Component } from 'solid-js'
import { FloatProperties } from '../patterns/float'
import { HTMLStyledProps } from '../types/jsx'

export type FloatProps = FloatProperties & Omit<HTMLStyledProps<'div'>, keyof FloatProperties >


export declare const Float: Component<FloatProps>
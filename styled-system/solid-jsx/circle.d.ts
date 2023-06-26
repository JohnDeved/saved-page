/* eslint-disable */
import { Component } from 'solid-js'
import { CircleProperties } from '../patterns/circle'
import { HTMLStyledProps } from '../types/jsx'

export type CircleProps = CircleProperties & Omit<HTMLStyledProps<'div'>, keyof CircleProperties >


export declare const Circle: Component<CircleProps>
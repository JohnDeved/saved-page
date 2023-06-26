/* eslint-disable */
import { Component } from 'solid-js'
import { AspectRatioProperties } from '../patterns/aspect-ratio'
import { HTMLStyledProps } from '../types/jsx'

export type AspectRatioProps = AspectRatioProperties & Omit<HTMLStyledProps<'div'>, keyof AspectRatioProperties | 'aspectRatio'>


export declare const AspectRatio: Component<AspectRatioProps>
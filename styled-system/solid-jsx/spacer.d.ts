/* eslint-disable */
import { Component } from 'solid-js'
import { SpacerProperties } from '../patterns/spacer'
import { HTMLStyledProps } from '../types/jsx'

export type SpacerProps = SpacerProperties & Omit<HTMLStyledProps<'div'>, keyof SpacerProperties >


export declare const Spacer: Component<SpacerProps>
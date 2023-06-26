/* eslint-disable */
import { Component } from 'solid-js'
import { WrapProperties } from '../patterns/wrap'
import { HTMLStyledProps } from '../types/jsx'

export type WrapProps = WrapProperties & Omit<HTMLStyledProps<'div'>, keyof WrapProperties >


export declare const Wrap: Component<WrapProps>
/* eslint-disable */
import { Component } from 'solid-js'
import { VstackProperties } from '../patterns/vstack'
import { HTMLStyledProps } from '../types/jsx'

export type VstackProps = VstackProperties & Omit<HTMLStyledProps<'div'>, keyof VstackProperties >


export declare const VStack: Component<VstackProps>
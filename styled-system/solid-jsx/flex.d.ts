/* eslint-disable */
import { Component } from 'solid-js'
import { FlexProperties } from '../patterns/flex'
import { HTMLStyledProps } from '../types/jsx'

export type FlexProps = FlexProperties & Omit<HTMLStyledProps<'div'>, keyof FlexProperties >


export declare const Flex: Component<FlexProps>
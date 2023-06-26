/* eslint-disable */
import { Component } from 'solid-js'
import { StackProperties } from '../patterns/stack'
import { HTMLStyledProps } from '../types/jsx'

export type StackProps = StackProperties & Omit<HTMLStyledProps<'div'>, keyof StackProperties >


export declare const Stack: Component<StackProps>
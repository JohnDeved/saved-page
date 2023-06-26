/* eslint-disable */
import { Component } from 'solid-js'
import { ContainerProperties } from '../patterns/container'
import { HTMLStyledProps } from '../types/jsx'

export type ContainerProps = ContainerProperties & Omit<HTMLStyledProps<'div'>, keyof ContainerProperties >


export declare const Container: Component<ContainerProps>
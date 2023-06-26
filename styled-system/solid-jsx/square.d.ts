/* eslint-disable */
import { Component } from 'solid-js'
import { SquareProperties } from '../patterns/square'
import { HTMLStyledProps } from '../types/jsx'

export type SquareProps = SquareProperties & Omit<HTMLStyledProps<'div'>, keyof SquareProperties >


export declare const Square: Component<SquareProps>
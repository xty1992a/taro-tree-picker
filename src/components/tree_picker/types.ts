import React from 'react'

export interface Item {
  value: string
  label: string
  children?: Item[]
}

export interface FlatItem {
  value: string
  label: string
  parent: string
  index: number
}

export interface RenderLabelProps {
  value?: string
  items?: Item[]
  placeholder?: string
}

export interface ITreePickerProps {
  value?: string
  /** 树形数据，避免使用闭包，静态数据请提取到函数外部，动态数据请使用state */
  options?: Item[]
  onChange?: (value: string) => void
  renderLabel?: (props: RenderLabelProps) => React.ReactNode
  placeholder?: string
}

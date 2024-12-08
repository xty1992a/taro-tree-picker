import React, {PropsWithChildren} from "react";

export interface IBlock {
  id: string
  label: string
  is_overlapping: boolean
  is_covered: boolean
  boundingClientRect: {
    top: number
    height: number
  }
}

export interface ContextValue {
  register: (id: string, initial?: Partial<IBlock>) => void
  unregister: (id: string) => void
  updateBlock: (id: string, block: IBlock) => void
  is_overlapping: boolean
  current_block: string
  blocks: IBlock[]
}

export type RenderNav = (context: {
  is_overlapping: boolean
  current_block: string
  blocks: IBlock[]
  onPick: (id: string) => void
}) => React.ReactNode

export interface StickyNavProps extends PropsWithChildren{
  /** 顶部偏移 */
  offset?: number
  /** 自定义顶部导航栏 */
  renderNav?: RenderNav
}
export interface StickyNavItemProps extends PropsWithChildren{
  id: string
  label: string
  renderTitle?: (label: string) => React.ReactNode
}


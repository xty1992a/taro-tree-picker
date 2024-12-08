import React, {useEffect, useRef} from 'react'
import Taro from '@tarojs/taro'
import * as types from './types'

const isH5 = process.env.TARO_ENV === 'h5'

export const Context = React.createContext<types.ContextValue>({
  register: (id: string) => {
  },
  unregister: (id: string) => {
  },
  updateBlock: (id: string, block: Partial<types.IBlock>) => {
  },
  is_overlapping: false,
  current_block: '',
  blocks: []
})

const thresholds = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
export const useContext = () => React.useContext(Context)

export const useStore = () => {
  const [blocks, setBlocks] = React.useState<types.IBlock[]>([])

  const clear = useRef<Record<string, () => void>>(Object.create(null))
  const current = Taro.getCurrentInstance()

  const register: types.ContextValue['register'] = (id: string, initial) => {
    const newBlock = {
      id,
      is_overlapping: false,
      is_covered: false,
      label: '',
      boundingClientRect: {top: 0, height: 0},
      ...initial,
    }
    setBlocks(b => [...b, newBlock])

    const h5 = () => {
      const ob = new IntersectionObserver((entries) => {
        const entry = entries[0]
        console.log('entries', entries, entry.target.id)
        const boundingClientRect = entry.boundingClientRect
        const is_overlapping = entry.boundingClientRect.top < 0
        const is_covered = is_overlapping && entry.intersectionRect.height > 0
        setBlocks(list => list.map((b) => {
          if (b.id !== id) return b

          return {
            ...b,
            is_covered,
            is_overlapping,
            boundingClientRect,
          }
        }))
      }, {threshold: thresholds, root: null, rootMargin: '0px'})

      const target = document.getElementById(id)
      console.log('observe', target)
      target && ob.observe(target)
      clear.current[id] = () => ob.disconnect()
    }
    const weapp = () => {
      const ob = Taro.createIntersectionObserver(current.page!, {thresholds})

      setTimeout(() => {
        ob.relativeToViewport({top: 0}).observe(`#${id}`, (entry) => {
          const boundingClientRect = entry.boundingClientRect
          const is_overlapping = entry.boundingClientRect.top < 0
          const is_covered = is_overlapping && entry.intersectionRect.height > 0
          setBlocks(list => list.map((b) => {
            if (b.id !== id) return b
            return {
              ...b,
              is_covered,
              is_overlapping,
              boundingClientRect,
            }
          }))
        })

        clear.current[id] = () => ob.disconnect()
      }, 100)
    }

    isH5 ? h5() : weapp()
  }

  const unregister: types.ContextValue['unregister'] = (id: string) => {
    console.log('unregister', id)
    const newBlocks = blocks.filter((block) => block.id !== id)
    clear.current[id]?.()
    setBlocks(newBlocks)
  }

  const updateBlock: types.ContextValue['updateBlock'] = (id: string, block: types.IBlock) => {
    setBlocks(list => list.map((b) => b.id === id ? {...b, ...block} : b))
  }

  const is_overlapping = blocks.some((block) => block.is_overlapping)
  const current_block = blocks.find((block) => block.is_covered)?.id ?? ''

  useEffect(() => {
    const o = clear.current
    return () => {
      console.log('clear')
      Object.values(o).forEach((c) => c())
    }
  }, [])

  return {
    register,
    unregister,
    updateBlock,
    is_overlapping,
    current_block,
    blocks,
  }
}

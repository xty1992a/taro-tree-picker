import React, {PropsWithChildren, useEffect, useRef, useState} from 'react'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import {ScrollView, View} from '@tarojs/components'
import {Context, useContext, useStore} from './context'
import * as types from './types'
import './index.less'

const Navbar: types.RenderNav = (props) => {
  const {blocks, onPick, is_overlapping} = props

  return <View className={classnames('sticky-nav-bar', {
    'sticky-nav-bar__visible': is_overlapping
  })}
  >
    <ScrollView scrollX>
      <View className='sticky-nav-bar-list' style={{
        // @ts-ignore
        ['--block-count' as string]: blocks.length
      }}
      >
        {
          blocks.map((block) => (
            <View
              key={block.id}
              className={`sticky-nav-bar-item ${block.is_covered ? 'sticky-nav-bar-item__active' : ''}`}
              onClick={() => onPick(block.id)}
            >{block.label}</View>
          ))
        }
      </View>
    </ScrollView>
  </View>
}

export const StickyNavItem: React.FC<types.StickyNavItemProps> = (props) => {
  const {register, unregister, updateBlock} = useContext()
  const ref = useRef({props, updateBlock, unregister, register})

  useEffect(() => {
    ref.current.props = props
    ref.current.updateBlock = updateBlock
    ref.current.unregister = unregister
    ref.current.register = register
  });

  useEffect(() => {
    const r = ref.current
    console.log('register', r.props.id)
    r.register(r.props.id, {label: r.props.label})

    return () => {
      r.unregister(r.props.id)
    }
  }, [])


  return <View id={props.id} className='sticky-nav-item'>
    {props.renderTitle ? props.renderTitle(props.label) : <View className='sticky-nav-title'>{props.label}</View>}
    {props.children}
  </View>
}


export const StickyNav: React.FC<types.StickyNavProps> & {
  Item: typeof StickyNavItem
} = (props) => {
  const {offset = 0, renderNav = Navbar} = props
  const storeValue = useStore()
  const {register, is_overlapping, current_block, blocks, updateBlock, unregister} = storeValue

  console.log(blocks)
  return (
    <View className='sticky-nav'>
      <Context.Provider value={storeValue}>
        {renderNav({
          is_overlapping,
          current_block,
          blocks,
          onPick: (id) => {
          }
        })}
        {props.children}
      </Context.Provider>
    </View>
  )
}
StickyNav.Item = StickyNavItem

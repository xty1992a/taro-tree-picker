import React, {useEffect, useMemo, useState} from 'react'
import Taro from '@tarojs/taro'
import {View, Picker} from '@tarojs/components'
import * as types from "./types";
import './index.less'
import * as tools from './tools'

const dftRenderLabel = (props: types.RenderLabelProps): React.ReactNode => {
  const {value, placeholder, items} = props
  if (!value) return <View className='tree-picker--placeholder'>{placeholder}</View>
  return (
    <View className='tree-picker--value'>
      {items?.map(n => n.label).join('-')}
    </View>
  )
}

const nope = () => {
}

/**
 * 树形选择器
 * 基于多列选择器实现，但接受树形数据
 * 所有状态都从value衍生，value->target->idx + columns
 * 用户选择时，由[column][index]计算得出新的target(非叶子时)，再从target计算出新的idx + columns
 * 回显时，将value转为target，再从target计算出idx + columns，如果value不合法，则使用第一个叶子节点
 * */
export const TreePicker: React.FC<types.ITreePickerProps> = (props) => {
  const {value='', options = [], placeholder='请选择', onChange = nope, renderLabel = dftRenderLabel} = props

  const items = useMemo(() => tools.flatTree(options), [options])
  const itemsMap = useMemo(() => tools.flatMap(items), [items])
  const [target, setTarget] = useState('') // 最右侧的节点（叶子）

  useEffect(() => {
    const item = itemsMap.get(value)
    if (!item) {
      const leaf = tools.firstLeaf(options)
      console.log('外部传入的 value 无效，使用第一个叶子节点', leaf.value)
      setTarget(leaf.value)
      return
    }
    console.log('外部传入的 value 有效', item.value)
    setTarget(item.value)
  }, [options, value, itemsMap])

  const idx = useMemo(() => tools.valueToIdx2(target, itemsMap), [target, itemsMap])
  const columns = useMemo(() => tools.idxToColumns(idx, options), [idx, options])

  return (
    <Picker
      className='tree-picker'
      mode='multiSelector'
      value={idx}
      range={columns}
      rangeKey='label'
      onChange={() => {
        const item = tools.toItems(idx, columns).pop()
        item && onChange(item.value)
      }}
      onCancel={() => {
        setTarget(value)
      }}
      onColumnChange={e => {
        const {column, value: index} = e.detail
        const item = columns[column][index]
        const leaf = tools.firstLeaf([item])
        setTarget(leaf.value)
      }}
    >
      {renderLabel({
        value,
        items: tools.valueToItems2(target, itemsMap),
        placeholder,
      })}
    </Picker>
  )
}
export * as treeTypes from './types'
export * as treeTools from './tools'

import * as types from "./types";

/**
 * 将树形结构的数据扁平化
 * */
export const flatTree = (items: types.Item[], parent = ''): types.FlatItem[] => {
  return items.reduce((acc, item, index) => {
    const {value, label, children} = item
    // 展平时，保留层级和父节点信息以及原始索引
    const flatItem = {value, label, parent, index}
    return [...acc, flatItem, ...flatTree(children || [], value)]
  }, [] as types.FlatItem[])
}

export function flatMap(items: types.FlatItem[]): Map<string, types.FlatItem> {
  const map = new Map<string, types.FlatItem>()
  items.forEach(item => {
    map.set(item.value, item)
  })
  return map
}

/**
 * 将 value 转换为 idx 数组
 * */
export const valueToIdx = (value: string, items: types.FlatItem[]): number[] => {
  return valueToItems(value, items).map(n => n.index)
}

/**
 * 同上，使用map优化，将O(n)的查找降为O(1)
 * */
export const valueToIdx2 = (value: string, map: Map<string, types.FlatItem>): number[] => {
  return valueToItems2(value, map).map(n => n.index)
}

/**
 * 根据idx数组组装对应的columns
 * */
export const idxToColumns = (idx: number[], items: types.Item[]): types.Item[][] => {
  const columns: types.Item[][] = []
  let children = items
  idx.forEach(i => {
    const item = children[i]
    columns.push(children)
    children = item.children || []
  })
  return columns
}

/**
 * 找出第一个叶子节点（不是最深的，只是第一个）
 * */
export const firstLeaf = (items: types.Item[]): types.Item => {
  const item = items[0]
  return item.children ? firstLeaf(item.children) : item
}

/**
 * 将 value 转换为 items 数组
 * 上溯出path，并将path的每一个value都转为相应的item
 * */
export const valueToItems = (value: string, items: types.FlatItem[]): types.FlatItem[] => {
  const results: types.FlatItem[] = []
  let parent = value
  while (parent) {
    // todo 瓶颈 O(n) 最终复杂度 columns.length * O(n)
    const item = items.find(it => it.value === parent)
    if (item) {
      results.unshift(item)
      parent = item.parent
    } else {
      break
    }
  }
  return results
}

/**
 * 同上，空间换时间，使用map将O(n)的查找降为O(1)
 * */
export const valueToItems2 = (value: string, map: Map<string, types.FlatItem>): types.FlatItem[] => {
  const results: types.FlatItem[] = []
  let parent = value
  while (parent) {
    // 最终复杂度 columns.length * O(1)
    const item = map.get(parent)
    if (item) {
      results.unshift(item)
      parent = item.parent
    } else {
      break
    }
  }
  return results
}

/**
 * 将idx数组转换为items数组
 * */
export const toItems = (idx: number[], columns: types.Item[][]): types.Item[] => {
  return idx.map((i, level) => columns[level][i])
}

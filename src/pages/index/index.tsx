import {useState} from "react";
import {View, Text} from '@tarojs/components'
import './index.less'
import {TreePicker, treeTypes} from '../../components/tree_picker'

const regionItems: treeTypes.Item[] = [
  {
    label: '广东省',
    value: '440000',
    children: [
      {
        label: '广州市',
        value: '440100',
        children: [
          {
            label: '越秀区',
            value: '440104'
          },
          {
            label: '荔湾区',
            value: '440103'
          },
          {
            label: '天河区',
            value: '440106'
          }
        ]
      },
      {
        label: '深圳市',
        value: '440300',
        children: [
          {
            label: '福田区',
            value: '440304'
          },
          {
            label: '南山区',
            value: '440305'
          },
          {
            label: '罗湖区',
            value: '440303'
          }
        ]
      }
    ]
  },
  {
    label: '江西省',
    value: '360000',
    children: [
      {
        label: '南昌市',
        value: '360100',
        children: [
          {
            label: '东湖区',
            value: '360102'
          },
          {
            label: '西湖区',
            value: '360103'
          },
          {
            label: '青云谱区',
            value: '360104'
          }
        ]
      },
      {
        label: '九江市',
        value: '360400',
        children: [
          {
            label: '浔阳区',
            value: '360403'
          },
          {
            label: '庐山区',
            value: '360402'
          },
          {
            label: '濂溪区',
            value: '360404'
          }
        ]
      }
    ]
  },
  {
    label: '浙江省',
    value: '330000',
    children: [
      {
        label: '杭州市',
        value: '330100',
        children: [
          {
            label: '西湖区',
            value: '330106'
          },
          {
            label: '拱墅区',
            value: '330105'
          },
          {
            label: '下城区',
            value: '330103'
          }
        ]
      },
      {
        label: '宁波市',
        value: '330200',
        children: [
          {
            label: '海曙区',
            value: '330203'
          },
          {
            label: '江北区',
            value: '330205'
          },
          {
            label: '镇海区',
            value: '330211'
          }
        ]
      }
    ]
  }
]

export default function Index() {
  const [region, setRegion] = useState('330205')
  return (
    <View className='index'>
      <View className='block'>
        <View className='field'>
          <View className='field-label'>地址</View>
          <View className='field-value'>
            <TreePicker value={region} options={regionItems} onChange={setRegion} />
          </View>
        </View>
      </View>
    </View>
  )
}

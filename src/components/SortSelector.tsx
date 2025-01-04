import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
  onSelectOrder:(sortOrder:string)=>void,
  SortOrder:string
}

const SortSelector = ({onSelectOrder,SortOrder}:Props) => {

  const sortOrder = [
    {value:'',label:'Relevance'},
    {value:'-added',label:'Data added'},
    {value:'name',label:'Name'},
    {value:'-released',label:'Released date'},
    {value:'-metacritic',label:'Popularity'},
    {value:'-rating',label:'Average rating'},
  ]

  const currentSortOrder = sortOrder.find((order) => order.value === SortOrder)
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By: {currentSortOrder?.label || "Relevance"}</MenuButton>
    <MenuList>
      {sortOrder.map((order) => <MenuItem key={order.value} value={order.value} onClick={()=>onSelectOrder(order.value)}>{order.label}</MenuItem>)}
    </MenuList>
</Menu>
  )
}

export default SortSelector

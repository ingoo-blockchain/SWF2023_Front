import { Button } from '@/src/components/common/button'
import { useEffect, useState } from 'react'

interface FundFilterProps {}
const FundFilter: React.FC<FundFilterProps> = ({}) => {
    const [isFilterActive, setIsFilterActive] = useState<boolean>(false)
    const categories = ['All', 'ERC-721', 'ERC-20', 'ERC-1155', 'DAO', '서비스기획', 'DeFi']
    const [selected, setSelected] = useState<string>('All')
    // useEffect()

    const filterList = (category: string) => {
        console.log(category)
        setSelected(category)
        // e.target?
    }
    return (
        <article className="flex">
            {/* <Button
                color={`${selected !== 'All' ? 'gray' : 'red'}`}
                size="w-fit"
                style="pr-5 pl-5 pt-2 pb-2 m-4"
                fontSize="sm"
                fontWeight="semiBold"
                onClick={() => setIsFilterActive((prev) => !prev)}
            >
                All
            </Button>
            {isFilterActive ?
            
            : */}
            {categories.map((category) => (
                <Button
                    key={`btn-${category}`}
                    color={`${selected !== category ? 'gray' : 'red'}`}
                    size="w-fit"
                    style={`pr-5 pl-5 pt-2 pb-2 mt-4 mb-4 mr-4 ${selected !== category ? 'text-black' : ''}`}
                    fontSize="sm"
                    fontWeight="semiBold"
                    onClick={() => filterList(category)}
                >
                    {category}
                </Button>
            ))}
        </article>
    )
}

export default FundFilter

import React, { FormEvent } from 'react'
import CustomInput from '../../common/customInput'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { FilterFormAction } from './filterFormAction'

type Props = {}

const FilterForm = (props: Props) => {
    const searchParams = useSearchParams()

  return (
    <form action={FilterFormAction}>
        <CustomInput name='query' text='query' defaultValue={"d"}/>
        <Button>Apply Filters</Button>
    </form>

  )
}

export default FilterForm
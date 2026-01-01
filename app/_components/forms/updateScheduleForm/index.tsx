import { useActionState } from 'react'
import CustomInput from '../../common/customInput'
import { Button } from '@/components/ui/button'
import { UpdateScheduleAction } from './updateScheduleAction'
import { TScheduleType } from '@/app/_types'

type Props = {
    data:TScheduleType
}

const UpdateScheduleForm = ({data}: Props) => {
    const [state,formAction,isPending]=useActionState(UpdateScheduleAction,{})
    const handleSubmit=(formData:FormData)=>{

    }
  return (
    <form action={handleSubmit} className="mx-2  ">
      <CustomInput name="name" text="Schedule Name" state={state} />
      <CustomInput
        name="description"
        text="Schedule Description"
        state={state}
      />
      <Button className="mx-auto block " disabled={isPending}>
        {isPending ? "Creating..." : "Create Schedule"}
      </Button>
    </form>
  )
}

export default UpdateScheduleForm
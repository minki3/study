import FocusComponents from '@/app/components/FocusComponent'
import MotionLearn from '@/app/components/MotionLearn'
import { CustomnButton } from '@/app/components/ui/CustomButton'
import { getSession } from 'next-auth/react'
export default async function Home() {
  const session = await getSession()
  console.log('111', session)
  return (
    <div className=" h-[100%]">
      <MotionLearn>
        <h1>hihi</h1>
      </MotionLearn>

      <FocusComponents />
      <CustomnButton
        label="test"
        size="lg"
        color="primary"
        addClassName="text-red-500"
      />
    </div>
  )
}

'use client'
import QRCode from 'qrcode.react'
import { useSession } from 'next-auth/react'
import { CustomnButton } from '@/app/components/ui/CustomButton'
export default function Qrcode() {
  const session = useSession()
  console.log(session)
  // const data = {
  //   id: '12321321',
  //   password: '123131231',
  // }
  const test = true
  return (
    <div>
      <QRCode value="sdfa" />
      <CustomnButton
        label="test"
        size={test ? 'lg' : 'sm'}
        color="primary"
        addClassName="text-red-500"
      />
    </div>
  )
}

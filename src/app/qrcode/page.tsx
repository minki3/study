'use client'
import QRCode from 'qrcode.react'
import { useSession } from 'next-auth/react'
export default function Qrcode() {
  const session = useSession()
  console.log(session)
  // const data = {
  //   id: '12321321',
  //   password: '123131231',
  // }
  return (
    <div>
      <QRCode value="sdfa" />
    </div>
  )
}

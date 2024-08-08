'use client'

import { useState } from 'react'
import { signIn as login, signOut } from 'next-auth/react'

export default function Signin() {
  const [loginInformation, setLoginInformation] = useState({
    id: '',
    password: '',
  })
  const handleLoginInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInformation({ ...loginInformation, [name]: value })
  }
  console.log(loginInformation)
  const handleKakao = async () => {
    const result = await login('kakao', {
      redirect: true,
      callbackUrl: '/',
    })
  }
  return (
    <div>
      <input
        placeholder="id"
        name="id"
        onChange={(e) => {
          handleLoginInformation(e)
        }}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={(e) => {
          handleLoginInformation(e)
        }}
      />
      <button
        onClick={() => {
          login()
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          signOut()
        }}
      >
        로그아웃
      </button>
      <button onClick={handleKakao}>카카오 ㄲ</button>
    </div>
  )
}

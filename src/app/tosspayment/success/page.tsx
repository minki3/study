'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Router from 'next/router'

export default function SuccessPage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있다.
    const requestData = {
      orderId: searchParams.get('orderId'),
      amount: searchParams.get('amount'),
      paymentKey: searchParams.get('paymentKey'),
    }

    async function confirm() {
      // 서버에 보낼 데이터
      const response = await fetch('/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      const json = await response.json()

      if (!response.ok) {
        // 결제 실패 비즈니스 로직을 구현하세요.
        Router.push(`/fail?message=${json.message}&code=${json.code}`)
        return
      }

      // 결제 성공 비즈니스 로직을 구현하세요.
    }
    confirm()
  }, [])

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2>결제 성공</h2>
        <p>{`주문번호: ${searchParams.get('orderId')}`}</p>
        <p>{`결제 금액: ${Number(
          searchParams.get('amount'),
        ).toLocaleString()}원`}</p>
        <p>{`paymentKey: ${searchParams.get('paymentKey')}`}</p>
      </div>
    </div>
  )
}

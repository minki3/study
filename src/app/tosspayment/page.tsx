'use client'
import { useEffect, useState } from 'react'
import {
  loadTossPayments,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk'
const randomId = `1234` // uuid
const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm'

export default function tosspayment() {
  // 토스에서 전자결제 신청이후 사용

  // test key
  const [widgets, setWidgets] = useState<TossPaymentsWidgets>()

  useEffect(() => {
    // 위젯 초기화
    const widgetsFetch = async () => {
      try {
        const tosspayment = await loadTossPayments(clientKey)
        const widgets = tosspayment.widgets({ customerKey: randomId })
        setWidgets(widgets)
      } catch (e) {
        console.log(e)
      }
    }
    widgetsFetch()
  }, [clientKey, randomId])

  useEffect(() => {
    if (!widgets) return
    const renderWidget = async () => {
      try {
        // 가격 설정
        await widgets.setAmount({ currency: 'KRW', value: 1_000 })

        await Promise.all([
          // ------  결제 UI 렌더링 ------
          widgets.renderPaymentMethods({
            selector: '#payment-method',
            variantKey: 'DEFAULT',
          }),
          // ------  이용약관 UI 렌더링 ------
          widgets.renderAgreement({
            selector: '#agreement',
            variantKey: 'AGREEMENT',
          }),
        ])
      } catch (e) {
        console.log(e)
      }
    }
    renderWidget()
  }, [widgets])
  console.log(window.location.href + 'success')
  const payment = async () => {
    try {
      // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
      // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
      // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
      if (widgets) {
        await widgets.requestPayment({
          orderId: 'DiLJeY9JtVgdh-oSSam3N',
          orderName: '토스 티셔츠 외 2건',
          successUrl: window.location.href + 'success',
          failUrl: window.location.href + 'fail',
          customerEmail: 'customer123@gmail.com',
          customerName: '김토스',
          customerMobilePhone: '01012341234',
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      {/* 결제 UI */}
      <div id="payment-method" />
      {/* 이용약관 UI */}
      <div id="agreement" />
      <button onClick={payment}>결제하기</button>
    </div>
  )
}

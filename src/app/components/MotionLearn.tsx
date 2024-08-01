'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function MotionLearn({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{
        // 처음 마운트 될 때 상태,
        // 마운트시 애니메이션을 원하지 않다면 initial = {false}
        x: 0,
      }}
      animate={{
        // 애니메이션이 끝났을 때의 상태
        x: 50,
      }}
      transition={{
        // animate state까지 어떻게 변할지 정하는 옵션
        // 여러 transition type을 정의 할 수 있다.
        ease: 'easeIn',
        duration: 0.7,
      }}
      className="h-[30%]"
    >
      {children}
    </motion.div>
  )
}

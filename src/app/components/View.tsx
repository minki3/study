import ContributionView from '@/app/components/ContributionView'
import MobileView from '@/app/components/MobileView'
import { useState } from 'react'

export default function View() {
  const [isConributionsView, setIsConributionsView] = useState(false)

  const toggleContribution = () => {
    setIsConributionsView((prev) => !prev)
  }
  console.log(1)
  return (
    <div className=" basis-1/2 flex flex-col items-center h-[100vh]">
      <div
        className="p-4 m-2 border border-black cursor-pointer"
        onClick={toggleContribution}
      >
        {isConributionsView && <span>Mobile</span>}
        {!isConributionsView && <span>Contributions</span>}
      </div>
      {isConributionsView && <ContributionView />}
      {!isConributionsView && <MobileView />}
    </div>
  )
}

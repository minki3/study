// import React from 'react'
// import { useFormContext, useFieldArray } from 'react-hook-form'
// import { TData } from '@/app/form/page'

// export default function Significant() {
//   const { register, control, handleSubmit } = useFormContext<TData>()
//   const { fields, append } = useFieldArray({
//     control,
//     name: 'filed.0.significant',
//   })

//   const onAppend = () => {
//     append({
//       about: '',
//     })
//   }
//   return (
//     <>
//       {fields.map((item, idx) => {
//         return (
//           <input
//             key={item.about}
//             {...register(`filed.0.significant.0.about`)}
//           />
//         )
//       })}
//       <button
//         type="button"
//         onClick={() => {
//           onAppend()
//         }}
//       >
//         +
//       </button>
//     </>
//   )
// }

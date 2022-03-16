import { json, useLoaderData } from 'remix'

import { getColors } from './getColors'

export const loader = async ({ params }) => {
  
  return json()
}

export default function ColorShow () {
  const color = useLoaderData()

  return (
    <div style={{ backgroundColor: color.hex, width: '100%', height: '100%' }}>
      <h1>{color.name}</h1>
    </div>
  )
}

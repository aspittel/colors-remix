import { json, Link, useLoaderData } from 'remix'
import { getColors } from './getColors'
import { Auth, withSSRContext } from 'aws-amplify'
import { Blog } from '../../../src/models'
import { serializeModel } from '@aws-amplify/datastore/ssr'

export const loader = async () => {
  const SSR = withSSRContext()
  const models = await SSR.DataStore.query(Blog)
  return json(serializeModel(models))
}

function ColorList () {
  const colors = useLoaderData()
  console.log(colors)

  async function signUp (e) {
    e.preventDefault()
    try {
      const { user } = await Auth.signUp({
        username: 'spittela@amazon.com',
        password: 'Helloworld123!'
      })

      console.log(user)
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

  return (
    <div>
      <h1>Colors!</h1>
      <button onClick={signUp}>sign up</button>
      <ul>
        {/* {colors.map(color => (
          <li key={color.slug}>
            <Link to={color.slug}>
              {color.name}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default ColorList

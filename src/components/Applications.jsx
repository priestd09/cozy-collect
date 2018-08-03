import React from 'react'

import Loading from '../components/Loading'
import { Query } from 'cozy-client'

export const Applications = props => (
  <div>
    <h2>My apps</h2>
    <Query
      query={client => {
        return client.all('io.cozy.apps')
      }}
    >
      {({ data, fetchStatus }) => {
        console.debug({ data })
        return fetchStatus !== 'loaded' ? (
          <Loading />
        ) : (
          <div>{data.map(app => <div>{app.name}</div>)}</div>
        )
      }}
    </Query>
  </div>
)

export default Applications

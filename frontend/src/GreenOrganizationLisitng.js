import React, { useEffect, useState } from 'react'
// import { firestore } from './firebase'
import { getFirestore } from 'firebase/firestore'
import { app } from './firebase'

function GreenOrganizationLisitng() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const db = getFirestore(app)
    const collectionRef = db.collection('Green');
    collectionRef.get().then((querySnapshot) => {
      console.log(querySnapshot)
      setData(querySnapshot)
      console.log(data)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
    })

  })
  return (
    <>
      {loading ? <p>loading</p> : <p>Not loading</p>}
    </>
  )
}

export default GreenOrganizationLisitng

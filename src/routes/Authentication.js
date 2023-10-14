import React, { useRef, useEffect } from 'react'
import AddData from './AddData'
import AddMedicalData from './AddMedicalData'
import style from './AddData.module.css'
import { Card } from '@material-ui/core'

export default function Authenticate(props) {
  const cardRef = useRef()
  const {
    username, //0x8ea7632d7e832231d6cd90dc3bf2fe8bd26103173c9667b159e66310914d0d78
    password,
  } = props

  useEffect(() => {
    if(cardRef.current.scrollLeft > 0)
    window.addEventListener('resize', correctPosition)
    return () => {
      window.removeEventListener('resize', correctPosition)
    }
  }, [])

  const correctPosition = () => {
    cardRef.current.scrollTo(cardRef.current.scrollWidth/2,0)
  }

  const next = () => {
    cardRef.current.scrollBy(1000000,0)
  }
  const handleBack = () => {
    console.log(cardRef.current.scrollWidth)
    cardRef.current.scrollTo(0,0)
}
  return (
    <div>
      <Card className={style.cardsContainer} ref={cardRef}>
      <Authenticate
        username={username}
        password={addUpdatePatientBio}
      />
      </Card>
    </div>
  )
}

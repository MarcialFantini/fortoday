import React from 'react'
import { Cant, CenterCircle, ContainerCalories, MidCircle, Text } from './styled'

export const Calories = () => {
  return (
    <ContainerCalories>
        <MidCircle>
            <CenterCircle>
                <Cant>2412</Cant>
                <Text>kcal</Text>
            </CenterCircle>
        </MidCircle>
    </ContainerCalories>
  )
}

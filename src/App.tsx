
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { ContainerCard } from './components/ContainerCard'
import { Card } from './components/Card'
import { Walk } from './components/Walk'
import walk from './assets/walk.png'
import { Water } from './components/Water'
import water from './assets/drinking.png'
import { Sleep } from './components/Sleep'
import Moon from './assets/moon.png'
import { Calories } from './components/Calories'
import { Heart } from './components/Heart'
import calories from './assets/calories.png'
import heart from './assets/heart.png'
import { Training } from './components/Training'
import clock from './assets/clok.png'

function App() {

  

  return (
    <div className="App">
      <Navbar></Navbar>
      <ContainerCard>
        <Card
        src={walk}
        title="Walk"
        >
          <Walk></Walk>
        </Card>
      <Card
      title='Water'
      src={water}
      >
        <Water/>
      </Card>
      <Card
      src={Moon}
      title='Sleep'
      >
        <Sleep/>
      </Card>
      <Card
      
      background="orangered"
      title='Calories'
      src={calories}
      >
        <Calories/>

      </Card>
      <Card
      title='Heart'
      src={heart}
      >
        <Heart/>
      </Card>
      <Card
      title='Training'
      src={clock}
      >
        <Training/>
      </Card>
      </ContainerCard>
    </div>
  )
}

export default App

import Achievements from '../achievement/achievements';
import Interiit from '../InterIIT/inter-iit';
import Carousel from '../InterIIT/carousel';


const AchievementsAndInteriit = () => {
  return (
    <div>
        <div className='box1'>
          <br></br>
          <h1><i>Achievements</i></h1>
          <div className="b-1">
              <Achievements />
              <Achievements />
          </div>
        </div>

        <div className='box2'>
              <br></br>
              <h1><i>Inter-IIT</i></h1>
              <div className="b-2">
                  <div className='innercover-1'>
                      <Carousel />
                  </div>
                  <Interiit />
              </div>
        </div>

    </div>
  )
}

export default AchievementsAndInteriit
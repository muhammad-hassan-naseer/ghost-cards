import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import Landing from './Landing/Landing'
import RoadMap from './Features/RoadMap'
import Story from './Story/Story'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/road-map" component={RoadMap} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/story" component={Story} />
      </BrowserRouter>
    </div>
  )
}

export default App

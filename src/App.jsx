import './App.css'
import "../node_modules/bulma/css/bulma.css"
import Course from './Course'
import Angular from "./assets/images/angular.jpg"
import Boostrap from "./assets/images/bootstrap5.png"
import Ccsharp from "./assets/images/ccsharp.png"
import KompleWeb from "./assets/images/kompleweb.jpg"

function App() {
  return (
    <>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Primary hero</p>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course title = "Angular" description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ex quidem itaque ipsam cupiditate deserunt, exercitationem fuga officiis est illo provident recusandae perferendis quae unde pariatur amet tempora culpa voluptatem?" img = {Angular}></Course>
          </div>
          <div className="column">
            <Course title = "Boostrap" description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ex quidem itaque ipsam cupiditate deserunt, exercitationem fuga officiis est illo provident recusandae perferendis quae unde pariatur amet tempora culpa voluptatem?" img = {Boostrap}></Course>
          </div>
          <div className="column">
            <Course title = "Ccsharp" description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ex quidem itaque ipsam cupiditate deserunt, exercitationem fuga officiis est illo provident recusandae perferendis quae unde pariatur amet tempora culpa voluptatem?" img = {Ccsharp}></Course>
          </div>
          <div className="column">
            <Course title = "KompleWeb" description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ex quidem itaque ipsam cupiditate deserunt, exercitationem fuga officiis est illo provident recusandae perferendis quae unde pariatur amet tempora culpa voluptatem?" img = {KompleWeb}></Course>
          </div>
        </div>
        <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Html</a></li>
    <li><a>Css</a></li>
    <li><a>Javascript</a></li>
    <li><a>Boostrap</a></li>
    <li><a>React</a></li>
    <li><a>Angular</a></li>
  </ul>
</div>
<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Users</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Views</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}

export default App

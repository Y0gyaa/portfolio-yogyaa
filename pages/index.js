
import Particle_background from '../components/particle_background.js'
import Foreground_content from '../components/foreground_content.js';
import Circle_navbar from '../components/circle_navbar.js';
import Menu_bar from '../components/menu_bar.js';

export default function Home() {
  return (
    <div>
      <Particle_background />
      <Circle_navbar />
      <Foreground_content />
      <Menu_bar/>
      
    </div>
  )
}
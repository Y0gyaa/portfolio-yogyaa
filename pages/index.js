
import Particle_background from '../components/particle_background.js'
import Foreground_content from '../components/foreground_content.js';

export default function Home() {
  return (
    <div className="full-page">
      <Particle_background />
      <Foreground_content />
    </div>
  )
}
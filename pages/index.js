import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Particle_background from '../components/particle_background.js'
import Foreground from '../components/foreground.js'

export default function Home() {
  return (
    <div>
      <Particle_background/>
      <Foreground/>
    </div>
  )
}
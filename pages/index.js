import Head from 'next/head'
import { HomeSlider } from '../components/Slider/HomeSlider'
import { Clients } from '../components/home/Clients'
import { Services } from '../components/home/Services'
import { HomeLayout } from '../layout/HomeLayout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout />
      <HomeSlider />

      <div className="md:tw-container tw-mx-auto">
        <Services />
      </div>
      <Clients />
    </div>
  )
}

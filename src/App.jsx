import Header from './components/Header.jsx'
import Timeline from './components/Timeline.jsx'
import Footer from './components/Footer.jsx'
import AudioPlayer from './components/AudioPlayer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <Timeline />
      <Footer />
      <AudioPlayer />
    </div>
  )
}

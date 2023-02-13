import { Routes, Route } from "react-router-dom"
import VideoForm from "./components/Videos/VideoForm"
import VideoList from "./components/Videos/VideoList"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VideoList/>} />
        <Route path="videos" element={<VideoForm />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
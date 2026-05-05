import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CardPage from './components/CardPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <CardPage />
      </div>
    </div>
  )
}

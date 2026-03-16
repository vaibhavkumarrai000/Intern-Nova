import MainDisplay from "./_components/jobdisplay"
import Sidebar from "./_components/sidebar"
import Topbar from "./_components/topbar"

const page = () => {
  return (
    <div className="h-screen flex bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4">
          <MainDisplay />
        </main>
      </div>
    </div>
  )
}

export default page

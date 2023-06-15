import SideBar from '@/components/SideBar'
import '../styles/globals.css'
import Login from '@/components/Login'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {
          1 === 1 + 1 ? (<Login />) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-[16rem] h-screen overflow-y-auto md:min-w-[16rem]">
                <SideBar />
              </div>
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>)
        }

      </body>
    </html>
  )
}

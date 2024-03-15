import "@styles/global.css"
import Nav from "@components/nav"
import Provider from "@components/provider"


export const metadata = {
    title:"prompshare",
    description:"discover and share AI prompts"
}

const RootLayout = ({ children }) => {

  return (
    <html lang="en">

        <body>
        <Provider>
        <div className="main">
            <div className="gradient"/>
        </div>
        </Provider>
        </body>
        

        <main className="app">
          <Nav/>
            {children}
        </main>

    </html>
  )
}

export default RootLayout;

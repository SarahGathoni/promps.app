import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
      <br className="max-mid:hidden"/>
      <span className="orange_gradient text-center">AI-powered prompts</span>
      </h1>
      
      <p className='desc text-center'>
      Promptshare is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
      
    <Feed/>
    </section>

    
  )
}

export default Home;

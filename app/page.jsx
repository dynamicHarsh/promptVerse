import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share 
            <br className="max-md:hidden"/>
            <span className=" blue_grad text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Welcome to <span className='blue_grad'>PromptVerse</span>, your open-source AI prompting tool for discovering, creating, and sharing imaginative prompts in the modern creative landscape!</p>
        <Feed/>
    </section>
  )
}

export default Home
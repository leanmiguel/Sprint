import Head from "next/head"
import mock from "../images/mock.jpg"

const Home = () => {
  return (
    <div>
      <Head>
        <title>sprint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Finish Your Projects Faster</h1>
        <h4>
          Sprint is the best way to supercharge your productivity. Collaborate
          with others, knock out your goals, and complete projects faster with
          Sprint.
        </h4>
        <button>Try It Now</button>
      </div>
      <img src={mock} alt="mock" id="mock" />
      <style jsx>{`
        h1,
        h4,
        button {
          font-family: "rabbidhighwaysignii";
        }
      `}</style>
    </div>
  )
}

export default Home

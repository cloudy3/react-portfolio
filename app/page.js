import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jing Feng Portfolio</title>
        <meta name="description" content="Made by Cheah Jing Feng using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Jing Feng</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
          </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Cheah Jing Feng</h2>
            <h3 className="text-2xl py-2">Computer Science graduate and Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Graduated from NTU with a Bachelor of Engineering in Computer Science.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
}

import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import Image from 'next/image';
import picture from "../public/picture.jpg";
import code from "../public/code.png";
import consulting from '../public/consulting.png'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-700 md:px-20 lg:px-40'>

        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-burtons dark:text-white'>NEAL_Y</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                  className='dark:text-white cursor-pointer text-2xl' />
              </li>
              <li>
                <a className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6 " href="#">
                  self-video
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl  dark:text-white'>AppWorkSchool</h2>
            <p className='text-md py-5 ledding-8 text-teal-600 md:text-xl max-w-lg mx-auto dark:text-white'>
              經過三個月的自主學習<br />
              重新塑造有別於<a href="https://nealyang0.github.io/AppWorksSchool/%E8%87%AA%E6%88%91%E4%BB%8B%E7%B4%B9.html"><span className="text-blue-400">上一次</span></a>的申請表<br />
              以下<br />
              簡單的<a href='#自我介紹'><span className="text-blue-400">自我介紹</span></a> ＆ 相關的<a href='#模擬問答'><span className="text-blue-400">模擬問答</span></a>
            </p>
          </div>
          <div className="dark:text-white text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <a href='https://www.instagram.com/im4.xian/'><AiFillInstagram /></a>
            <a href='https://www.linkedin.com/in/yang-shin-xian-739b43249/'><AiFillLinkedin /></a>
            <a href='https://www.facebook.com/profile.php?id=100022311949278'><AiFillFacebook /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-900 rounded-full h-80 w-80 mt-20 overflow-hidden md:h-96 md:w-96' >
            <Image alt='self' src={picture} layout="fill" objectFit="cover" />
          </div>

          <h3 id="自我介紹" className='text-3xl text-center md:text-4xl py-10 dark:text-white'>About Me</h3>

          <div className="text-center shadow-xl p-10 rounded-xl max-w-4xl mx-auto dark:bg-white ">
            <Image alt='intro' src={consulting} width={100} height={100} />
            <h3 className="text-teal-600 md:text-4xl text-base font-medium pt-8 pb-6 ">
              -- 自我介紹 --
            </h3>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">我是楊士賢</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">從小就喜歡挑戰別人覺得不可能的事情</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">我認為去實踐不可能自己才能成就不凡</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">這價值觀來自我從小到大所閱讀的書籍和影片，內化後我得到兩個結果</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">「面對任何事情都能鼓起勇氣去做」 & 「寧願做過了後悔，也不要錯過了後悔」</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">這兩條準則是我堅持的態度，讓我在行事有著出色的行動力和不錯的效率</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">雖然有時候會失真，可能不小心方向錯了</p>
            <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">但是經過總總我所犯錯的事情，讓我學會做事前思考更縝密一些，也為未來奠定基底。</p>
          </div>

          <h3 id="模擬問答" className='text-3xl text-center md:text-4xl pt-10 dark:text-white'>Mock Answer</h3>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            <div className='basis-1/3 flex-1'>
              <div className="text-center shadow-xl rounded-xl p-10 max-w-4xl mx-auto dark:bg-white">
                <Image alt='code' src={code} width={100} height={100} />
                <h3 className="text-teal-600 md:text-3xl text-base font-medium pt-8 pb-6 ">
                  -- 為了成為軟體工程師，曾做過什麼努力 --
                </h3>
                <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">
                  畢業將至<br />
                  對於成為軟體工程師越加憧憬<br />
                  利用網路的便利性<br />
                  從原本連變數是什麼都不知道的程式小白<br />
                  一點一滴的從網路上累積<br />
                  不管是看youtube影片還是大量閱讀前輩的文章<br />
                  以及<br />
                  利用學校資源主動去學習資工課程等<br />
                  不斷地去網路上找資料、報名線上課程、參加程式相關的活動<br />
                  發現新的的技術，發現新的知識，發現新的思考模式<br />
                  <br />
                  為了就是『早日』成為一名後端工程師！
                </p>
              </div>
            </div>
            <div className='pb-1 basis-1/3 flex-1'>
              <div className="text-center shadow-xl rounded-xl p-10 max-w-4xl mx-auto dark:bg-white">
                <Image alt='code1' src={code} width={100} height={100} />
                <h3 className="text-teal-600 md:text-3xl text-base font-medium pt-8 pb-6 ">
                  -- 描述一件曾碰到最困難的事情，如何克服 --
                </h3>
                <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">
                  以前由於不愛唸書，成績甚差，高中時期，為了能夠上自己心目中的大學，也就是我現在的大學，利用三年的時間，不停的input、output只為了能夠在短短三年的時間趕上人家讀九年的書，為了教會自己國英數專一、專二，別人讀書時我在讀書，別人玩樂時我也在讀書，早上5:50搭第一班捷運只為了更早到學校，在大家趕到教室早自習前我已經把今天要幹嘛，上什麼課都安排好了<br /><br />
                  這就是我背水一戰的『決心』與學東西的『態度』<br />
                  現在，我達到我那時的目標了，我上了我的第一志願-國立臺北科技大學而我下一個目標<br /><br />
                  是成為一名獨當一面的後端工程師......
                </p>
              </div>
            </div>
            <div className='pb-1 basis-1/3 flex-1'>
              <div className="text-center shadow-xl rounded-xl p-10 max-w-4xl mx-auto dark:bg-white">
                <Image alt='code' src={code} width={100} height={100} />
                <h3 className="text-teal-600 md:text-3xl text-base font-medium pt-8 pb-6 ">
                  -- 如果參與這個課程，會怎麼安排學習時間 --
                </h3>
                <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">
                  我認為我現在最需要的是一個『完整』並且最結合『實務』的課程<br />
                  因此，我會更加努力不浪費任何寶貴的一分一秒<br />
                  用最有效率的方式，扎扎實實的填補我所未曾學習到的知識<br />
                  拿出超越我當時背水一戰的態度<br />
                  我會分兩個階段<br />
                  首先是四周的部分<br />
                  利用四周線上學習的時間為後面駐點做鋪墊<br />
                  再來就是駐點時<br />
                  與同學們一同做出漂亮有用的專案<br />
                  增進自己，不管是在溝通能力、程式能力、情蒐能力等等<br />
                  與不同背景、不同年齡層的人溝通相處<br /><br />
                  要求自己走出舒適圈，接受更多的挑戰！
                </p>
              </div>
            </div>
            <div className='pb-1 basis-1/3 flex-1'>
              <div className="text-center shadow-xl rounded-xl p-10 max-w-4xl mx-auto dark:bg-white">
                <Image alt='code' src={code} width={100} height={100} />
                <h3 className="text-teal-600 md:text-3xl text-base font-medium pt-8 pb-6 ">
                  -- 請分享一個開發這份project時的技術心得 --
                </h3>
                <p className="text-teal-600 py-2 leading-relaxed text-sm md:text-xl max-w-3xl mx-auto">
                  難！但我很開心，也很享受找資料的過程<br />
                  這次會想來挑戰Next.js結合React.js與Tailwindcss是因為<br />
                  用不一樣的方式挑戰新的框架跟技術<br />
                  順便驗收一下自己對於JavaScript的理解<br />
                  想透過新手做出自己的好看的個人網站，適當展現一下自己的態度<br />
                  當然過程不是那麼順利，光是排版我就想了好久......<br /><br />
                  總結來說<br />
                  自己做了許多功課利用萬用的網路，看了諸多教學影片<br />
                  中間也加了一些有別於以往的調整和技術<br />
                  讓我再一次動手做的網頁還算滿意不會說是交差了事或是枯燥乏味<br />
                  主要是想呈現出<br />
                  一個比較不一樣的報名態度 ＆ 想認真學好程式的心
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div >
  );
}

// 接下來看怎麼樣縮小可以排隊，放大可以左右框框
// 字體大小調整 放大 vs 縮小
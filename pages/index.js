import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useLayoutEffect } from 'react'
import styles from '../styles/Home.module.css'

import { TmdbHandler } from '../src/tmdb-handler/tmdb-handler'
import { Header } from '../components/Header'
import { MovieCard } from '../components/MovieCard'
import { BackToBrowse } from '../components/BackToBrowse'
import { PopularState } from '../components/PopularState'
import { ScrollState } from '../components/ScrollState'

export default function Home() {

  const { popular, updatePopular } = useContext(PopularState)
  const { scrollPosition, setScrollPosition } = useContext(ScrollState)

  const getNewPage = async () => {
    const scrollPosition = window.scrollY
    setScrollPosition(scrollPosition)
    console.log('setting scroll position in getNewPage to', scrollPosition)
    const newResults = await TmdbHandler.getPopular(popular.page + 1)
    updatePopular(newResults)
  }

  useEffect(() => {
    const getPopularMovies = async () => {
      const popularMovies = await TmdbHandler.getPopular(1)
      updatePopular(popularMovies)
    }
    if (Object.keys(popular).length === 0) getPopularMovies()
  }, [popular, updatePopular])

  useLayoutEffect(() => {
    setTimeout(() => {
      if (scrollPosition !== 0) {
        window.scrollTo({ top: scrollPosition })
        console.log('scrolling to', scrollPosition)
      }
    }, 50)
  }, [popular, scrollPosition])

  return (
    <div className={styles.container}>
      <Head>
        <title>Movies GA4 test</title>
        <meta name="description" content="This a test app for demoing GA4 event tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header headerText="Popular titles"/>
      <main className='px-8'>
        <div className="flex flex-row flex-wrap justify-evenly">
          <h1 className="text-3xl font-bold min-w-full mt-24 mb-5 px-3 text-left text-slate-800">Popular titles</h1>
          {popular.results && popular.results.map(result => (
            <MovieCard key={result.id} data={result} setScrollPosition={setScrollPosition} />
          ))
          }
          <BackToBrowse
            message="Load more"
            direction="forward"
            action="nextPage"
            getNewPage={getNewPage} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://tmdb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Movie data from {' '}
          <span className={styles.logo}>
            <Image src="/TMDb-logo.svg" alt="TMDb Logo" width={72} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}

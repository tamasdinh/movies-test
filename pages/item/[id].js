import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { TmdbHandler } from "../../src/tmdb-handler/tmdb-handler"
import { Header } from '../../components/Header'
import { BackToBrowse } from '../../components/BackToBrowse'
import { Poster } from '../../components/Poster'

export default function DetailPage() {

    const router = useRouter()
    const { id } = router.query

    const [details, setDetails] = useState({})

    useEffect(() => {
        const getDetails = async () => {
            const details = await TmdbHandler.getDetails(id)
            setDetails(details)
        }
        getDetails()
    }, [id])

    return (
        <>
            <Head>
                <title>{details.title}</title>
                <meta name="description" content={`Details for ${details.title}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header headerText={details.title} />
            <div className='h-16'></div>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className='mb-8'>
                    <Poster title={details.title} poster_path={details.poster_path} />
                </div>
                <h1 className="text-3xl font-light text-center text-slate-800">This will be the details page.</h1>
                <BackToBrowse message="Browse popular titles" direction="back" />
            </div>
            {/* {Object.entries(details).map(entry => (
                <div key={entry[0]}>{`${entry[0]}: ${entry[1]}`}</div>
            ))} */}
        </>
    )
}
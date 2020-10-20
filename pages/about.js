import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.scss"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"

export default function About({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>About Page</h1>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from "../../components/date"
import styled from "styled-components"
import { useEffect } from "react"

function usePrismHighlightAll() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}

export default function Post({ postData }) {
  usePrismHighlightAll()

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <StyledPosts>
        <img src={`${postData.image}`} alt={postData.title} />
        <PostContainer>
          <h1>{postData.title}</h1>
          <h3>{postData.description}</h3>
          <div className='post-date'>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostContainer>
      </StyledPosts>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

const StyledPosts = styled.article`
  max-width: 1060px;
  margin: 0 auto;
  margin-bottom: 200px;

  img {
    width: 100%;
    height: 360px;
  }

  h1 {
    font-size: clamp(1.7rem, calc(1rem + 4vw), 2rem);
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: clamp(1.7rem, calc(1rem + 4vw), 1.5rem);
    line-height: 1.3em;
    margin-top: 1.3rem;
    /* margin-top: 2rem; */
    margin-bottom: 0.75rem;
  }

  h3 {
    /* font-family: var(--fontFamilySecondary); */
    font-size: clamp(1.4rem, calc(1rem + 4vw), 1.75rem);
    font-weight: 400;
    line-height: 1.3em;
    /* color: var(--color-grey-5); */
    margin-top: 0.6rem;
    /* margin-top: 1.875rem; */
    margin-bottom: 0.5rem;
    /* margin-bottom: 1.125rem; */
  }

  p {
    /* font-family: var(--fontFamilySecondary); */
  }

  .post-date {
    font-family: var(--fontFamilySecondary);
    margin-bottom: 1.5rem;
  }
`

const PostContainer = styled.div`
  max-width: 780px;
  margin: 0 auto;
`

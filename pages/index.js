import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import Link from "next/link"
import Date from "../components/date"
import styled from "styled-components"

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <StyledBlogList>
        <Wrapper>
          {allPostsData.map(({ id, image, date, title }) => (
            <BlogGrid key={id}>
              <BlogDate>
                <small>
                  <Date dateString={date} />
                </small>
              </BlogDate>
              <BlogPost>
                <Link href={`/posts/${id}`}>
                  <a>
                    <h3>{title}</h3>
                  </a>
                </Link>

                <Link href={`/posts/${id}`}>
                  <a>
                    <BlogImage>
                      <img src={`${image}`} loading='lazy' alt={title} width='780' height='360' />
                    </BlogImage>
                  </a>
                </Link>
              </BlogPost>
            </BlogGrid>
          ))}
        </Wrapper>
      </StyledBlogList>
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

const StyledBlogList = styled.section`
  background: var(--color-grey-1);
  padding: 100px 0;
`

const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`

const BlogGrid = styled.article`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 40px;
`

const BlogDate = styled.div`
  margin-top: 0.4rem;
  font-size: 1.2rem;
`

const BlogPost = styled.div`
  a {
    margin: 0;
    text-decoration: none;

    h3 {
      font-size: clamp(2rem, calc(1rem + 4vw), 2rem);
      line-height: 120%;
      letter-spacing: -0.2px;
      font-weight: 700px;
      color: var(--color-grey-10);
      margin-bottom: 20px;

      animation-name: fadeTitle;
      animation-duration: 1s;
      animation-delay: 0;
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
  }

  @keyframes fadeTitle {
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
  }
`

const BlogImage = styled.picture`
  max-width: 780px;
  height: 360px;

  img {
    width: 100%;
    height: 100%;
    animation-name: fadein;
    animation-duration: 2s;
    animation-delay: -0.5s;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  @keyframes fadein {
    from {
      /* opacity: 0; */
      filter: blur(1.5rem);
      transform: translate3d(0, 100px, 0);
    }
    to {
      /* opacity: 1; */
      filter: blur(0);
      transform: translate3d(0px, 0px, 0px);
      animation-delay: 1s;
    }
  }
`

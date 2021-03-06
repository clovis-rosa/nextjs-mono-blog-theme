import Head from "next/head"
import Link from "next/link"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import styled from "styled-components"

const name = "[Your Name]"
export const siteTitle = "Next.js Sample Website"

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header>
        {home ? (
          <>
            <Navbar />
            <HeroSection />
          </>
        ) : (
          <>
            <Navbar />
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Wrapper>
          <Link href='/'>
            <a>
              <span>←</span> Back to home
            </a>
          </Link>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto 100px auto;

  a {
    text-decoration: none;
    color: var(--color-grey-10);

    span {
      font-size: 1.6rem;
    }

    &:hover {
      color: var(--color-blue-0);
    }
  }
`

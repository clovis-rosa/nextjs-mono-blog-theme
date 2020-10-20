import Link from "next/link"
import GettingDate from "./GettingDate"
import styled from "styled-components"

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarLogo>
        <Link href='/'>
          <a>
            <span className='mono'>mono</span>
            <span className='blog'>blog</span>_
          </a>
        </Link>
        <GettingDate />
      </NavbarLogo>
      <NavbarMenu>
        <ul>
          <li>
            <Link href='/blog'>
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>about-me</a>
            </Link>
          </li>
        </ul>
      </NavbarMenu>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
`

const NavbarLogo = styled.div`
  /* Logo MONOBLOG_ here */
  a {
    cursor: pointer;
    font-family: var(--fontFamilyPrimary);
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--color-blue-0);
    text-decoration: none;
    transition: opacity 0.15s ease 0s;

    span.mono {
      text-decoration: line-through solid 4px;
    }
    span.blog {
      text-decoration: none;
      color: var(--color-grey-10);
    }
    &:hover {
      opacity: 0.6;
    }
  }
`

const NavbarMenu = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 3rem;
    place-items: start end;

    li {
      list-style: none;
      margin: 0;

      a {
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-grey-10);
        text-decoration: none;

        &:hover {
          color: var(--color-blue-0);
          text-decoration: line-through solid 3px;
        }
      }
    }
  }
`

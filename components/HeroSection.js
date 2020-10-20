import styled from "styled-components"

function HeroSection() {
  return (
    <StyledHeroSection>
      <h1>The FREE online conference dedicated to frontend teams.</h1>
    </StyledHeroSection>
  )
}

export default HeroSection

const StyledHeroSection = styled.div`
  max-width: 1060px;
  margin: 100px auto;
  padding: 0 40px;

  animation-name: fadeHero;
  animation-duration: 1s;
  /* animation-delay: -1s; */
  /* animation-timing-function: ease-out; */
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @keyframes fadeHero {
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

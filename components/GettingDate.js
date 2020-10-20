import styled from "styled-components"

function GettingDate() {
  const locale = "en"
  const [today, setDate] = React.useState(new Date()) // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date())
    }, 60 * 1000)
    return () => {
      clearInterval(timer) // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, [])

  const day = today.toLocaleDateString(locale, { weekday: "short" })
  const date = `${day} ${today.getDate()}, ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`

  const hour = today.getHours()

  const time = today.toLocaleTimeString(locale, { hour: "numeric", hour12: true, minute: "numeric" })

  return (
    <>
      <StyledGettingDate>
        {time} | {date}
      </StyledGettingDate>
    </>
  )
}

export default GettingDate

const StyledGettingDate = styled.p`
  font-family: var(--fontFamilyPrimary);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: -0.03em; /* -- */
  margin-top: 0.4rem;
`

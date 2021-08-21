import { today } from 'src/utils/date-formatter'
import { styled } from 'stitches.config'

const Container = styled('div', {
  maxWidth: '36rem', // xl
  width: '100%',
  margin: '0 auto',
  padding: '.75rem',
  marginBottom: '2rem'
})

const Title = styled('h1', {
  fontWeight: 'bold',
  fontSize: 'xx-large',
  borderBottom: '2px solid $gray6',
  textTransform: 'capitalize',
  marginBottom: '15px'
})

const Today = styled('p', {
  color: '$gray11'
})

const ControlBar = () => {
  return (
    <Container>
      <Title>Daftar hari libur nasional</Title>
      <Today>Hari ini: {today()}</Today>
    </Container>
  )
}

export default ControlBar

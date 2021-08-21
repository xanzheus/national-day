import { today } from 'src/utils/date-formatter'
import { styled } from 'stitches.config'

const Container = styled('div', {
  maxWidth: '36rem', // xl
  width: '100%',
  backgroundColor: '$gray2',
  margin: '0 auto',
  padding: '.75rem',
  marginBottom: '2rem'
})

const Title = styled('h1', {
  fontWeight: 'bold',
  fontSize: 'xx-large',
  borderBottom: '2px solid $gray3',
  marginBottom: '15px'
})

const ControlBar = () => {
  return (
    <Container>
      <Title>Daftar hari libur nasional</Title>
      <p>Hari ini: {today()}</p>
    </Container>
  )
}

export default ControlBar

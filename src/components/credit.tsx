import { styled } from 'stitches.config'

const Footer = styled('footer', {
  width: '100%',
  padding: '2rem',
  backgroundColor: '$gray2',
  borderTop: '1px solid $gray6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const Link = styled('a', {
  textDecoration: 'underline',
  '&:hover': {
    color: '$gray11'
  }
})

const Credits = () => {
  return (
    <Footer>
      <div>
        <p>
          Data didapatkan dari{' '}
          <Link href="https://api-harilibur.vercel.app/" title="Link to website">
            API
          </Link>
        </p>
      </div>
      <div style={{ marginTop: '.5rem' }}>
        <Link href="https://github.com/kalwabed/harilibur" title="Github repository">
          Kontribusi
        </Link>
      </div>
    </Footer>
  )
}

export default Credits

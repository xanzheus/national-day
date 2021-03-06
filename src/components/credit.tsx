import { styled } from 'stitches.config'

const Footer = styled('footer', {
  width: '100%',
  padding: '2rem',
  backgroundColor: '$gray2',
  borderTop: '1px solid $gray6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Link = styled('a', {
  borderBottom: '1px dotted',
  '&:hover': {
    color: '$gray11'
  }
})

const Credits = () => {
  return (
    <Footer>
      <Link css={{ marginRight: '.5rem' }} href="https://api-harilibur.vercel.app/" title="Link to website">
        Sumber data
      </Link>
      <Link css={{ marginRight: '.5rem' }} href="https://national-day.vercel.app" title="Github repository">
        Kontribusi
      </Link>
      <Link href="https://instagram.com/itspapoy" title="Github repository">
        Credit
      </Link>
    </Footer>
  )
}

export default Credits

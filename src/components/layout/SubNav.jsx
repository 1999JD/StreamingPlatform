import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Chip from '@mui/material/Chip'
import { grey } from '@mui/material/colors'

export default function SubNav() {
  return (
    <Paper elevation={2} sx={{ py: 1, backgroundColor: grey[50] }}>
      <Container maxWidth="xl" sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Chip label="戲劇" component="a" href="#basic-chip" clickable />
        <Chip label="喜劇電影" component="a" href="#basic-chip" clickable />
        <Chip label="愛情電影" component="a" href="#basic-chip" clickable />
        <Chip label="綜藝" component="a" href="#basic-chip" clickable />
        <Chip label="動漫" component="a" href="#basic-chip" clickable />
        <Chip label="直播" component="a" href="#basic-chip" clickable />
        <Chip label="恐怖電影" component="a" href="#basic-chip" clickable />
        <Chip label="熱門" component="a" href="#basic-chip" clickable />
        <Chip label="最新" component="a" href="#basic-chip" clickable />
        <Chip label="兒童節目" component="a" href="#basic-chip" clickable />
      </Container>
    </Paper>
  )
}
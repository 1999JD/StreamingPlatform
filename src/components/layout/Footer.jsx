
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles'

const footers = [
  {
    title: '公司資訊',
    description: ['團隊介紹', '公司發展', '人才招募', '公司位置'],
  },
  {
    title: '客戶服務',
    description: [
      '聯絡客服',
      '常見問題解答',
      '訊息公告',
    ],
  },
  {
    title: '合作',
    description: ['廣告投放', '平台合作'],
  },
  {
    title: '條款',
    description: ['隱私權政策', '服務條款'],
  },
];

const StyledLink = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  display: 'inline-block',
  '&::after': {
    display: 'block',
    content: '""',
    width: 0,
    height: 1,
    backgroundColor: theme.palette.primary.light,
    transition: '300ms',
  },
  '&:hover::after': {
    width: '100%'
  }
}))



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        StreamingPlatform
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <Container
        maxWidth="lg"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" >
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </footer >
  )
}
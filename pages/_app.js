
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( <>
  <div style={{display:"flex",gap:"20px"}}>
    <Link href="/"><h1>Home</h1></Link>
    <Link href="/projects"><h1 style={{color:"red"}}>Click Here to view Projects Page</h1></Link>
  </div>
  <Component {...pageProps} /></>)
}

export default MyApp

import { Header, Footer, SEO, Main } from '@/layouts'

export default function NotFound () {
  const seo = {
    title: '404 - Not found',
    metaDesc: ''
  }

  return (
    <>
      <SEO props={seo}/>
      <Header />
      <Main>
        <h1>404 - Not found</h1>
      </Main>
      <Footer/>
    </>
  )
}

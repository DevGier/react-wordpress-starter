// @ts-expect-error
import MetaTags from 'react-meta-tags'

const SEO = (seo: any) => {
  const title = seo?.props?.title ?? ''
  const description = seo?.props?.metaDesc ?? ''
  const url = seo?.props?.opengraphUrl ?? ''
  const imageUrl = seo?.props?.opengraphImage?.uri ?? ''

  return (
        <MetaTags>
            <meta property="og:type" content="website" />
            <meta property="twitter:card" content="summary_large_image" />

            {(
                <>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta property="og:title" content={title} />
                    <meta property="twitter:title" content={title} />
                </>
            )}

            {(
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                    <meta property="twitter:description" content={description} />
                </>
            )}

            {(
                <>
                    <meta property="og:image" content={imageUrl} />
                    <meta property="twitter:image" content={imageUrl} />
                </>
            )}

            {(
                <>
                    <meta property="og:url" content={url} />
                    <meta property="twitter:url" content={url} />
                </>
            )}
        </MetaTags>
  )
}

export default SEO

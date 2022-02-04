import type { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async function generateSitemap(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const smStream = new SitemapStream({
      hostname: `${protocol}://${req.headers.host}`,
    })

    // Iterate over page-gen here
    // Index Page
    smStream.write({
      url: '/',
      changefreq: 'monthly',
      lastmod: new Date(),
      priority: 0.7,
    })

    smStream.end()
    const sitemapOutput = await streamToPromise(smStream)
    res.writeHead(200, 'ok', {
      'Content-Type': 'application/xml',
      'Cache-Control': `Public, max-age=${60 * 60 * 24}`,
    })
    res.end(sitemapOutput.toString())
  } catch (error) {
    console.error(error)
    res.status(500).send(JSON.stringify(error))
  }
}

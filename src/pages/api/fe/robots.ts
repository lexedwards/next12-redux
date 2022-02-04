import type { NextApiRequest, NextApiResponse } from 'next'

function generateEntry(url: string) {
  return `
User-agent: *
Allow: /${url}`
}

export default async function generateRobot(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const siteMap = `${protocol}://${req.headers.host}/sitemap.xml`
    let robot = `Sitemap: ${siteMap}`

    // Iterate over page-gen here
    robot += generateEntry('') // Index Page

    res.writeHead(200, 'ok', {
      'Content-Type': 'text/plain;charset=UTF-8',
      'Cache-Control': `Public, max-age=${60 * 60 * 24 * 7 * 4}`,
    })
    res.write(robot)
    res.end()
  } catch (error) {
    console.error(error)
    res.status(500).send(JSON.stringify(error))
  }
}

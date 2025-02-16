import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const googleApiKey = process.env.GOOGLE_MAPS
  
  if (!googleApiKey) {
    console.error('Google Maps API key is missing in environment variables')
    return res.status(500).json({ error: 'Maps configuration missing' })
  }

  try {
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=Tremendo+Sant+cugat&maptype=roadmap&zoom=20`
    return res.status(200).json({ mapUrl })
  } catch (error) {
    console.error('Error generating map URL:', error)
    return res.status(500).json({ error: 'Failed to generate map URL' })
  }
} 
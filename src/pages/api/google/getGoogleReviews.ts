import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  // Include other fields if needed
}

interface GoogleReviewsResponse {
  reviews: Review[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;
const placeId = "ChIJAZ9ak3iXpBIRYCLyM4psa_c"; // Replace with your Place ID

if (!apiKey) {
  console.error('GOOGLE_API_KEY is not set');
  return res.status(500).json({ error: 'Internal server error: API key is missing' });
}

try {
  const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
    params: {
      place_id: placeId,
      fields: 'reviews',
      key: apiKey,
    },
  });

  if (response.data.status === 'OK') {
    const reviews = response.data.result.reviews || [];
    res.status(200).json({ reviews });
  } else {
    console.error('Google API Error:', response.data.error_message);
    res.status(500).json({ error: `Google API Error: ${response.data.error_message}` });
  }
} catch (error: any) {
  console.error('Error fetching Google reviews:', error.message);
  res.status(500).json({ error: `Error fetching Google reviews: ${error.message}` });
}
}
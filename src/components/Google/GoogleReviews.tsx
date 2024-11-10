import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';

// Install modules
SwiperCore.use([Pagination]);

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  relative_time_description: string;
  // Include other fields from the review object if needed
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<{ reviews: Review[] }>('/api/google/getGoogleReviews');
        const fetchedReviews = response.data.reviews;
        setReviews(fetchedReviews);

        // Calculate average rating
        if (fetchedReviews && fetchedReviews.length > 0) {
          const totalRating = fetchedReviews.reduce(
            (sum: number, review: Review) => sum + review.rating,
            0
          );
          const avgRating = parseFloat(
            (totalRating / fetchedReviews.length).toFixed(1)
          );
          setAverageRating(avgRating);
        } else {
          setAverageRating(null);
        }

        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching reviews:', error.message);
        setError(`Unable to fetch reviews at this time. Error: ${error.message}`);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p className="text-center">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center">No reviews available.</p>;
  }

  return (
    <div className="google-reviews max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-center mb-6">
        <Image src="/google-logo.png" alt="Google Logo" width={100} height={34} />
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-8 custom-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card bg-white shadow-xl hover:shadow-2xl rounded-lg p-6 h-full flex flex-col min-h-[350px]">
              <div className="flex items-center mb-3">
                <Image
                  src={review.profile_photo_url}
                  alt={`${review.author_name}'s profile`}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="text-xs font-semibold">{review.author_name}</p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-3 h-3 ${
                          starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.282 3.945a1 1 0 00.95.69h4.147c.969 0 1.371 1.24.588 1.81l-3.357 2.439a1 1 0 00-.364 1.118l1.283 3.945c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.283-3.945a1 1 0 00-.364-1.118L2.034 9.372c-.783-.57-.38-1.81.588-1.81h4.147a1 1 0 00.95-.69l1.282-3.945z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-xs mb-4 flex-grow leading-snug">
                &quot;{review.text}&quot;
              </p>
              <p className="text-gray-500 text-xs mt-auto">
                {review.relative_time_description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS to adjust pagination position */}
      <style jsx>{`
        .custom-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
          text-align: center;
        }
        .custom-swiper .swiper-pagination-bullet {
          background-color: #000;
          opacity: 1;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background-color: #1A9E2B;
        }
      `}</style>
    </div>
  );
};

export default GoogleReviews;

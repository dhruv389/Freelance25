import React from 'react';

const DevReview = ({
  initial,
  username,
  country,
  rating,
  review,
  price,
  duration,
  imageSrc,
  category,
  sellerResponse,
}) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(  <div className="">🌟</div>
      
      );
    }
    return stars;
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg shadow-md p-6 mb-4">
    
      <div className="flex items-start mb-4">
        <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
          <span className="text-lg font-semibold">{initial}</span>
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold mr-2">{username}</h3>
            <span className="text-sm text-gray-400">{country}</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            {renderStars(rating)}
            <span className="ml-2">1 month ago</span>
          </div>
        </div>
      </div>
      <p className="text-gray-300 mb-4">
        {review.length > 200 ? `${review.substring(0, 200)}... ` : review}
        {review.length > 200 && <a href="#" className="text-blue-500">See more</a>}
      </p>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400">Price</p>
          <p className="text-lg font-semibold">{price}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Duration</p>
          <p className="text-lg font-semibold">{duration}</p>
        </div>
        <div className="flex items-center">
          {imageSrc && (
            <img src={imageSrc} alt="Category" className="w-16 h-12 object-cover rounded mr-2" />
          )}
          <p className="text-sm text-gray-300">{category}</p>
        </div>
      </div>
      {sellerResponse && (
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <span className="text-sm font-semibold">W</span>
              </div>
              <span className="text-sm font-semibold">Seller's Response</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewCards = () => {
  const reviews = [
    {
      initial: 'P',
      username: 'parfait84',
      country: 'Germany',
      rating: 5,
      review:
        "This is a team of exceptionally talented guys who know what they are doing. At first I was skeptical because of my experience with fraudulent people here who sell what they can't deliver. But as I started with them, I realised these guys are very talented. we are done with the first Phase of my project,...",
      price: '₹70,400-₹88,000',
      duration: '9 days',
      imageSrc: 'https://via.placeholder.com/150', // Replace with your image URL
      category: 'Custom Websites',
      sellerResponse: true,
    },
    {
      initial: 'J',
      username: 'john_doe',
      country: 'USA',
      rating: 4,
      review:
        "Great work! The team was very responsive and delivered the project on time. I'm happy with the results and would recommend them to others.",
      price: '$500-$700',
      duration: '7 days',
      category: 'Mobile App',
    },
    {
      initial: 'A',
      username: 'alice_smith',
      country: 'Canada',
      rating: 5,
      review:
        "Excellent service and communication. They understood my requirements perfectly and delivered a high-quality product. I'll definitely work with them again.",
      price: 'CA$600-CA$800',
      duration: '10 days',
      imageSrc: 'https://via.placeholder.com/150', // Replace with your image URL
      category: 'Graphic Design',
      sellerResponse: true,
    },
    {
      initial: 'M',
      username: 'mike_jones',
      country: 'UK',
      rating: 3,
      review:
        "The project took longer than expected, but the final result was satisfactory. There were some communication issues, but they were eventually resolved.",
      price: '£400-£600',
      duration: '14 days',
      category: 'SEO',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {reviews.map((review, index) => (
        <DevReview key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewCards; // Export ReviewCards instead of DevReview
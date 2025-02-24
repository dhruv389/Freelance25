import React from 'react';

const SubOptions = () => {
  const dummyCards = [
    {
      id: 1,
      thumbnail: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/529ea44f10a2aff520b99859d285b968-1682409451031/Application%20Development.png',
      title: 'CUSTOM CRM DEVELOPMENT',
      details: 'I will create a fully custom PHP CRM or web portal',
      rating: 5.0,
      reviews: 232,
      price: '₹1,819',
      seller: 'Mohsin',
      badge: 'Fiverr\'s Choice',
    },
    {
      id: 2,
      thumbnail: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/529ea44f10a2aff520b99859d285b968-1682409451031/Application%20Development.png',
      title: 'PROFISSIONAL HTML CONVERSION',
      details: 'I will build responsive html landing page or website development',
      rating: 4.9,
      reviews: 59,
      price: '₹455',
      seller: 'Ahmed',
      level: 'Level 1',
    },
    {
      id: 3,
      thumbnail: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/529ea44f10a2aff520b99859d285b968-1682409451031/Application%20Development.png',
      title: 'Web Development',
      details: 'I will do html css, web programming, editing, PSD to html',
      rating: 5.0,
      reviews: 1000,
      price: '₹455',
      seller: 'Muhammad Zaeem',
      level: 'Level 2',
    },
    {
      id: 4,
      thumbnail: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/529ea44f10a2aff520b99859d285b968-1682409451031/Application%20Development.png',
      title: 'Web Development',
      details: 'I will be your professional full stack PHP web developer',
      rating: 5.0,
      reviews: 269,
      price: '₹455',
      seller: 'Farhan Saqib',
      level: 'Level 2',
      videoConsultation: true,
    },
    // Add more dummy cards as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Web Application</h1>
        <p className="text-gray-400 mb-4">
          Build your custom web application from scratch with help from skilled freelance coders <a href="#" className="text-blue-600">How Fiverr Works</a>
        </p>
      </header>

      {/* Filter and Sort Section */}
      <section className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="border rounded-md px-3 py-2 text-sm">Service options</button>
          <button className="border rounded-md px-3 py-2 text-sm">Seller details</button>
          <button className="border rounded-md px-3 py-2 text-sm">Budget</button>
          <button className="border rounded-md px-3 py-2 text-sm">Delivery time</button>
          <button className="text-sm text-blue-600">Pro services</button>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-400">39,000+ results</p>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">Sort by:</span>
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>Best selling</option>
              {/* Add more sorting options */}
            </select>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyCards.map((card) => (
          <div key={card.id} className="bg-white/20 rounded-md backdrop-blur-lg border border-white/20 shadow-lg p-6 overflow-hidden">
            <img src={card.thumbnail} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{card.details}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">{'\u2605'.repeat(Math.floor(card.rating))}</span>
                <span className="text-sm text-gray-400 ml-1">({card.reviews})</span>
              </div>
              <p className="text-gray-400 font-semibold">From {card.price}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm font-semibold">{card.seller}</p>
                  {card.level && <p className="text-xs text-gray-400">{card.level}</p>}
                  {card.badge && <p className="text-xs text-green-600">{card.badge}</p>}
                </div>
                {card.videoConsultation && (
                  <span className="text-blue-600 text-xs">Offers video consultations</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SubOptions;
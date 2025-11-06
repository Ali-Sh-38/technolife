// component/ratingBox.jsx
import React, { useState } from 'react';
import useShow from '../custom hook/useShow';

const RatingBars = ({
  average = 0,
  distribution = [0, 0, 0, 0, 0],
  totalReviews = 0,
}) => {
  // مودال
  const [showOpinion, toggleOpinion] = useShow(false);

  // ستاره انتخابی کاربر
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  // فرم
  const [opinionText, setOpinionText] = useState('');

  // باز کردن مودال
  const handleOpenOpinion = () => {
    toggleOpinion();
    // ریست فرم
    setUserRating(0);
    setOpinionText('');
  };


  // ثبت نظر و جلوگیری از خالی فرستادن فرم
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0) {
      alert('لطفاً امتیاز خود را انتخاب کنید');
      return;
    }
    if (!opinionText.trim()) {
      alert('لطفاً نظر خود را بنویسید');
      return;
    }

    // اینجا می‌تونی نظر رو به سرور بفرستی
    console.log('نظر ثبت شد:', { rating: userRating, text: opinionText });

    // بستن مودال
    toggleOpinion();
  };


  // محاسبه درصد
  const getPercentage = (count) => {
    if (totalReviews === 0) return 0;
    return Math.round((count / totalReviews) * 100);
  };

  const percentages = distribution.map((count) =>
    totalReviews > 0 ? getPercentage(count) : count
  );

  const fullStars = Math.floor(average);

  return (
    <div className="max-w-xs mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-2xl p-6 font-sans">
      {/* امتیاز کلی */}
      <div className="text-4xl font-bold text-blue-500 mb-2">
        {average.toFixed(1)}
      </div>

      {/* ستاره‌های میانگین */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars;
          return (
            <svg key={i} className={`w-5 h-5 ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`} fill={isFilled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          );
        })}
      </div>

      {/* نوارهای پیشرفت */}
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((star, index) => (
          <div key={star} className="flex items-center gap-2">
            <span className="text-sm text-gray-500 w-8">{star}</span>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 bg-yellow-400 rounded-full transition-all duration-500" style={{ width: `${percentages[index]}%` }}/>
            </div>
            <span className="text-xs text-gray-500 w-8 text-left">
              {distribution[index]}
            </span>
          </div>
        ))}
      </div>

      {/* دکمه باز کردن مودال */}
      <button onClick={handleOpenOpinion} className="dark:bg-gray-300 bg-blue-800 text-[16px] text-white dark:text-gray-900 w-full text-center mt-5 p-2 rounded-md cursor-pointer transition-colors hover:bg-blue-950 dark:hover:bg-gray-400">
        ثبت نظر +
      </button>

      {/* مودال */}
      {showOpinion && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                نظر شما درباره این محصول
              </h3>

              {/* ستاره‌های انتخابی کاربر */}
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform hover:scale-110"
                  >
                    {/* ستاره ها */}
                    <svg fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"
                        className={`w-10 h-10 ${
                        star <= (hoveredStar || userRating)
                          ? 'text-yellow-400'
                          : 'text-gray-400'}`
                        }
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  </button>
                ))}
              </div>

              <p className="text-center text-[16px] text-blue-500 mb-3">
                {userRating > 0 ? `امتیاز شما: ${userRating} از 5` : 'لطفاً امتیاز دهید'}
              </p>

              {/* فرم نظر */}
              <form onSubmit={handleSubmit}>
                <textarea
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none transition-colors"
                  rows="5"
                  maxLength={500}
                  placeholder="نظر خود را بنویسید..."
                  value={opinionText}
                  onChange={(e) => setOpinionText(e.target.value)}
                  required
                />

                <div className="flex gap-3 mt-4">
                  <button type="submit" className="flex-1 bg-blue-900 dark:bg-gray-300 text-white dark:text-gray-900 py-2 rounded-md font-medium hover:bg-blue-950 dark:hover:bg-gray-400 transition-colors">
                    ثبت نظر
                  </button>
                  <button type="button" onClick={toggleOpinion} className="flex-1 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-md font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
                    انصراف
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingBars;
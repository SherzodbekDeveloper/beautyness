import PropTypes from 'prop-types'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

export default function RateFunction({ rate }) {
  const fullStars = Math.floor(rate); // To'liq yulduzlar soni
  const hasHalfStar = rate % 1 >= 0.5; // Yarmi yulduz bo'ladimi
  const totalStars = 5; // Umumiy yulduzlar soni

  const stars = [];

  // To'liq yulduzlarni qo'shish
  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoMdStar key={`star-full-${i}`} />); // To'liq yulduz belgi
  }

  // Yarmi yulduzni qo'shish
  if (hasHalfStar) {
    stars.push(<IoMdStarHalf key="star-half" />); // Yarmi yulduz belgi
  }

  // Bo'sh yulduzlarni to'ldirish
  while (stars.length < totalStars) {
    stars.push(<IoMdStarOutline key={`star-outline-${stars.length}`} />); // Bo'sh yulduz belgi
  }

  return <div className='flex g-4 stars'>{stars}</div>;
}


RateFunction.propTypes = {
	rate: PropTypes.number
}
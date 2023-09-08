import { CarouselItem } from '../CarouselItem/CarouselItem';
import './feedback.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, History } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {StyledFeedbackSection} from "./Feedback.styled.jsx";

export const Feedback = ({bg}) => {
	return (
		<StyledFeedbackSection background={bg} className="feedback">
			<div className="container">
				<span className="cause__badge">Testimonial</span>
				<h2 className="cause__title feedback__title">
					What Our Customer Say
				</h2>
				<Swiper
					slidesPerView={1}
					navigation={true}
					pagination={false}
					modules={[Navigation, Pagination, History]}
					className="mySwiper"
				>
					<SwiperSlide className="d-flex">
						<CarouselItem />
						<CarouselItem />
					</SwiperSlide>
					<SwiperSlide className="d-flex">
						<CarouselItem />
						<CarouselItem />
					</SwiperSlide>
				</Swiper>
			</div>
		</StyledFeedbackSection>
	);
};

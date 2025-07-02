import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaClock, FaMapPin } from "react-icons/fa";
import { useNavigate } from "react-router";

const slides = [
	{
		id: 1,
		title: "The Rosetta Stone",
		subtitle: "Key to Ancient Egyptian Hieroglyphs",
		description:
			"Discovered in 1799, this granodiorite stele was instrumental in deciphering Egyptian hieroglyphs and understanding ancient Egyptian civilization.",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/500px-Rosetta_Stone.JPG",
		period: "196 BC",
		location: "British Museum, London",
	},
	{
		id: 2,
		title: "The Antikythera Mechanism",
		subtitle: "Ancient Greek Computer",
		description:
			"An ancient Greek hand-powered orrery, considered the world's first analog computer, used to predict astronomical positions and eclipses.",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Antikythera_Fragment_A_%28Front%29.webp/500px-Antikythera_Fragment_A_%28Front%29.webp.png",
		period: "150-100 BC",
		location: "National Archaeological Museum, Athens",
	},
	{
		id: 3,
		title: "Tutankhamun's Mask",
		subtitle: "Golden Face of the Boy King",
		description:
			"The funeral mask of the 18th-dynasty ancient Egyptian pharaoh Tutankhamun, crafted from gold and precious stones.",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg/500px-CairoEgMuseumTaaMaskMostlyPhotographed.jpg",
		period: "1323 BC",
		location: "Egyptian Museum, Cairo",
	},
];

const Banner = () => {
	const navigate = useNavigate(); 
	return (
		<div className='w-full mt-3'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay, Keyboard]}
				navigation
				pagination={{ clickable: true }}
				keyboard={{ enabled: true }}
				autoplay={{ delay: 5000 }}
				loop
				className='rounded-xl'
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className='relative h-[500px] sm:h-[420px] w-full'>
							<img
								src={slide.image}
								alt={slide.title}
								className='w-full h-full object-cover brightness-75'
							/>
							<div className='absolute inset-0 flex flex-col justify-center items-start p-10 text-white bg-gradient-to-r from-black/70 via-black/40 to-transparent'>
								<h2 className='text-4xl md:text-5xl font-bold mb-2'>{slide.title}</h2>
								<h3 className='text-xl md:text-2xl font-semibold text-primary-content mb-4'>{slide.subtitle}</h3>
								<p className='max-w-xl text-sm md:text-base mb-4'>{slide.description}</p>
								<div className='flex flex-wrap items-center gap-6 text-sm md:text-base'>
									<span className='flex items-center gap-1'>
										<FaClock /> {slide.period}
									</span>
									<span className='flex items-center gap-1'>
										<FaMapPin /> {slide.location}
									</span>
								</div>
								<button onClick={() => navigate('/all-artifacts')} className='btn btn-primary mt-4'>Explore</button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;

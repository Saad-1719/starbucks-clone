import React from "react";
import Section from "../mainSection/topBottomSection";
const HomePage: React.FC = () => {
	const sectionOneContent = (
		<div className="w-full md:w-3/4 text-center text-white">
			<h1 className="font-bold py-5  text-lg md:text-2xl">Our treat to you</h1>
			<p className="pb-5 px-3 text-white text-sm md:text-lg ">
				Join Starbucks® Rewards and savor our gift to you: a free drink with
				qualifying purchase during your first week. Valid for one-time use.*
			</p>
			<button className="rounded-full border px-3 py-1 text-xs md:text-base font-semibold border-white transition-all hover:bg-zinc-600 hover:bg-opacity-50">
				Join now
			</button>
		</div>
	);

	const sectionTwoContent = (
		<div className="w-full md:w-3/4 text-center text-white">
			<h1 className="font-bold py-5  text-lg md:text-6xl">
				Sunny-day essentials
			</h1>
			<p className="pb-5 px-3 text-white text-sm md:text-2xl">
				Flavorful creations sure to brighten any summer day.
			</p>
			<button className="rounded-full border px-3 py-1 text-xs md:text-base font-semibold border-white transition-all hover:bg-zinc-600 hover:bg-opacity-50">
				Order now
			</button>
		</div>
	);

	const sectionThreeContent = (
		<div className="w-full md:w-3/4 text-center text-black">
			<h1 className="font-bold py-5  text-lg md:text-6xl">
				Bestie, this one’s on me
			</h1>
			<p className="pb-5 px-3 text-black text-sm md:text-2xl">
				Celebrate International Friendship Day on July 30 by sending a Starbucks
				eGift via text, social media or email.
			</p>
			<button className="rounded-full border px-3 py-1 text-xs md:text-base font-semibold border-black transition-all hover:bg-zinc-200 hover:bg-opacity-50">
				Send an eGift
			</button>
		</div>
	);

	const sectionFourContent = (
		<div className="w-full md:w-3/4 text-center text-black">
			<h1 className="font-bold py-5  text-lg md:text-2xl">
				Personal cups for good
			</h1>
			<p className="pb-5 px-3 text-black text-sm md:text-lg">
				Your choice is a positive and responsible one—because bringing your
				clean reusable cup helps our planet.
			</p>
			<button className="rounded-full border px-3 py-1 text-xs md:text-base font-semibold border-black transition-all duration-150 hover:bg-stone-300 hover:bg-opacity-50">
				Learn More
			</button>
		</div>
	);

	const sectionFiveContent = (
		<div className="max-w-2xl flex  text-center justify-center mx-auto pb-14">
			<p className="lg:text-sm font-medium leading-loose px-3 text-xs">
				*Valid only for new Starbucks Rewards members for 7 days from sign up.
				Offer good at participating stores for a handcrafted menu-sized beverage
				with eligible purchase ($8 max value). Taxes not included. Excludes
				alcohol, Starbucks Card and Starbucks Card reloads. Limit one per
				member. Cannot be combined with other offers or discounts. Product
				availability varies by store. Excludes delivery services. Sign up from
				8/16/2024 - 9/16/2024 to be eligible.
			</p>
		</div>
	);
	return (
		<div>
			<Section
				bgColor="#006241"
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-93215.jpg"
				title="Personal cups for good"
				description="Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet."
				content={sectionOneContent}
			/>
			<Section
				bgColor="#a3029a"
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-93232.jpg"
				title="Personal cups for good"
				description="Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet."
				content={sectionTwoContent}
				reverse
			/>
			<Section
				bgColor="#98cde4"
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-93386.jpg"
				title="Personal cups for good"
				description="Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet."
				content={sectionThreeContent}
			/>
			<Section
				bgColor="#97d8b1"
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-93234.jpg"
				title="Personal cups for good"
				description="Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet."
				content={sectionFourContent}
				reverse
			/>

			<Section ending={sectionFiveContent} />
		</div>
	);
};

export default HomePage;

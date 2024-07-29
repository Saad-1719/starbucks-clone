import React from "react";

const Footer = () => {
	return (
		<footer className=" mx-auto max-w-1600px shadow-md shadow-black border  py-2 px-8">
			<div className="grid lg:grid-cols-6 grid-cols-1 gap-x-8 py-8 max-w-[1400px] mx-auto">
				<div>
					<h1 className="font-medium lg:text-xl text-lg py-4">About Us</h1>
					<ul>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Our Company
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Our Coffee
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Stories and News
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Starbucks Archive
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Investor Relations
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Customer Service
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Contact Us
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-medium lg:text-xl text-lg py-4">Careers</h1>
					<ul>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Culture and Values
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Inclusion, Diversity, and Equity
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							College Achievement Plan
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Alumni Community
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							U.S. Careers
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							International Careers
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-medium lg:text-xl text-lg py-4">Social Impact</h1>
					<ul>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							People
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Planet
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Environmental and Social Impact Reporting
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-medium lg:text-xl text-lg py-4">For Business Partners</h1>
					<ul>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Landlord Support Center
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Suppliers
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Corporate Gift Card Sales
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Office and Foodservuce Coffee
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-medium lg:text-xl text-lg py-4">Order and Pick Up</h1>
					<ul>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Order on the App
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Order on the Web
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Delivery
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Order and Pick Up Options
						</li>
						<li className="lg:text-base text-xs py-2 text-zinc-600 hover:text-black cursor-pointer">
							Explore and Find Coffee for Home
						</li>
					</ul>
				</div>
			</div>
			<hr className="max-w-[1400px] justify-center flex items-center  mx-auto border-t-2" />
			<div className="max-w-[1400px] mx-auto">
				<ul className="flex justify-start py-5 items-center">
					<li className=" mx-1 p-1 transition-all duration-300 hover:bg-slate-200 rounded-full cursor-pointer md:p-2 md:mx-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 496 512"
							width="30"
						>
							<path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
						</svg>
					</li>
					<li className=" mx-1 p-1 transition-all duration-300 hover:bg-slate-200 rounded-full cursor-pointer md:p-2 md:mx-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							width="30"
						>
							<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
						</svg>
					</li>
					<li className=" mx-1 p-1 transition-all duration-300 hover:bg-slate-200 rounded-full cursor-pointer md:p-2 md:mx-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 496 512"
							width="30"
						>
							<path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
						</svg>
					</li>
					<li className=" mx-1 p-1 transition-all duration-300 hover:bg-slate-200 rounded-full cursor-pointer md:p-2 md:mx-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							width="30"
						>
							<path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
						</svg>
					</li>
					<li className=" mx-1 p-1 transition-all duration-300 hover:bg-slate-200 rounded-full cursor-pointer md:p-2 md:mx-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
							width="30"
						>
							<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
						</svg>
					</li>
					<li className=" mx-1 p-1 transition-all duration-300 hover:bg-slate-200 rounded-full cursor-pointer md:p-2 md:mx-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							width="30"
						>
							<path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
						</svg>
					</li>
				</ul>

				<ul>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xs hover:text-black hover:underline">
							Privacy Notice
						</a>
					</li>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xs hover:text-black hover:underline">
							Consumer Health and Privacy Notice
						</a>
					</li>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xshover:text-black hover:underline">
							Terms of Use
						</a>
					</li>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xs hover:text-black hover:underline">
							Do Not Share My Personal Information
						</a>
					</li>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xs hover:text-black hover:underline">
							CA Supply Chain Act
						</a>
					</li>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xs hover:text-black hover:underline">
							Accessibility
						</a>
					</li>
					<li className="pb-2">
						<a href="/" className="lg:text-base  text-xs hover:text-black hover:underline">
							Cookie Preferences
						</a>
					</li>
				</ul>
				<div className="text-zinc-400 lg:text-xs pt-2 pb-5 ">
					<p>
						&copy;{new Date().getFullYear()} Starbucks Coffee Company. All
						rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

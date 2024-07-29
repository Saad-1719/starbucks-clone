import React from "react";

interface SectionProps {
	bgColor?: string;
	imageSrc?: string;
	title?: string;
	description?: string;
	buttonText?: string;
	reverse?: boolean;
	borderColor?: string;
	headingFont?: number;
	textFont?: number;
	content?: React.ReactNode;
	ending?: React.ReactNode;
}

const TopBottomSection: React.FC<SectionProps> = ({
	bgColor,
	imageSrc,
	title,
	reverse = false,
	content,
	ending,
}) => {
	return (
		<section className="py-4 px-3 max-w-[1500px] m-auto ">
			<div style={{ backgroundColor: bgColor }}>
				<div
					className={`grid lg:grid-cols-2 grid-cols-1 ${
						reverse ? "lg:grid-cols-2" : "lg:grid-cols-2"
					}`}
				>
					<div className={`flex ${reverse ? "lg:order-2" : "lg:order-1"} `}>
						<img className="w-full h-auto" src={imageSrc} alt={title} />
					</div>
					<div
						className={`flex items-center justify-center lg:py-0 py-8 ${
							reverse ? "lg:order-1" : "lg:order-2"
						}`}
					>
						<div className="flex items-center justify-center flex-col">
							{content}
						</div>
					</div>
				</div>
			</div>
			{ending}
		</section>
	);
};

export default TopBottomSection;

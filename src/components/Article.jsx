import React from "react";

import image from "../assets/face.jpg";

const Article = () => {
	return (
		<div className='flex justify-center gap-4'>
			<div className='w-12 '>
				<img src={image} alt='404' className='object-cover w-full h-full' />
			</div>
			<div>
				<div>0</div>
				<div>Title</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, earum!
				</div>
			</div>
		</div>
	);
};

export default Article;

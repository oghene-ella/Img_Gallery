import dummy_img from "../../assets/login-img.webp"

const Gallery = () => {
  return (
		<section className="w-10/12 flex mx-auto h-fit">
			<main className="w-full grid grid-cols-3 gap-y-11 gap-x-5 ">
				{/* image gallery */}
				<section className="border border-red-500 rounded-3xl flex flex-col gap-3">
					{/* image  */}
					<img src={dummy_img} className="rounded-3xl" />

					{/* the author name and profile */}
					<span className="flex items-center gap-2">
						<img src={dummy_img} className="rounded-full w-10" />
						<span className="flex gap-2">
							<h1>Author -</h1>
							<h2>Ellahhhh Karo</h2>
						</span>
					</span>
				</section>
        
			</main>
		</section>
	);
}

export default Gallery
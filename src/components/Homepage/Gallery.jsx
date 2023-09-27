import { useEffect, useState, useRef } from "react";
import galleryData from "../data";
import loader from "../../assets/ZKZg.gif";
import SearchBar from "../searchBar/Searchbar";

const Gallery = () => {
	const [searchTerm, setSearchTerm] = useState("");

	// use state fo image loader
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState(galleryData);

	// drag and drop functionality
	const dragCard = useRef();
	const dragOverCard = useRef();

	const dragStart = (e, position) => {
		dragCard.current = position;
	};

	const dragEnter = (e, position) => {
		dragOverCard.current = position;
	};

	const drop = () => {
		const getCard = [...filterCardsByCreators()];
		const dragCardContent = getCard[dragCard.current];
		getCard.splice(dragCard.current, 1);
		getCard.splice(dragOverCard.current, 0, dragCardContent);
		dragCard.current = null;
		dragOverCard.current = null;
		setImages(getCard);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);


	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		if(!event.target.value) {
			setImages(galleryData)
		}
	};

	const filterCardsByCreators = () => {
		return images.filter((card) =>
			card.creator.toLowerCase().includes(searchTerm.trim().toLowerCase()),
		);
	};
	return (
		<section className="w-10/12 flex flex-col gap-14 mx-auto h-fit">
			<SearchBar onSearch={handleSearch} />
			{loading ? (
				<img src={loader} className="w-1/3 mx-auto" />
			) : (
				<main className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{/* image gallery */}
					{filterCardsByCreators().map((item, index) => (
							<section
								className="rounded-2xl flex flex-col shadow-2xl bg-white cursor-pointer transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-95"
								key={item.id}
								onDragStart={(e) => dragStart(e, index)}
								onDragEnter={(e) => dragEnter(e, index)}
								onDragEnd={drop}
								draggable
							>
								{/* image  */}
								<img
									src={item.url}
									className="rounded-t-2xl h-3/4 bg-cover"
									alt={item.alt}
								/>

								{/* the author name and profile */}
								<span className="flex flex-col gap-5 px-5 py-4">
									<p className="px-5 bg-blue-600 text-white w-fit rounded-sm">
										{item.title}
									</p>
									<span className="flex items-center gap-5">
										<img
											src={item.profile}
											className="rounded-full w-10"
											alt={item.alt}
										/>
										<h2>{item.creator}</h2>
									</span>
								</span>
							</section>
						))}
				</main>
			)}
		</section>
	);
};

export default Gallery;

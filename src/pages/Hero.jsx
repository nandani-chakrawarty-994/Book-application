

const Hero = () => {
    return (
        <div className="h-screen w-screen relative">
            <img className="h-[80%] w-full bg-cover" src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_640.jpg" alt="" />
            <div className="absolute top-[10%] left-[10%]">
                <h1 className="heading-h1">Discover Your Next Favorite Book</h1>
                <p className="para">Search, explore, and save books in your personal wishlist.</p>
            </div>
        </div>
    )
}

export default Hero
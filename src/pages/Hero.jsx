

const Hero = () => {
    return (
        <div className="h-screen w-screen relative">
            <img className="h-[80%] w-full bg-cover" src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_640.jpg" alt="" />
            <div className="absolute top-[10%] left-[5%]">
                <h1 className="heading-h1">Discover Your Next Favorite Book</h1>
                <p className="para">Search, explore, and save books in your personal wishlist.</p>
            </div>
            <img className="absolute bottom-[15%] right-[10%] h-[70%] w-auto" src="https://images.pexels.com/photos/18031825/pexels-photo-18031825/free-photo-of-person-reading-a-book-in-bed.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
    )
}

export default Hero
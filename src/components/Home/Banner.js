const Banner = () => {
    return (
        <section 
            className='home-banner' 
            style={{backgroundImage:`linear-gradient(to right, rgba(6, 84, 147, 0.8) 0%, rgba(6, 84, 147, 0) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg`}}>
            <div className="container home-content">
                <h2>Welcome, Viewers.</h2>
                <h3>Find movies,TV Shows and people. Discover now.</h3>
            </div>
        </section>
    );


}
 
export default Banner;
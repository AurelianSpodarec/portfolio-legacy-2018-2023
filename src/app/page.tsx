import Hero from "@/components/molecules/Hero";

function Home() {
    return (
        <div>
            <Hero 
                title="Home"
                image={{
                    url: "/images/blur-cafe-chairs-min.jpg",
                    alt: "Alrt"
                }}
             />
            Home
        </div>
    )
}

export default Home;
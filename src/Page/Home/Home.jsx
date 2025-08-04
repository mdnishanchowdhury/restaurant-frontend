import Banner from "./Banner"
import BistroBanner from "./BistroBanner"
import Catagory from "./Catagory"
import ChefCard from "./ChefCard"
import ContactBanner from "./ContactBanner"
import Featured from "./Featured"
import PropularMenu from "./PropularMenu"
import Testimonials from "./Testimonials"

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Catagory></Catagory>
        <BistroBanner></BistroBanner>
        <PropularMenu></PropularMenu>
        <ContactBanner></ContactBanner>
        <ChefCard></ChefCard>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home
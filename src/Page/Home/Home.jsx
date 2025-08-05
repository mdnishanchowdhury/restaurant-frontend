
import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import BistroBanner from "./BistroBanner"
import Catagory from "./Catagory"
import ChefCard from "./ChefCard"
import ContactBanner from "./ContactBanner"
import Featured from "./Featured"
import PropularMenu from "./PropularMenu"
import Testimonials from "./Testimonials"
import { useEffect } from "react"

function Home() {
     useEffect(() => {
          document.title = 'Restaurant | Home';
      }, []);
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
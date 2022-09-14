import React from "react";
import "../Css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="49038198201"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCC_belKiZwDpb-RAMsSO_NwaXygoJ_jYbaTs27PMXQw&s"
            rating={5}
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor."
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | smart speaker with Alexa, Charcoal fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/digital/adrive/photos/gateway/2022/APH_0122_desktop_category-card_prime_1x._SY304_CB649083529_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple ipad pro (12.9-inch, Wi-Fi, 128GB)- Silver(4th Generation)"
            price={598.99}
            rating={4}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/F/64841_1636311440.jpg"
          />
          <Product
            id="6829202029"
            title={"Apple iPhone 13 PRO - 6GB RAM - 512GB - 5G - Graphite"}
            price={988.98}
            rating={5}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/W/2054_1636210455.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4683784787"
            title="Apple MacBook Pro - 16-inch - Apple M1 Pro Chip - 1TB SSD - 16GB RAM - 2021 Model - Space Gray"
            price={1200}
            rating={5}
            image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/K/67343_1647078484.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

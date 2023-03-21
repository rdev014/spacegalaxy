import React from 'react'

export default function Blogs() {
  return (
    <div>
      {/* Included greeting an cearch bar */}
      <div className="blog container-fluid">
        <img src="rocketship-unscreen.gif" style={{ position: 'absolute', marginTop: '2rem' }} alt="" width={"350px"} className="img-fluid img" /><br />
        <h1 className='heading1'>..Welcome..</h1>
        <br />
        <p className='para4' style={{ marginTop: '0%' }}>Lets Explore the Galaxies...</p><p className='para5'>
          W𝘩𝘦𝘳𝘦 𝘸𝘦 𝘧𝘰𝘶𝘯𝘥 𝘵𝘩𝘦 𝘷𝘢𝘳𝘪𝘰𝘶𝘴 𝘗𝘭𝘢𝘯𝘦𝘵𝘴,𝘚𝘵𝘢𝘳𝘴,𝘈𝘴𝘵𝘦𝘳𝘰𝘪𝘥𝘴,𝘊𝘰𝘮𝘦𝘵𝘴 <br /> 𝘋𝘦𝘦𝘱𝘚𝘬𝘺,O𝘣𝘫𝘦𝘤𝘵𝘴,𝘚𝘢𝘵𝘦𝘭𝘭𝘪𝘵𝘦𝘴,𝘊𝘰𝘯𝘴𝘵𝘦𝘭𝘭𝘢𝘵𝘪𝘰𝘯𝘴..
        </p>
        {/* sreach button and search bar */}
        <nav className='navbar bg-body-dark'>
          <div className="container-fluid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      {/* begning of the main content of the solar system */}
      <div className="container3 container-fluid">
        {/* 1st planent sunnn image and description */}
        <img src="sunu.gif" alt="" className='img-fluid img1' />
        <p className='para6'>The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma,[18][19] heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.

          The Sun's radius is about 695,000 kilometers (432,000 miles) <a href="https://en.wikipedia.org/wiki/Sun" style={{ color: 'yellow', textDecoration: 'underline' }}>Read more</a> </p><br /><br />
      </div>


      {/* 2nd planet mercury image and discription */}


      <div className="container3">
        <img src="mercury.gif" alt="" className="img-fluid img1" />
        <p className='para6'>Mercury's axis has the smallest tilt of any of the Solar System's planets (about 1⁄30 degree).
          Its orbital eccentricity is the largest of all known planets in the Solar System;[b]
          at perihelion, Mercury's distance from the Sun is only about two-thirds (or 66%) of its distance at aphelion.
          Mercury's surface appears heavily cratered and is similar in appearance to the Moon's,
          indicating that it has been geologically inactive for billions of years.
          Having almost no atmosphere to retain heat, it has surface temperatures that vary diurnally more than on any
          other planet in the Solar System, ranging from 100 K (−173 °C; −280 °F) at night to 700 K (427 °C; 800 °F)
          during the day across the equatorial regions.[22] The polar regions are constantly below 180 K (−93 °C; −136 °F)
          . The planet has no natural satellites.<a href="https://en.wikipedia.org/wiki/Mercury_(planet)" style={{ color: 'yellow', textDecoration: 'underline' }}>Read more</a> </p>

      </div>

      {/* 3rd planet venus image and discription */}

      <div className="container3">
        <img src="veniu-unscreen.gif" alt="" className="img-fluid img1" />
        <p className='para6'>Venus is the second planet from the Sun. It is sometimes called Earth's "sister" or "twin"
          planet as it is almost as large and has a similar composition. As an interior planet to Earth, Venus
          (like Mercury) appears in Earth's sky never far from the Sun, either as morning star or evening star.
          Aside from the Sun and Moon, Venus is the brightest natural object in Earth's sky, capable of casting visible
          shadows on Earth in dark conditions and being visible to the naked eye in broad daylight.[19][20] <a href="https://en.wikipedia.org/wiki/Venus" style={{ color: 'yellow', textDecoration: 'underline' }}>Read more</a>  </p>

      </div>

      {/* 4th planet earth and discription */}

      <div className="container3">
        <img src="prithvi.gif" alt="" width={600} className='img-fluid img1' />
        <p className='para6'>Earth is the third planet from the Sun and the only place known in the universe where life has
          originated and found habitability. While large volumes of water can be found throughout the Solar System,
          only Earth sustains liquid surface water. Approximately 70.8% of Earth's surface is made up of the ocean,
          dwarfing Earth's polar ice, lakes, and rivers. The remaining 29.2% of Earth's surface is land, consisting of
          continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates,
          which interact to produce mountain ranges, volcanoes, and earthquakes. <a href="https://en.wikipedia.org/wiki/Earth" style={{ color: 'yellow', textDecoration: 'underline' }}></a></p>
      </div>

      {/* 5th planet mars and discription */}


      <div className="container3">
        <img src="mars.gif" alt="" width={600} className='img-fluid img1' />
        <p className='para6'>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System,
          larger only than Mercury. In the English language, Mars is named for the Roman god of war.
          Mars is a terrestrial planet with a thin atmosphere and has a crust primarily composed of elements similar
          to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters,
          valleys, dunes, and polar ice caps. Mars has two small, irregularly shaped moons, Phobos and Deimos.
          <a href="https://en.wikipedia.org/wiki/Mars" style={{ color: 'yellow', textDecoration: 'underline' }}>Read more</a></p>
      </div>

      {/* 6th planet  jupiter and discription */}


      <div className="container3">
        <img src="jupiter.gif" alt="" width={600} className='img-fluid img1' />
        <p className='para6'>Jupiter is the fifth planet from the Sun and the largest in the Solar System.
          It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System
          combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter is the third brightest natural
          object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times.
          It was named after Jupiter, the chief deity of ancient Roman religion.

          Jupiter is primarily composed of hydrogen, followed by helium, which constitutes a quarter of its mass and a tenth
          of its volume. The ongoing contraction of Jupiter's interior generates more heat than the planet receives from the
          Sun.<a href="https://en.wikipedia.org/wiki/Jupiter" style={{ color: 'yellow', textDecoration: 'underline' }}>Read more</a></p>
      </div>

      {/* 7th planet saturn and discription */}

      <div className="container3">
        <img src="satrun.gif" alt="" width={600} className='img-fluid img1' />
        <p className='para6'>Saturn is the sixth planet from the Sun and the second-largest in the Solar System,
          after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.[23][24]
          It has only one-eighth the average density of Earth, but is over 95 times more massive.[25][26][27]


          Saturn's interior is most likely composed of a rocky core, surrounded by a deep layer of metallic hydrogen,
          an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer.
          Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the
          metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's,
          but which has a magnetic moment 580 times that of Earth due to Saturn's larger size.<a href="https://en.wikipedia.org/wiki/Saturn" style={{ color: 'yellow', textDecoration: 'underline' }}>Read more</a></p>
      </div>


      {/* 8th planet uranus and discriptio */}
      <div className="container3">
        <img src="uranus.gif" alt="" className="img-fluid img1" />
        <p className="para6">Uranus is the seventh planet from the Sun.
          It is named after Greek sky deity Uranus (Caelus), who in Greek mythology is the father of Cronus (Saturn),
          a grandfather of Zeus (Jupiter) and great-grandfather of Ares (Mars). Uranus has the third-largest planetary
          radius and fourth-largest planetary mass in the Solar System. The planet is similar in composition to Neptune,
          and both have bulk chemical compositions which differ from those of the other two giant planets,
          Jupiter and Saturn (the gas giants). For this reason,
          scientists often distinguish Uranus and Neptune as "ice giants"
          <a href="https://en.wikipedia.org/wiki/Uranus" style={{ color:'yellow', textDecoration:'underline' }}>Read more</a></p>
      </div>

      {/* 9th planet Neptune and discription */}
      <div className="container3">
        <img src="neptune1.gif" alt="" className="img-fluid img1" />
        <p className="para6">Neptune is the eighth planet from the Sun and the farthest known planet
         in the Solar System. It is the fourth-largest planet in the Solar System by diameter,
          the third-most-massive planet, and the densest giant planet. It is 17 times the mass of 
          Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and 
          physically smaller than Uranus because its greater mass causes more gravitational
           compression of its atmosphere. Being composed primarily of gases and liquids, 
           it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at
            an average distance of 30.1 astronomical units(4.5 billion kilometres; 2.8 billion miles). 
            <a href="https://en.wikipedia.org/wiki/Neptune" style={{ color:'yellow', textDecoration:'underline' }}>Read more</a></p>
      </div>
    </div>
  );
}

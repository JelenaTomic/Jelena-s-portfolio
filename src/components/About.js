import React from 'react'

function About() {
  const photo = [
    {
      image: require("../images/profilphoto.jpeg"),
      id: 'profil photo'
    }
  ]

  return (
    <section className="m-5" >
      <div className='p-5'>
        <h1>About me</h1>
      </div>
      {photo.map((e) => (
        <div className='col-sm-6 p-5'>
          <div className='border border-dark p-2'>

            <img className="card-img-top" src={e.image} alt={e.id} />


          </div>
        </div>

      ))}
      <div className="d-flex justify-content-center"> <p className='p-5 display-5'>
        Welcome to my portfolio page.
        <br></br>
        My name is Jelena Tomic. I'm 28 years old. Born and raised in Serbia.
        <br></br>
        I moved to the United States in mid 2018.


      </p>
        <br></br>
        <p>I studied at the University of Belgrade and have a bachelor in traffic and transportation engineering.
          <br></br>
          Im currently working in a tracking company as a safety director.
          <br></br>
          While i was in college i also went to makeup school,
          and became first assistant to a famous Serbian makeup artist.
        </p>
        <br></br>
        <p>I would say for myself that I'm an easy going person open to new adventures and always on the hunt to learn something new
          <br></br>
          In my free time I enjoy traveling and trying different foods. I also love movies
          and visiting movie theaters.
        </p></div>

    </section>
  )
}

export default About
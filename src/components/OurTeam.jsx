import React from "react";

const OurTeam = () => {
  return (
    
      <section class="team" id="team">
        <div class="section-header">
          <h1 class="section-heading">Developers Team</h1>
          <div class="underline"></div>
        </div>
        <div class="cards-wrapper">
          <div class="card" data-tilt>
            <div class="card-img-wrapper">
              <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1701629220/jytijdzz0agaqt9hbq2f.jpg" alt="Frontend developer" />
            </div>
            <div class="card-info">
              <h2>Khaled</h2>
              <h3>Frontend developer</h3>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit!"
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="card" data-tilt>
            <div class="card-img-wrapper">
              <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1701629560/rfyzfr73qhs2mdewdwn6.jpg
              " alt="Backend Developer" />
            </div>
            <div class="card-info">
              <h2>Elfar Elsondo2</h2>
              <h3>Backend Developer <span>&</span> Ai</h3>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit!"
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="card" data-tilt>
            <div class="card-img-wrapper">
              <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1701629560/nao3jfseezfp1cwwwgtc.jpg" alt="Frontend developer" />
            </div>
            <div class="card-info">
              <h2>Moaz</h2>
              <h3>Frontend developer</h3>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit!"
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default OurTeam;

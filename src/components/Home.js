import React from 'react'

export default function Home() {
  return (
    <>
      <div>
        <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay={300}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2><span>Write Information </span><br/>About the Company</h2>
                <p>Details and images about your company</p>
                <a href="/gallery" className="btn-get-started">PROJECTS</a>
              </div>
            </div>
          </div>
        </section>{/* End Hero Section */}
      </div>
    </>
  )
}

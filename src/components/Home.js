import React from 'react'

export default function Home() {
  return (
    <>
      <div>
        <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay={300}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Buraya<span> Sirket Ile Ilgili Bilgiler </span>Yazilacak</h2>
                <p>Belki sol tarafa bir resim ekleyebilir ve yazilari da sag tarafa kaydirabiliriz.</p>
                <a href="/gallery" className="btn-get-started">PROJELERİMİZ</a>
              </div>
            </div>
          </div>
        </section>{/* End Hero Section */}
      </div>
    </>
  )
}

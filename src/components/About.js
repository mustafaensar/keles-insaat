import React from 'react'
import aboutImg from '../img/profile-img.jpg'

export default function About() {
  return (
    <>
    <main data-aos="fade" data-aos-delay={300}>
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>About</h2>
              <p>This is where you will write information about the company.</p>
              <a href="#" className="facebook"> <i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"> <i className="bi bi-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 content">
              <h2>Worker</h2>
              <p className="fst-italic py-3">
                This is where you will write information about the company.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>New York, USA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>30</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                    <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </p>
              <p className="m-0">
                Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis.
                Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

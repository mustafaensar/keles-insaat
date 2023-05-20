import React from 'react'

export default function Contact() {
  return (
    <>
      <div data-aos="fade" data-aos-delay={300}>
        {/* ======= End Page Header ======= */}
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Bize Ulaşın</h2>
                <p>Proje görüşmeleri için mail gönderebilir ya da telefon numaramızdan bize ulaşabilirsiniz. Ayrıca aşağıdaki form aracılığıyla da bizimle iletişime geçebilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>{/* End Page Header */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-3">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h4>Address:</h4>
                    <p>Menekşe Sk. 121, Samsun, 5500</p>
                  </div>
                </div>
              </div>{/* End Info Item */}
              <div className="col-lg-3">
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h4>Email:</h4>
                    <p>info@mail.com</p>
                  </div>
                </div>
              </div>{/* End Info Item */}
              <div className="col-lg-3">
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0" />
                  <div>
                    <h4>Telefon:</h4>
                    <p>+90 123 456 7890</p>
                  </div>
                </div>
              </div>{/* End Info Item */}
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-9">
                <form className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="İsim-Soyisim" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Mail Adresiniz" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Konu" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="Mesajınız" required defaultValue={""} />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Mesaj Gönder</button></div>
                </form>
              </div>{/* End Contact Form */}
            </div>
          </div>
        </section>{/* End Contact Section */}
      </div>

    </>
  )
}

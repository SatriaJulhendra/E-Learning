import {Container, Row, Col} from 'react-bootstrap'
import {semuaKelas} from '../data/index'
import FaqComponent from '../components/FaqComponent'

const Kelaspage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className=" fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s" >Semua Kelas</h1>
              <p className=" text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((semuaKelas) =>{
                return(
                    <Col key={semuaKelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay = {semuaKelas.delay}>
                        <img src={semuaKelas.image} alt="unsplas.com" className="w-100 mb-5 rounded-top-2" />
                        <div className="star mb-2 px-3">
                            <i className= {semuaKelas.star1}></i>
                            <i className= {semuaKelas.star2}></i>
                            <i className= {semuaKelas.star3}></i>
                            <i className= {semuaKelas.star4}></i>
                            <i className= {semuaKelas.star5}></i>
                        </div>
                        <h5 className=" mb-5 px-3 ">{semuaKelas.title}</h5>
                        <div className="ket d-flex flex-row justify-content-between align-items-center px-3 pb-3 ">
                            <p className="mb-0 text-primary fw-bold ">{semuaKelas.price}</p>
                            <button className=" btn btn-danger rounded-1">{semuaKelas.buy}</button>
                        </div>
                        
                    </Col>
                )
          })}
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default Kelaspage
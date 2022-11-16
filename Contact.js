import React,{ useState} from 'react'
import Navbar from './Navbar'
import { MailSends } from "./API/api.js";
import swal from 'sweetalert';
const Contact = () => {

    const [formData, setData] = useState({
        fname:"",
        email: "",
       lname: "",
       message: "",
        errorMsg: false,
      });

      const {
        email,
        fname,
        lname,
        errorMsg,
        message,
      } = formData;
      const handleInput = (e) => {
        const { name, value } = e.target;
    
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
            errorMsg:'',
          };
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        const {fname,lname,email,message} = formData;
        const data = {fname,lname,email,message};
    
        MailSends(data)
            .then((response) => {
              swal("","Message has been sent","success");
                setData({
                  
                    fname: '',
                   lname:'',
                   email:'',
                   message:'',
                    successMsg: response.data.successMessage,
                   
                });
                // history('/login');
            })
            .catch((err) => {
                console.log('Axios feedback error: ', err);
                setData({
                    ...formData,
                    errorMsg: err.response.data.errorMessage,
                });
            });
      
        
      };
  return (
    <>
 
    {/* <h1 align="center" className='mt-5'>Contact</h1> */}
    <section
    
           initial="hidden"
           animate="visible"
           exit="visit"
         className='contact-section'>
            <div className='container'>
                <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                <div className='row'>      
                    <div className='col-12 col-lg-5 contact-left'>
                        <h1 className='main-heading fw-bold'>Contáctanos
</h1>
                        <img src="images/down.jpg" alt="" className='img-fluid' data-aos="zoon-in-right" />
                    </div>
                    <div className='col-12 col-lg-6 contact-right' data-aos="zoom-in-left" data-aos-delay="200">
                        <form>
                            <div className='row'>
                                <div className='mb-3 col-10 col-lg-6'>                               
                                    <input type="text" placeholder='Nombre
 '  className="form-control"
                                       name="fname"
                                       value={formData.fname}
                                       onChange={handleInput}
                                    />
                                </div>
                                <div className='mb-3 col-10 col-lg-6'>
                                    <input type="text" placeholder='Apellido
'
                                    
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleInput}className="form-control" />
                                </div>
                            </div>
                           
                            <div className='row'>
                                <div className=' mb-3 col-10 col-lg-12'>                               
                                    <input type="email" placeholder='Email' 
                                      name="email"
                                      value={formData.email}
                                      onChange={handleInput}
                                    className="form-control" />
                                </div>
                            </div>
                            <div className='row '>
                                <div className='mb-3 col-10 col-lg-12'>                               
                                    <textarea class="form-control" placeholder="Mensaje
"
                                      name="message"
                                      value={formData.message}
                                      onChange={handleInput}
                                    ></textarea>
 
                                </div>
                            </div>
                            <button
                  
                             className="btn btn-style w-100" type="submit" onClick={handleSubmit}>Enviar
                             </button>
                        </form>
                    </div>
                </div>
              <div className="wpb_text_column">
                <h1>
                  <strong>Direccion Ejecutiva</strong>
                </h1>
                <p>Esmeralda #732 Santiago Chile</p>
              </div>
              <div className="vc_row_wpb_row row">
              <div className="wpb_map_wraper">
                <iframe src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.561179578449!2d-70.65026218527998!3d-33.4346831807784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a2d35553df%3A0xb44871d1df9c6664!2sEsmeralda%20732%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1650394779511!5m2!1ses!2scl"
                 width="600" height="450" ></iframe>
              </div>
            </div>
            </div>
            </div>
            </div>
            
        </section> 
    </>
    
  )
}

export default Contact
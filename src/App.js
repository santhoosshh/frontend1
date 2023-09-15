import './App.css';
//import { useState } from 'react'
const App = ()=> {
   
  return (
    <div className="App">    
     
<html lang="en">
    
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Agency - Start Bootstrap Theme</title>
        
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      
        
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
      
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
        
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Equipment Hiring Services</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted"> A service industry providing machinery, equipment and tools of all kinds and sizes.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted"> A service industry providing machinery, equipment and tools of all kinds and sizes.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted"> A service industry providing machinery, equipment and tools of all kinds and sizes .</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Equipment Hiring Services.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://www.india.com/auto/wp-content/uploads/2016/12/25c26c8bf4b8715b593a56eaa429d05d_555X416_1.JPG" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Electric Bikes</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://www.rentoclick.com/uploads/product/Red_MX-min.png" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Camera</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://www.easa.europa.eu/sites/default/files/inline-images/Drones-strategy-2.0-FEATURED-image-LIGHT_0.png" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Drones</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">



                    
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://5.imimg.com/data5/ANDROID/Default/2023/2/PR/ZP/BY/119283683/product-jpeg-500x500.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Electronics Appliances</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://cdn.vectorstock.com/i/1000x1000/20/30/power-tools-electrical-drill-and-electric-vector-22362030.webp" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Power Tools</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://images.squarespace-cdn.com/content/v1/58669c64197aea52832c9a2e/1618589529593-7YA7EGTGJF06QLYGTAG1/table-chair-rental-lake-geneva-wisconsin.jpg?format=750w" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Tables And Chairs</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">All Equipments Available in RentalApp. Here, you can order any Electrical equipments in best price.</h3>
                </div>
              
            </div>
        </section>
        
        
        
        
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
                
                
                
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                                
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                                
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                
                                <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                   
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
        
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                   
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        
        
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAaVBMVEX///8AAAD8/Pz4+PiBgYHn5+dQUFDs7Ox1dXVqamr09PQyMjLx8fFZWVlVVVVxcXErKyuPj4+VlZV7e3teXl5lZWVGRkY+Pj43NzcjIyOIiIjf399LS0uioqIMDAy/v7+1tbUbGxvIyMj4obLXAAAESElEQVR4nO2b6VLjMBCELZtgyE0SckCAsO//kBtbcXxJPYfl1Fatvr+7HjrTo8saJ0kkEolEIpFIREG+Oex+woRKL+fZJlcLWZsrH0GEbItQa6WUSSkkiJT0xYaaTTRPf87MjZfBQnZVKI2U+cnceRooZFWHWs+lT09mpsFLOkBI9t4MJc1KW4gxr3ohtTUaKdOOEGO22qykr91Qxyn/6WrUtLKik5It+qHW7Kzkx/7Txuw0UtJnV6gjc16ZOoWoBnP67g7FM2jeq5GKRSYUkjkzUjDjDOY339PGvMsMSpf+UBvG8yf/4zIp2Q5EWjMCOMZNzTPfoGyPAh0ZETYogNlxpWTAmitfjBBTHIJZtlNvsQp+EPFrzpwg2Br23ESEYWQlO8MI/GqDVc8INMU/RTICCYMOWErmmaRvyJYN/+xYskRSqGIVrl++FaPKin/hmB/gkyvxQpo6lvMG3jXMt37eEC4YJbrBTIw7jZD2RtiB8/CSw7XCbDU6kv4OtMOxv7LPsTX63XDW24O2OHSl5LhYh5wQqrObh86G1LX9bTDs1EQM5tbWy7/ZK1kNEkJmpXF46R6RgmaklLKFf+C3GkH578hCyMF8ywqREe3w7fAE/8ipkDJBu19j3sIIoaR8T5LJN/wfQV4GWYiy/TN2sTYAhyASztFGADYIEaxGhkoJWCMV+Bzkg3OuEaPJSnBrLPKyDVysNVKDRrHG8iESMpI1FklWRsxIwde/IoRftqMVaw0vK6NnhCvlIUI4ZfsgIUlyIYRcHiUkSfB+5PA4IXiTPfASRgBxBipgv6EcJgTv9S3Kmw+ZELynrZC/sBELoa2x6N6UCIRQxVozbtkyrRlfSv9ODzJe2QqssaivMSkhEmssI40gmTWWAffMfnRHr6Bn4hLWzOoiuEHyGrlLCStEdrxoE/JkTFizmhL/Hs4gPI8sU+q6IdBbNmrUlHuRDC+MgUYQLtbbmkssBIMbjApwRu53gujqPkxWGNZYxjYIW9O6sCU2UQMNwvNI57qWuCUbNK8Q1nTnCSIrT/p5Bc8ji35g4pZMPa/gFxR715mGuGdWvmXCGfHs3QmDVFnBNXL2ee7u1rqjGMzYGtD6QYwgsUHCUdMkrEF4Htnj4Zji7hPRvIKtgZ0WBa4WwwYCg7A1pBBSCrtsFfNIT0qQeQULYfYYhTDoB4ZgWMOSwmmeh0sH0aHUkgI7URaMCKhfgp2RUgr6TTNGAPDel9VUV4Mmfs5rfX9bDWiTcuPva+N9jeDr3hBZY/HtV7ifRbi7FY6ad6ypMyv8RvdPh0F7qTUWVwfk+pP/fN7LiqBFt03/oCr7YqVrkMoaS3demQkyUtA2qNelJZLSGswSayx5o7flrKuRu5SGQSfFx0R1ViQfUril7PUZKaja0/ZDrLlJWQ4RUjUfBRBS1cpJ9XFVKWV13QCHEHKd+D9+zUotJBKJRCKRSOT/5i9jLi6sI0qkIQAAAABJRU5ErkJggg==" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                   
                                    <h2 class="text-uppercase">Available Electric Bikes</h2>
                                    <p class="item-intro text-muted"></p>
                                    
                                    <img class="img-fluid d-block mx-auto" src="https://www.drivespark.com/images/2021-08/ola-electric-scooter-20.jpg" alt="..." />
                                    <div class="portfolio-caption">
                          
                    <div class="portfolio-caption-heading">500 per day</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                    
                                    {"\n"}
                    
                                    <img class="img-fluid d-block mx-auto" src="https://bd.gaadicdn.com/processedimages/ola-electric/appscooter/640X309/appscooter64199d207e6e7.jpg?tr=w-360" alt="..." />
                                    <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">450 per day</div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                                    <a class="btn btn-primary btn-xl text-uppercase" href="#services">Add to cart</a>


                                    
                                    
                                       
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    
                                    <h2 class="text-uppercase">Available Cameras</h2>
                                    <p class="item-intro text-muted"></p>
                                    <img class="img-fluid d-block mx-auto" src="https://assets.website-files.com/5ada0b62d9a6513403dae684/5bbc9dfe9446782cc5287cb4_Nikon_Z7_1.jpg" alt="..." />
                                    <div class="portfolio-caption-heading">300 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                    <img class="img-fluid d-block mx-auto" src="https://static.wixstatic.com/media/a8b831_1a79d495dedb427585637abfcaf73f0f~mv2.jpg/v1/fill/w_768,h_661,fp_0.13_0.55,q_85,usm_0.66_1.00_0.01,enc_auto/a8b831_1a79d495dedb427585637abfcaf73f0f~mv2.jpg" alt="..."/> 
                                    <div class="portfolio-caption-heading">400 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>

                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                   
                                    <h2 class="text-uppercase">Available Drones</h2>
                                    <p class="item-intro text-muted"></p>
                                    <img class="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="..." />
                                    <div class="portfolio-caption-heading">500 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                    <img class="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="..."/> 
                                    <div class="portfolio-caption-heading">700 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>                             
                                        
                                        
                                        
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    
                                    <h2 class="text-uppercase">Available Electronics Appliances</h2>
                                    <p class="item-intro text-muted"></p>
                                    <img class="img-fluid d-block mx-auto" src="https://www.appliancesonrent.com/wp-content/uploads/2023/02/air-cooler-2-1024x559.png" alt="..." />
                                    <div class="portfolio-caption-heading">500 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                    <img class="img-fluid d-block mx-auto" src="https://rukminim1.flixcart.com/image/416/416/xif0q/air-cooler/y/d/v/80-80-elegant-high-speed-honey-comb-cooling-pad-ice-chamber-original-imagnz8qavzjzf2y.jpeg?q=70"alt="..." />
                                    <div class="portfolio-caption-heading">500 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    
                                    <h2 class="text-uppercase">Available Power Tools</h2>
                                    <p class="item-intro text-muted"></p>
                                    <img class="img-fluid d-block mx-auto" src="https://hips.hearstapps.com/hmg-prod/images/ghk-drills-176-1675789465.jpg?crop=0.668xw:1.00xh;0.177xw,0&resize=1200:*" alt="..." />
                                    <div class="portfolio-caption-heading">500 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                    <img class="img-fluid d-block mx-auto" src="https://www.indiantradebird.com/itb-admin/members/6211/images/0_9bdbea2e.jpg"alt="..." /> 
                                    <div class="portfolio-caption-heading">600 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                   
 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    
                                    <h2 class="text-uppercase">Available Tables and Chairs</h2>
                                    <p class="item-intro text-muted"></p>
                                    <img class="img-fluid d-block mx-auto" src="https://files.sysers.com/cp/upload/busybee/items/IMG_2078.jpg"alt="..." />
                                    <div class="portfolio-caption-heading">550 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                    <img class="img-fluid d-block mx-auto" src="https://tentandpartyrental.com/wp-content/uploads/Rental-Chairs-uai-800x450.jpg"alt="..." /> 
                                    <div class="portfolio-caption-heading">650 per day</div>
                                    <a class="btn btn-primary btn-xl text-uppercase" data-bs-toggle="modal" href="#cartpage">Add to cart</a>
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div class="portfolio-modal modal fade" id="cartpage" tabindex="-1" role="dialog" data-bs-backdrop="static" data-bs-keybord="false" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    
                                    <h2 class="text-uppercase">cart page</h2>
                                    <p class="item-intro text-muted">product Rental Amount.</p>
                                    
                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="js/scripts.js"></script>
        
        
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
</html>

    </div>
  );  

}

export default App;

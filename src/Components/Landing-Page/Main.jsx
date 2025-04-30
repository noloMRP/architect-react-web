import '/src/Components/Landing-Page/main.css'

export default function Main(){
    return (
        <>
            <section >
            <div className="page">
                <h1>PROJECT</h1>
                <h2>Lorem</h2>
            </div>
            <div className="image-container">
                <img src="src\images\Landing-Page\landing-page-image.png" alt="landing page" />
                <button>VIEW PROJECT &#x2192; </button>
            </div>
        </section>
        <section className='about-sect'>
            <div className="about-container">
                <div className="about-images">
                    <img src="src\images\Landing-Page\about-page1.png" alt="" />
                    <img src="src\images\Landing-Page\about-page2.png" alt="" />
                    <img src="src\ima ges\Landing-Page\about-page3.png" alt="" />
                </div>
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium obcaecati accusamus quod iusto dolor! Minima amet ad in! Maxime eius eos eveniet unde natus laborum, omnis dolor repudiandae in ex!</p>
                    <a href="#"> READ MORE &#x2192;</a>
                </div>
            </div>
        </section>
        <section className='mission-statement'>
                    <h1>Main Focus/Mission Statement</h1>
                    <div className="statement">
                    <h1>1</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium obcaecati accusamus quod iusto dolor! Minima amet ad in! Maxime eius eos eveniet unde natus laborum, omnis dolor repudiandae in ex!</p>  
                </div>
        </section>
        <section className='projects'>
                    <h1>Our Projects</h1>
                    {/* Duplicate project card div for more projects */}
                    <div className="project-card">
                    <img src="" alt="" />
                    <h1>Sample Project</h1>
                    <a href="/">VIEW MORE</a>
                </div>
        </section>
        <section className='contact-us'>
                    <h1>Contact Us</h1>
                    <div className="form">
                        <form action="">
                            
                            <input type="text" />
                            
                            <input type="text" />
                            
                            <input type="text" />
                            
                            <input type="text" />
                            
                            <input type="text" />
                        
                            </form>
                    </div>
        </section>
        </>
        
    )
}
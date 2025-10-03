import React from 'react'

const About = ({heading}) => {
    return (
        <>

            <h1 className='heading'>{heading}</h1>
            <section className='about'>
                <img src={require("../../../assets/About.jpg")} alt='' />
                <div className='content'>
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolot sit amet, consectetur adipisicing elit. Cumque delectus dolor culpa recusandae nihil placeat,coluptates
                        inventore voluptate quos obcarcati incidunt blanditiis a vero labore midu liberi aperuam consequatur ab.
                        Lorem ipsum dolot sit amet, consectetur adipisicing elit. Cumque delectus dolor culpa recusandae nihil placeat,coluptates
                        inventore voluptate quos obcarcati incidunt blanditiis a vero labore midu liberi aperuam consequatur ab.
                    </p>
                    <p>Lorem ipsum dolot sit amet, consectetur adipisicing elit. Cumque delectus dolor culpa recusandae nihil placeat,coluptates
                        inventore voluptate quos obcarcati incidunt blanditiis a vero labore midu liberi aperuam consequatur ab.</p>
                </div>
            </section>
        </>
    )
}

export default About
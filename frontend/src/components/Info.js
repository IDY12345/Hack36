import React from 'react'
import './Info.css'
function Info() {
    return (
        <div className='Info-Component'>
            <div className='The-Box'>
                <div className='Who-are-we'>
                    <p className='Who'>Who are we ?</p>
                    <p className='Who-Info'>We are a coalition formed with the best of experts from the industry who have teamed together to ensure that India’s journey to develop the National ETS and a robust Domestic Carbon Market is well structured with the right policy advocacy and regulatory framework.</p>
                </div>
                <div className='Who-are-we'>
                    <p className='Who'>What do we do ?</p>
                    <p className='Who-Info'>We aim to ensure that all stakeholders in carbon offsets, starting from the farmers in the remotest villagers to the MSMEs to the large industries come together to formulate strategic steps that can empower the country’s stride to a net zero future. We are enabling this with our concrete efforts to develop a robust carbon markets in India.</p>
                </div>
            </div>
            <div className='Box-1'>
                <div className='Inner-Boxes'>
                    <div className='Inner-Box1'>
                        <img src='Assets\forest.jpg' alt=''  className='Image-Nature'/>
                    </div>
                    <div className='Inner-Box2'>
                        <p className='Info1'>Carbon markets have been successful in controlling GHG emissions by enabling their trading to achieve the emission limits. With the implementation of the National ETS, the domestic carbon credits market will enable the development higher quality sources of carbon credits, benefitting both buyers and sellers and ultimately, supporting progress toward a low-carbon future. We want to further this market growth and help India achieve its NDCs and climate goals.</p>
                    </div>
                </div>

            </div>
            <div className='Box-2'>
                <div className='Inner-Boxes'>

                    <div className='Inner-Box3'>
                        <p className='Info2'>We envision that the country has become net zero with the help of a robust domestic credit market that has been built unanimously in deep cosultation with the best industry experts. We want to develop a resilient market that is inclusive yet dymanic so that India’s quest to a net-zero future can be accomiplished sooner than anticipated.</p>
                    </div>
                    <div className='Inner-Box4'>
                        <img src='Assets\Trees with Roots.jpg' alt=''  className='Image-Nature'/>
                    </div>
                </div>

            </div>
            <div className='Box-1'>
                <div className='Inner-Boxes'>
                    <div className='Inner-Box1'>
                        <img src='Assets\sphere-with-trees.jpg' alt=''  className='Image-Nature'/>
                    </div>
                    <div className='Inner-Box2'>
                        <p className='Info2'>We are committed to bringing together the entire industry for a shared goal of developing strong policy guidelines and framework for the country’s carbon market. Our mission is to empower the market with our advisory support and innovative solutions.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info
import React, { useEffect, useState } from 'react'
import NavBarIcon from "../asset/images/favicon.png"
import HomeImg from "../asset/images/services/services-08/image-01.svg"
import HomeBackImg from "../asset/images/hero/hero6-shape-1.svg"
import BrandIcon1 from "../asset/images/brands/ayroui.svg"
import BrandIcon2 from "../asset/images/brands/graygrids.svg"
import BrandIcon3 from "../asset/images/brands/lineicons.svg"
import BrandIcon4 from "../asset/images/brands/uideck.svg"
import FooterIcon from "../asset/images/logo/logo-white.svg"
import TeamImg1 from "../asset/images/team/team-03/image-01.jpg"
import TeamImg2 from "../asset/images/team/team-03/image-02.jpg"
import TeamImg3 from "../asset/images/team/team-03/image-03.jpg"
import DownloadePageImg from "../asset/images/cta/mobile-01.svg"
import ClientPageImg1 from "../asset/images/testimonials/testimonial-03/image-01.png"
import ClientPageImg2 from "../asset/images/testimonials/testimonial-03/image-02.png"

const Home = () => {
    return <div className='bg-slate-100 '>
        <div className='w-full bg-slate-50 opacity-90 sticky top-0 z-50' >
            <div className='flex text-center justify-between mx-14 p-3'>
                <div className='flex items-center '>
                    <img className='pe-4 md:h-12 lg:h-16' src={NavBarIcon} alt="" />
                    <p className='text-2xl md:text-4xl lg:text-5xl font-bold'>App</p>
                    <div className='text-lg text-center ms-[8rem] hidden lg:block '>
                        <a className='p-3' href="">Home</a>
                        <a className='p-3' href="">About</a>
                        <a className='p-3' href="">Pricing</a>
                        <a className='p-3' href="">Features</a>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='hidden sm:block '>
                        <a className='text-center text-lg pe-3' href="">Login</a>
                        <button className='bg-slate-300 text-center p-3 px-5 mx-4 rounded-xl'>Donwload</button>
                    </div>
                    <button className='text-center lg:hidden'> <i class="bi text-3xl bi-list"></i></button>
                </div>
            </div>
        </div>
        <div >
            <HomeContent />
            <Brands />
            <AboutApp />
            <PricingTable />
            <OurTeam />
            <Download />
            <Client />
            <ContactUs />
            <Footer />
        </div>
    </div>
}

const HomeContent = () => {
    return <>
        <div className='grid lg:grid-cols-12 '>
            <div className='col-span-6 bg-slate-200 lg:rounded-br-[10rem] w-full 
            py-10 md:py-10 lg:py-52 px-14'>
                <div className=''>
                    <p className='text-blue-500 text-2xl '>App Landing Page Example</p>
                    <p className='text-5xl py-4 font-bold md:w-[70%]  lg:w-full'>  Crafted with MATIC UI Components</p>
                    <p className='text-xl md:w-[60%]  lg:w-full my-3 text-gray-400'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>

                    <div className='mt-14 '>
                        <button className='px-5 shadow-xl me-4 rounded-lg p-5 text-2xl bg-slate-100'><i class="bi bi-apple m-2 bg-black text-white p-2 px-3 rounded-lg"></i> App Store</button>
                        <button className='px-5 hover:shadow-xl  rounded-lg p-5 text-2xl hover:bg-slate-100'><i class="bi bi-google-play p-2  px-3 rounded-lg"></i> Play Store</button>
                    </div>
                </div>
            </div>
            <div className='col-span-6  sm:rounded-br-[10rem] w-full h-screen px-14'>
                <div className=' relative '>
                    <img src={HomeBackImg} className='absolute ms-[10%] md:ms-[35%] lg:ms-[7rem]  mt-[3rem] ' alt="" />
                    <img src={HomeImg} className='absolute ms-[20%] md:ms-[40%] lg:ms-[10rem]  my-[5rem]  h-[33rem]' alt="" />
                </div>
            </div>
        </div>

    </>
}
const Brands = () => {
    return <>
        <div className=''>
            <div className='p-24 px-24 grid grid-cols-12' >
                <div className='hover:bg-blue-200 col-span-12 justify-center flex sm:col-span-6 md:col-span-4  lg:col-span-3 rounded-full'>
                    <img className='p-4 ' src={BrandIcon1} alt="" />
                </div>
                <div className='hover:bg-blue-200 rounded-full col-span-12 justify-center flex sm:col-span-6 md:col-span-4  lg:col-span-3 '>
                    <img className='p-4 ' src={BrandIcon2} alt="" />
                </div>
                <div className='hover:bg-blue-200 rounded-full col-span-12 justify-center flex sm:col-span-6 md:col-span-4  lg:col-span-3 '>
                    <img className='p-4 ' src={BrandIcon3} alt="" />
                </div>
                <div className='hover:bg-blue-200  rounded-full col-span-12 justify-center flex sm:col-span-6 md:col-span-12  lg:col-span-3 '>
                    <img className='p-4 ' src={BrandIcon4} alt="" />
                </div>
            </div>
        </div>

    </>
}

const AboutApp = () => {
    return <>
        <div className='grid lg:grid-cols-12 gap-5'>
            <div className='col-span-6 w-full 
             px-14'>
                <div className=''>
                    <p className='text-blue-500 text-2xl '>About Our App</p>
                    <p className='text-4xl py-4 font-bold md:w-[70%]  lg:w-full'> All You Need to Know About The App</p>
                    <div className='grid  cols-1 md:grid-cols-2 lg:grid-cols-2  my-8 gap-5'>
                        <div >
                            <div className='my-8'>
                                <i class="bi bg-blue-500 text-4xl p-3 rounded-2xl bi-lock"></i>
                            </div>
                            <p className='text-2xl my-3'>Security Maintenance</p>
                            <p className='text-gray-400 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                        </div>
                        <div className=''>
                            <div className='my-8'>
                                <i class="bi bg-yellow-500 text-4xl p-3 rounded-2xl bi-database"></i>
                            </div>
                            <p className='text-2xl my-3'>Backup Database</p>
                            <p className='text-gray-400 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                        </div>
                        <div className=''>
                            <div className='my-8'>
                                <i class="bi bg-green-500 text-4xl p-3 rounded-2xl bi-box"></i>
                            </div>
                            <p className='text-2xl my-3'>Server Maintenance</p>
                            <p className='text-gray-400 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                        </div>
                        <div className=''>
                            <div className='my-8'>
                                <i class="bi bg-purple-500 text-4xl p-3 rounded-2xl bi-cpu"></i>
                            </div>
                            <p className='text-2xl my-3'>No Risk Protestable</p>
                            <p className='text-gray-400 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                        </div>
                    </div>
                </div>
            </div >
            <div div className='col-span-6  w-full h-screen px-14' >
                <div className='flex justify-center '>
                    <img src={HomeImg} className='' alt="" />
                </div>
            </div >
        </div >

    </>
}

const PricingTable = () => {
    return <>
        <div className='mt-48 md:mt-48  lg:mt-28 text-center px-5'>
            <p className='text-blue-500 text-2xl '> Pricing Table</p>
            <p className='text-4xl py-3 font-bold'>
                Awesome Pricing Plan
            </p>
            <div className=' flex justify-center  w-full'>
                <p className='text-xl md:w-[70%] lg:w-[60%] '>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
            </div>
        </div>
        <div className=" mt-20 bg-slate-50 shadow-xl mx-20">
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=''>
                            <th className=''>
                                <div className='w-[17rem] '>
                                    <div className=' rounded-br-3xl '>
                                        <img className='p-5' src={HomeBackImg} alt="" />
                                    </div>
                                </div>
                            </th>
                            <th className='p-5'>
                                <div className=' w-[14rem] mt-12 text-xl'>
                                    <p className='text-xl text-start my-5'>Starter</p>
                                    <span className='text-5xl font-bold'>$59</span>
                                    <span className='font-bold mb-5 text-gray-500'> Per Month</span>
                                    <p className='my-4 font-normal text-start text-gray-400 '>Best suited for freelancers individually.</p>
                                    <button className='p-3 my-5 px-5 text-white font-normal w-full rounded-lg bottom-0 bg-blue-500'> Purchase Now</button>
                                </div>
                            </th>
                            <th className='p-5'>
                                <div className=' w-[14rem] mt-12 text-xl'>
                                    <p className='text-xl text-start my-5'>Agency</p>
                                    <span className='text-5xl font-bold'>$99</span>
                                    <span className='font-bold mb-5 text-gray-500'> Per Month</span>
                                    <p className='my-4 font-normal text-start text-gray-400 '>Best suited for agencies and large business.</p>
                                    <button className='p-3 my-5 px-5 text-white font-normal w-full rounded-lg bottom-0 bg-green-500'> Purchase Now</button>
                                </div>
                            </th>
                            <th className='p-5'>
                                <div className=' w-[14rem] mt-12 text-xl'>
                                    <p className='text-xl text-start my-5'>Extended</p>
                                    <span className='text-5xl font-bold'>$149</span>
                                    <span className='font-bold mb-5 text-gray-500'> Per Month</span>
                                    <p className='my-4 font-normal text-start text-gray-400 '>Best suited for agencies and large business.</p>
                                    <button className='p-3 my-5 px-5 text-white font-normal w-full rounded-lg bottom-0 bg-blue-500'> Purchase Now</button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}
                        <tr className='text-center text-xl border-t-2'>
                            <td className='py-4'>Features Limits</td>
                            <td className='py-4'><p>Features Limits</p></td>
                            <td className='py-4'>Features Limits</td>
                            <td className='py-4'> Features Limits</td>
                        </tr>
                        {/* row 2 */}
                        <tr className='text-center text-xl my-10 border-t-2'>
                            <td className='py-4'> Seats</td>
                            <td className='py-4'> 1 Developer</td>
                            <td className='py-4'> 5 Developer</td>
                            <td className='py-4'>20 Developer</td>
                        </tr>
                        {/* row 3 */}
                        <tr className='text-center text-xl my-10 border-t-2'>
                            <td className='py-4'>Domains/Products</td>
                            <td className='py-4'>5 Products</td>
                            <td className='py-4'>5 Products</td>
                            <td className='py-4'>5 Products</td>
                        </tr>
                        {/* row 4 */}
                        <tr className='text-center text-xl border-t-2 my-10'>
                            <td className='py-4'>Email Support</td>
                            <td className='py-4'>6 Months</td>
                            <td className='py-4'>6 Months</td>
                            <td className='py-4'>6 Months</td>
                        </tr>
                        <tr className='text-center text-xl border-t-2 my-10'>
                            <td className='py-4'>All Pro Components</td>
                            <td className='py-4'><i class="bi text-green-600 text-2xl bi-check-circle"></i></td>
                            <td className='py-4'><i class="bi text-green-600 text-2xl bi-check-circle"></i></td>
                            <td className='py-4'><i class="bi text-green-600 text-2xl bi-check-circle"></i></td>
                        </tr>
                        <tr className='text-center text-xl border-t-2 my-10'>
                            <td className='py-4'>Design Source Files</td>
                            <td className='py-4'><i class="bi  text-green-600 text-2xl bi-x-circle"></i></td>
                            <td className='py-4'><i class="bi  text-green-600 text-2xl bi-check-circle"></i></td>
                            <td className='py-4'><i class="bi  text-green-600 text-2xl bi-check-circle"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

const OurTeam = () => {
    return <>
        <div className='mt-28 md:mt-28  lg:mt-28 text-center px-5'>
            <p className='text-blue-500 text-2xl '>Our Team</p>
            <p className='text-4xl py-3 font-bold'>
                Meet Our Team
            </p>
            <div className=' flex justify-center  w-full'>
                <p className='text-xl w-full md:w-[70%] lg:w-[60%] '>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-12  mt-20 px-20 gap-6">
            <div className='col-span-12 group md:col-span-6 lg:col-span-4 relative bg-slate-50 overflow-hidden   p-7 border rounded-xl'>
                <div className='absolute right-[0rem] hidden group-hover:block rounded-full top-[-20px] h-12 w-12 bg-green-500'></div>
                <div className='absolute right-[-1.3rem]  hidden group-hover:block top-[5px] rounded-full h-14 w-14 bg-blue-500'></div>
                <img src={TeamImg1} alt="" />
                <p className='text-2xl pt-5 pb-1'> Jackie Sanders</p>
                <div className=' text-gray-500'>
                    <p className='text-sm'> CONTENT WRITER</p>
                    <p className='py-5'> Fermentum massa justo sit amet risus morbi leo.</p>
                </div>
                <div>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-facebook'></i></a>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-linkedin'></i></a>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-google'></i></a>
                </div>
            </div>
            <div className='col-span-12 group md:col-span-6 lg:col-span-4 relative bg-slate-50 overflow-hidden  p-7 border rounded-xl'>
                <div className='absolute hidden group-hover:block right-[0rem] rounded-full top-[-20px] h-12 w-12 bg-green-500'></div>
                <div className='absolute hidden group-hover:block right-[-1.3rem] top-[5px] rounded-full h-14 w-14 bg-blue-500'></div>
                <img src={TeamImg2} alt="" />
                <p className='text-2xl pt-5 pb-1'>Andrieo Gloree</p>
                <div className=' text-gray-500'>
                    <p className='text-sm'>  WEB DEVELOPER</p>
                    <p className='py-5'> Fermentum massa justo sit amet risus morbi leo.</p>
                </div>
                <div>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-facebook'></i></a>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-linkedin'></i></a>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-google'></i></a>
                </div>
            </div>
            <div className='col-span-12 group md:col-start-4  md:col-span-6 lg:col-span-4 relative bg-slate-50 overflow-hidden  p-7 border rounded-xl'>
                <div className='absolute hidden group-hover:block right-[0rem] rounded-full top-[-20px] h-12 w-12 bg-green-500'></div>
                <div className='absolute hidden group-hover:block right-[-1.3rem] top-[5px] rounded-full h-14 w-14 bg-blue-500'></div>
                <img src={TeamImg3} alt="" />
                <p className='text-2xl pt-5 pb-1'>  Adveen Desuzas</p>
                <div className=' text-gray-500'>
                    <p className='text-sm'>DIGITAL MARKETER</p>
                    <p className='py-5'> Fermentum massa justo sit amet risus morbi leo.</p>
                </div>
                <div>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-facebook'></i></a>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-linkedin'></i></a>
                    <a href=""><i className='bi hover:text-blue-600  rounded-lg me-4 text-gray-400 bi-google'></i></a>
                </div>
            </div>
        </div>
    </>
}

const Download = () => {
    return <>
        <div className='w-full 
            py-10 md:py-10 md:px-20 px-10'>
            <div className='bg-slate-200 h-screen relative overflow-hidden  p-5 rounded-lg my-16 py-20 '>
                <div className='absolute hidden md:block lg:block right-[-3rem] rounded-full top-[-8rem] h-[22rem] w-[22rem] bg-green-500'></div>
                <div className='absolute  hidden md:block lg:block right-[-4.3rem] top-[5rem] rounded-full h-52 w-52 bg-blue-500'></div>
                <div className=' lg:w-[50%] md:w-[70%] z-50 absolute '>
                    <p className=' text-3xl md:text-4xl lg:text-4xl py-4 font-bold lg:w-full'>
                        Download Now and Get Started Immediately!
                    </p>
                    <p className='text-lg lg:w-full my-3 text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                    <div className='mt-14 '>
                        <button className='px-5 shadow-xl rounded-lg p-5 text-xl bg-slate-100'><i class="bi bi-apple m-2 bg-black text-white p-2 px-3 rounded-lg"></i> App Store</button>
                        <button className='px-5 hover:shadow-xl my-2 m-2 rounded-lg p-5 text-xl hover:bg-slate-100'><i class="bi bi-google-play p-2  px-3 rounded-lg"></i> Play Store</button>
                    </div>
                </div>

                <div className='absolute hidden lg:block bottom-0 left-[57%]'>
                    <img src={DownloadePageImg} alt="" />
                </div>
            </div>

        </div>
    </>
}

const Client = () => {
    const [users, setUsers] = useState([
        { img1: ClientPageImg2, textt: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.", name: "Healther Bennit", founder: "Founder - Dailousm" },
        { img1: ClientPageImg1, textt: "But the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage.", name: "Kamala Harish", founder: "Founder - ProductHunt" }
        //  
    ])
    const [index, setIndex] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex(pre => (pre + 1) % users.length)
    //     }, 1000);

    //     return () => clearInterval(interval)
    // }, [])


    return <>
        <div className=' text-center px-5 pb-16'>
            <p className='text-blue-500 text-2xl '>What People Says</p>
            <p className='text-4xl py-3 font-bold'>
                Client Testimonials
            </p>
            <div className=' flex justify-center pb- w-full'>
                <p className='text-xl text-gray-600 md:w-[70%] lg:w-[60%] '>
                    {users[index].text}
                </p>
            </div>
        </div>
        <div className=' w-full p-5 lg:flex lg:justify-center'>
            <div className='bg-slate-300 md:flex lg:flex rounded-xl justify-center relative p-14 w-[100%] sm:w-[95%] md:w-[80%] md:mx-auto lg:mx-52'>
                <div className='h-14 w-16 rounded-tl-full border-2 absolute border-blue-600 top-[-1.5rem] right-[-1rem]'>
                    <div className='h-8 w-8 rounded-tr-full bg-green-600 bottom-[-1rem] absolute right-3'></div>
                </div>
                <div className='rotate-45 absolute left-[12%] top-[28%] sm:left-[8%] sm:top-[28%]
                md:left-[4%] md:top-[32%] '>
                    <div className='h-6 rounded-3xl w-60 md:w-52 bg-green-600'></div>
                    <div className='h-6 rounded-3xl w-60 md:w-52 bg-blue-600 '></div>
                </div>
                <div className='relative m-8 md:m-0 md:me-8'>
                    <img className='md:h-[8rem] md:w-[22rem] z-10' src={users[index].img1} alt="" />
                </div>
                <div>
                    <p className='text-lg text-gray-600  '>
                        {users[index].textt}
                    </p>
                    <p className='text-blue-500 text-2xl pt-3'> {users[index].name} </p>
                    <p><i> {users[index].founder}</i></p>
                    <button onClick={e => setIndex(index === 0 ? 0 : index - 1)} >-</button>
                    <button onClick={e => setIndex(index === users.length - 1 ? index : index + 1)} >+</button>
                </div>
            </div>
        </div>
    </>
}

const ContactUs = () => {
    return <>
        <div className='grid grid-cols-12 p-6 sm:p-10 md:p-12 lg:p-24 mt-12 bg-slate-200'>
            <div className=' hidden lg:block col-span-12 lg:col-span-4 bg-blue-700  relative  overflow-hidden'>
                <div className='h-72 rotate-[30deg] w-[30rem] bg-blue-400 opacity-40 absolute right-[-1rem] bottom-[-3rem]'></div>
                <div className='h-72 -rotate-[30deg] w-[30rem] bg-emerald-500 absolute left-[-1rem] bottom-[-3rem]'></div>
                <div className=' mt-auto absolute left-12 text-white bottom-10 text-xl'>
                    <p className='my-4'>Follow Us On</p>
                    <i className='bi me-2 bi-google '></i>
                    <i className='bi mx-2 bi-facebook '></i>
                    <i className='bi mx-2 bi-twitter'></i>
                    <i className='bi mx-2 bi-linkedin'></i>
                </div>

                <div className=' w-52 text-center lg:rotate-[270deg] absolute lg:top-32 lg:left-[-3rem]'>
                    <p className='lg:text-3xl mb-0 font-bold text-white'>- Contact</p>
                </div>
            </div>
            <div className='lg:hidden overflow-hidden relative col-span-12 lg:col-span-4 h-60 bg-blue-700'>
                <div className='h-36 rotate-[30deg] w-[10rem] bg-blue-400 opacity-40 absolute left-[-3rem] top-[-1rem]'></div>
                <div className='h-80 -rotate-[25deg] w-[34rem] bg-emerald-500 absolute left-[-1.5rem] bottom-[-4.5rem]'>
                    <div className='bg-emerald-500 sm:bg-blue-700 h-[25rem] rotate-[25deg] bottom-[-3rem] right-[-5rem] absolute w-[10rem]'></div>
                </div>
                <p className='text-3xl font-bold absolute text-white m-8'>- Contact</p>
                <div className='text-xl  bottom-0 absolute text-white m-8'>
                    <p className='my-2'>Follow Us On</p>
                    <i className='bi me-2 bi-google '></i>
                    <i className='bi mx-2 bi-facebook '></i>
                    <i className='bi mx-2 bi-twitter'></i>
                    <i className='bi mx-2 bi-linkedin'></i>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-8 bg-white p-24'>
                <p className='text-3xl font-bold '> Get In Touch With Us</p>
                <p className='text-lg py-5 text-gray-500'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <div className='grid grid-cols-12 gap-5 '>
                    <div className=' col-span-12 md:col-span-6 lg:col-span-6 border-none' placeholder='FullName'>
                        <div class="flex items-center border-b border-teal-500 py-2 my-3">
                            <input class="appearance-none bg-transparent  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full name" aria-label="Full name" />
                        </div>
                        <div class="flex items-center border-b border-teal-500 py-2 my-3">
                            <input class="appearance-none bg-transparent  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone Number" aria-label="Full name" />
                        </div>
                    </div>
                    <div className=' col-span-12 md:col-span-6 lg:col-span-6 border-none' placeholder='FullName'>
                        <div class="flex items-center border-b border-teal-500 py-2 my-3">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Full name" />
                        </div>
                        <div class="flex items-center border-b border-teal-500 py-2 my-3">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subject" aria-label="Full name" />
                        </div>
                    </div>
                </div>
                <div class="flex items-center border-b border-teal-500 py-2 my-3 mt-10">
                    <textarea class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Type your message " cols="0" rows="5" />
                </div>
                <button className='py-2 bg-blue-600 rounded-lg text-white px-8 text-xl mt-10'>Send Message</button>
            </div>
        </div>
    </>
}

const Footer = () => {
    return <>
        <div className='grid relative px-20 text-white gap-3 bg-blue-600 grid-cols-12 py-36'>
            <div className='absolute h-36 w-36 rounded-bl-full opacity-30 bg-green-500 right-0'></div>
            <div className='  lg:col-span-3 col-span-12 text-lg'>
                <img className='py-6' src={FooterIcon} alt="" />
                <p className='py-4 text-lg'> Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>

                <p><i class="bi text-2xl me-3 bi-telephone-forward"></i>+012 (345) 678 99</p>
            </div>
            <div className=' col-span-12 md:col-span-6 lg:col-span-2 text-lg'>
                <p className='font-bold text-2xl py-6'> Resources</p>
                <p>SaaS Development</p>
                <p className='py-3'> Our Products</p>
                <p> User Flow</p>
                <p className='py-3'>User Strategy</p>
            </div>
            <div className=' text-lg col-span-12 md:col-span-6 lg:col-span-2'>
                <p className='font-bold text-2xl py-6'>  Company</p>
                <p>About Matic UI</p>
                <p className='py-3'> Contact & Support</p>
                <p> Success History</p>
                <p className='py-3'>Setting & Privacy</p>
            </div>
            <div className=' text-lg col-span-12 md:col-span-6 lg:col-span-2'>
                <p className='font-bold text-2xl py-6'>  Quick Links</p>
                <p>Premium Support</p>
                <p className='py-3'> Our Services</p>
                <p>Know Our Team</p>
                <p className='py-3'>Download App</p>
            </div>
            <div className=' text-lg col-span-12 md:col-span-6 lg:col-span-3'>
                <p className='font-bold text-2xl py-6'>  Follow Us On</p>
                <p className='text-lg'>
                    <i className='bi border-2 hover:text-blue-600 hover:bg-white rounded-lg me-1 p-2 bi-facebook'></i>
                    <i className='bi border-2 hover:text-blue-600 hover:bg-white rounded-lg mx-1 p-2 bi-twitter'></i>
                    <i className='bi border-2 hover:text-blue-600 hover:bg-white rounded-lg mx-1 p-2 bi-linkedin'></i>
                    <i className='bi border-2 hover:text-blue-600 hover:bg-white rounded-lg mx-1 p-2 bi-google'></i>
                </p>
                <p className='pt-6'> © 2025 Matic UI</p>

            </div>
        </div>
    </>
}

export default Home
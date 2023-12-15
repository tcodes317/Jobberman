import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";

function Explorer(){
    return(
        <>
            
            <div className="relative bg-purple-700 py-12">
                    <h1 className="text-center xl:text-6xl xl:w-2/12 xl:w-5/12 xl:w-4/12 xxs:text-3xl mx-auto pb-14 xxxs:text-white font-bold xxxs:text-5xl xxxs:text-center xxxs:w-11/12">Explore and discover the right job for you!</h1>
                    <div className="px-4 xxxs:space-y-2 xxxs:py-6 py-2 bg-purple-400 xxxs:flex-col xl:flex-row flex justify-center items-center">
                        <div className="xxxs:w-full">
                            <select className="p-2 rounded-lg focus:outline-none xxxs:w-full">
                            <option>Any Job Functions</option>
                            <option>Accounting, Auditing & Finance</option>
                            <option>Admin & Office</option>
                            <option>Building & Architecture</option>
                            <option>Community & Social Services</option>
                            <option>Consulting & Strategy</option>
                            <option>Creative & Design</option>
                            <option>Customer Service & Support</option>
                            <option>Driver & Transport Services</option>
                            <option>Engineering & Technology</option>
                            <option>Estate Agents & Property Management</option>
                            <option>Farming & Agriculture</option>
                            <option>Food Services & Catering</option>
                            <option>Health & Safety</option>
                            <option>Hospitality & Leisure</option>
                            <option>Human Resources</option>
                            <option>Legal Services</option>
                            <option>Management & Business Development</option>
                            <option>Marketing & Communications</option>
                            <option>Medical & Pharmaceutical</option>
                            <option>Product & Project Management</option>
                            <option>Quality Control & Assurance</option>
                            <option>Research, Teaching & Training</option>
                            <option>Sales</option>
                            <option>Software & Data</option>
                            <option>Supply Chain & Procurement</option>
                            <option>Trades & Services</option>
                            </select>
                        </div>
                        <div className="xxxs:w-full">
                            <select className="p-2 rounded-lg focus:outline-none xxxs:w-full">
                            <option>Any Industries</option>
                            <option>Advertising, Media & Communications</option>
                            <option>Agriculture, Fishing & Forestry</option>
                            <option>Automotive & Aviation</option>
                            <option>Banking, Finance & Insurance</option>
                            <option>Construction</option>
                            <option>Education</option>
                            <option>Energy & Utilities</option>
                            <option>Enforcement & Security</option>
                            <option>Entertainment, Event & Sport</option>
                            <option>Government</option>
                            <option>Healthcare</option>
                            <option>Hospitality & Hotel</option>
                            <option>IT & Telecoms</option>
                            <option>Law & Compliance</option>
                            <option>Manufacturing & Warehousing</option>
                            <option>Mining, Energy & Metals</option>
                            <option>NGO, NPO & Charity</option>
                            <option>Real Estate</option>
                            <option>Recruitment</option>
                            <option>Retail, Fashion & FMCG</option>
                            <option>Shipping & Logistics</option>
                            <option>Tourism & Travel</option>
                            </select>
                        </div>
                        <div className="xxxs:w-full">
                            <select className="p-2 rounded-lg focus:outline-none xxxs:w-full">
                            <option>Any Locations</option>
                            <option>Edo</option>
                            <option>Sokoto</option>
                            <option>Gbombe</option>
                            <option>Yobe</option>
                            <option>Plateau</option>
                            <option>Bauchi</option>
                            <option>Jigawa</option>
                            <option>Kano</option>
                            <option>Kaduna</option>
                            <option>Abia</option>
                            <option>Akwa Ibom</option>
                            <option>Delta</option>
                            <option>Nassarawa</option>
                            <option>Nationwide</option>
                            <option>Ondo</option>
                            <option>Kwara</option>
                            <option>Anambra</option>
                            <option>Osun</option>
                            <option>Ekiti</option>
                            <option>Abeokuta & Ogun State</option>
                            <option>Abuja</option>
                            <option>Bayelsa</option>
                            <option>Benue</option>
                            <option>Ebonyi</option>
                            <option>Enugu</option>
                            <option>Ibadan & Oyo State</option>
                            <option>Imo</option>
                            <option>Katsina</option>
                            <option>Lagos</option>
                            <option>Maiduguri & Borno State</option>
                            <option>Port Harcourt & River State</option>
                            <option>Rest of Nigeria</option>
                            <option>Outside Nigeria</option>
                            <option>Remote (Work from Home)</option>
                            </select>
                        </div>
                        <div className="xxxs:w-full">
                            <select className="p-2 rounded-lg focus:outline-none xxxs:w-full">
                            <option>Any Experience Levels</option>
                            <option>No Experience</option>
                            <option>Internship & Graduate</option>
                            <option>Entry level</option>
                            <option>Mid level</option>
                            <option>Senior level</option>
                            <option>Executive level</option>
                            </select>
                        </div>
                        <button className="xxxs:w-full p-2 rounded-lg px-6 text-white w-1/12 bg-blue-500">
                            <span>Find a Job</span>
                        </button>
                    </div>
                    <div className="py-6">
                        <span className="text-white ml-5">Recent searches</span>
                        <div className="relative mt-6 xxxs:w-7/12 xxxs:mx-auto"> {/** carousel  */}
                            <div className="inline-flex">
                                <button className="xxxs:w-4/12 absolute left-0" id="btn_a">
                                    <FaAngleLeft className="text-white text-3xl"/>
                                </button>
                                <div className="flex items-center border-2 relative top-4">
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Remote (Work from Home)</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Contract</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">NGO, NPO & Charity</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Banking, Finance & Insurance</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Abuja</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">IT & Telecoms</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Rest of Nigeria</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">NGO, NPO & Charity</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Part Time</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Contract</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Abuja</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Remote (Work From Home)</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Enforcement & Security</span>
                                    </div>
                                    <div className="flex items-center truncate">
                                        <FaSearch className="text-white" />
                                        <span className="text-white">Healthcare</span>
                                    </div>
                                </div>
                                <button id="btn_b" className="right-0 absolute">
                                    <FaAngleRight className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Explorer;
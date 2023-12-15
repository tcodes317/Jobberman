import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";

function Explorer(){
    return(
        <>
            
            <div className="relative bg-purple-700 py-12">
                    <h1 className="text-center xl:text-6xl xl:w-2/12 border-2 xl:w-5/12 xl:w-4/12 mx-auto pb-14 xxxs:text-white font-bold xxxs:text-5xl xxxs:text-center xxxs:w-11/12">Explore and discover the right job for you!</h1>
                    <div className="py-2` bg-purple-400">
                        <select>
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
                        <select>
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
                        
                        <select>
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
                        </select>
                        <select>
                            <option>Any Experience Levels</option>
                        </select>
                        <div>
                            <button>
                                <span>Find a Job</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <span>Recent searches</span>
                        <div className="relative"> {/** carousel  */}
                            <div className="inline-flex">
                                <button>
                                    <FaAngleLeft className="text-white"/>
                                </button>
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">Remote (Work from Home)</span>
                                </div>
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">Contract</span>
                                </div>
                                
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">NGO, NPO & Charity</span>
                                </div>
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">Banking, Finance & Insurance</span>
                                </div>
                                
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">Abuja</span>
                                </div>
                                
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">IT & Telecoms</span>
                                </div>
                                
                                <div className="flex items-center">
                                    <FaSearch className="text-white" />
                                    <span className="text-white">Rest of Nigeria</span>
                                </div>
                                <button>
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
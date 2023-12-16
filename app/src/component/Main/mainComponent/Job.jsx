function Job(){
    return(
        <>
            <div className="relative">
                <h1 className="text-3xl text-center my-6">Jobs for you</h1>
                <div className="flex items-center justify-center">
                    <button className="p-3 bg-blue-800 px-7 rounded-lg text-white">
                        <span>Explore All Jobs</span>
                    </button>
                </div>
                <div className="mt-8">
                    <div className="flex items-center space-x-2">
                        <button className="flex items-center bg-orange-300 px-2 rounded-full">
                            <span className="text-sm">Featured</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
                                <path d="M7.85008 3.08333L4.00837 6.92504C3.55276 7.38065 3.55276 8.11935 4.00837 8.57496C4.46398 9.03057 5.20267 9.03057 5.65829 8.57496L9.39991 4.73325C10.3111 3.82203 10.3111 2.34464 9.39991 1.43342C8.48869 0.522194 7.0113 0.522194 6.10008 1.43342L2.35845 5.27513C0.991619 6.64196 0.991619 8.85804 2.35845 10.2249C3.72529 11.5917 5.94137 11.5917 7.3082 10.2249L10.9583 6.58333" stroke="#D42B3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button className="flex items-center bg-orange-300 px-2 rounded-full">
                            <span className="text-sm">Popular</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.39999 1.9C7.01339 1.9 6.69999 1.5866 6.69999 1.2C6.69999 0.8134 7.01339 0.5 7.39999 0.5H10.9C11.2866 0.5 11.6 0.8134 11.6 1.2V4.7C11.6 5.0866 11.2866 5.4 10.9 5.4C10.5134 5.4 10.2 5.0866 10.2 4.7V2.88995L7.19497 5.89497C6.9216 6.16834 6.47839 6.16834 6.20502 5.89497L4.59999 4.28995L1.59497 7.29497C1.3216 7.56834 0.878386 7.56834 0.605019 7.29497C0.331652 7.0216 0.331652 6.57839 0.605019 6.30502L4.10502 2.80502C4.37839 2.53166 4.8216 2.53166 5.09497 2.80502L6.69999 4.41005L9.21004 1.9H7.39999Z" fill="#0091FF"></path>
                            </svg>
                        </button>
                        <button className="flex items-center bg-orange-300 px-2 rounded-full">
                            <span className="text-sm">New</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
                                <path d="M7 1.75V2.33333M7 11.6667V12.25M12.25 7H11.6667M2.33333 7H1.75M10.7123 10.7123L10.2998 10.2998M3.70017 3.70017L3.28769 3.28769M10.7123 3.28772L10.2999 3.7002M3.7002 10.2999L3.28772 10.7123M9.33333 7C9.33333 8.28866 8.28866 9.33333 7 9.33333C5.71134 9.33333 4.66667 8.28866 4.66667 7C4.66667 5.71134 5.71134 4.66667 7 4.66667C8.28866 4.66667 9.33333 5.71134 9.33333 7Z" stroke="#389660" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative mx-3 my-4 space-y-4">
                    <div className="p-3 border-2 rounded-lg"> {/** box */}
                        <h1 className="font-bold">Cross Platform Mobile App Developer</h1>
                        <p>Bakkaz Trading and Investment Ltd</p>
                        <div className="flex items-center flex-wrap mt-4">
                            <div className="xxxs:mr-2 bg-slate-300 px-2 rounded-md">Lagos</div>
                            <div className="xxxs:mr-2 bg-slate-300 px-2 rounded-md">Full Time</div>
                            <div className="bg-slate-300 px-2 mt-2 rounded-md">NGN 150,000 - 250,000</div>
                        </div>
                            <div className="block mt-3">1mo</div>
                    </div>
                    <div className="p-3 border-2 rounded-lg"> {/** box */}
                        <div className="my-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.85008 3.08333L4.00837 6.92504C3.55276 7.38065 3.55276 8.11935 4.00837 8.57496C4.46398 9.03057 5.20267 9.03057 5.65829 8.57496L9.39991 4.73325C10.3111 3.82203 10.3111 2.34464 9.39991 1.43342C8.48869 0.522194 7.0113 0.522194 6.10008 1.43342L2.35845 5.27513C0.991619 6.64196 0.991619 8.85804 2.35845 10.2249C3.72529 11.5917 5.94137 11.5917 7.3082 10.2249L10.9583 6.58333" stroke="#D42B3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <h1 className="font-bold">Floor Manager</h1>
                        <p>Bakkaz Trading and Investment Ltd</p>
                        <div className="flex items-center flex-wrap mt-4">
                            <div className="xxxs:mr-2 bg-slate-300 px-2 rounded-md">Lagos</div>
                            <div className="xxxs:mr-2 bg-slate-300 px-2 rounded-md">Full Time</div>
                            <div className="bg-slate-300 px-2 mt-2 rounded-md">NGN 75,000 - 150,000</div>
                        </div>
                            <div className="block mt-3">1mo</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Job;
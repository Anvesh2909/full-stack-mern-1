import Navbar from "./Navbar.jsx";

const LandingPageRoute = () => (
    <div>
        <Navbar />
        <div className="flex flex-col md:flex-row items-center justify-between p-9">
            <div className="md:w-[60%] text-center md:text-left w-[100%]">
                <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
                <p className="text-2xl mt-[30px] mb-[25px]">
                    Book and learn helpful tips from 3,168+ mentors in world-class
                    companies with our global community.
                </p>
                <button className="bg-primary rounded-[10px] px-5 py-3 text-white">Explore Now</button>
            </div>
            <img className="md:w-[30%] lg:w-[23%] md:h-[100%] h-[390px]" src="/assets/images/hero.png" alt="hero image"/>
        </div>
        <div>
            <h2>Trusted by Thousands of Events</h2>
            <div>
                <input type="search" />
                <select>
                    <option value="all">All</option>
                    <option value="nextjs">NextJS</option>
                    <option value="uiux">UI/UX</option>
                    <option value="development">Development</option>
                    <option value="tech">Tech</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="ai-short">AI</option>
                </select>
            </div>
        </div>
    </div>
)

export default LandingPageRoute;
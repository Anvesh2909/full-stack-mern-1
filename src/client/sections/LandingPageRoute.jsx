import Navbar from "./Navbar.jsx";

const LandingPageRoute = () => (
    <div>
        <Navbar />
        <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="md:w-3/5 text-center md:text-left w-[100%]">
                <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
                <p className="mt-3 mb-3">
                    Book and learn helpful tips from 3,168+ mentors in world-class
                    companies with our global community.
                </p>
                <button className="bg-primary rounded-3xl px-4 py-2 text-white">Explore Now</button>
            </div>
            <img className="md:w-1/4 h-[300px]" src="/assets/images/hero.png" alt="hero image"/>
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

export default LandingPageRoute
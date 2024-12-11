import Navbar from "./Navbar.jsx";

const LandingPageRoute = () => (
    <div>
        <Navbar />
        <div className="flex items-center justify-around">
            <div className="w-3/5">
                <h1 className="font-bold text-6xl">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
                <p className="mt-3 mb-3">
                    Book and learn helpful tips from 3,168+ mentors in world-class
                    companies with our global community.
                </p>
                <button className="bg-primary rounded-3xl px-4 py-2 text-white">Explore Now</button>
            </div>
            <img className="w-1/4" src="/assets/images/hero.png" alt="hero image"/>
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
import "./Tracks.css";

function Tracks() {
  return (
    <div>
      <section className="tracks">
        <div className="introduct">
          <h1>Murang'a University Tech Club</h1>
          <p>
            "Explore the diverse range of courses offered by the Murang'a University Tech Club (MUTC). From Cyber Security to Mobile App Development, our courses are designed to equip students with cutting-edge skills and knowledge in various tech fields, led by experienced professionals dedicated to your success."
          </p>
        </div>

        <div className="partone">
          <div className="them_tracks">
            <h2>Cyber security</h2>
            <p>
              Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats...
            </p>
          </div>

          <div className="them_tracks">
            <h2>UI/UX design</h2>
            <p>
              Enroll in the UI/UX Design track and explore the principles of creating user-friendly and visually appealing interfaces...
            </p>
          </div>

          <div className="them_tracks">
            <h2>Web development</h2>
            <p>
              Pursue the Web Development track and gain comprehensive knowledge in building dynamic and responsive websites...
            </p>
          </div>
        </div>

        <div className="part2">
          <div className="them_tracks">
            <h2>Mobile apps development</h2>
            <p>
              Opt for the Mobile Apps Development track and learn to design and build applications for mobile devices...
            </p>
          </div>

          <div className="them_tracks">
            <h2>Cloud engineering</h2>
            <p>
              Choose the Cloud Engineering track and dive into the world of cloud computing and its applications...
            </p>
          </div>

          <div className="them_tracks">
            <h2>Power Platform</h2>
            <p>
              Select the Power Platform track and explore the capabilities of Microsoft's Power Platform...
            </p>
          </div>
        </div>

        <div className="apply">
          <h2>
            Unlock your potential by enrolling in the course of your choice at Murang'a University Tech Club (MUTC). Whether you're passionate about Cyber Security, UI/UX Design, Web Development, or Mobile App Development, we have the perfect course for you. Join us and start your journey towards tech excellence today!
          </h2>
        </div>

        <section className="form">
          <form className="theform">
            <div className="contacts" id="fullname">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="contacts" id="email">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="Email address" required />
            </div>

            <div className="contacts" id="course">
              <label htmlFor="course">Current Course</label>
              <input type="text" placeholder="Current Course" required />
            </div>

            <div className="contacts" id="yearofstudy">
              <label htmlFor="yearofstudy">Year Of Study</label>
              <input type="text" placeholder="Year of Study" required />
            </div>

            <div className="contacts" id="tracks">
              <label htmlFor="selecttracks">Select Your Desired Track</label>
              <select name="track" id="courses" className="contacts">
                <option value="Cyber Security">Cyber Security</option>
                <option value="UI/UX design">UI/UX design</option>
                <option value="Web development">Web development</option>
                <option value="Mobile apps development">Mobile apps development</option>
                <option value="Cloud engineering">Cloud engineering</option>
                <option value="Power Platform">Power Platform</option>
              </select>
            </div>

            <div>
              <button id="submit" className="contacts button">
                Submit
              </button>
            </div>
          </form>

          <div className="quote">
            <h2>
              "Programming isn't about what you know; it's about what you can figure out. The best coders are always learning, adapting, and finding new ways to solve problems..."
            </h2>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Tracks;

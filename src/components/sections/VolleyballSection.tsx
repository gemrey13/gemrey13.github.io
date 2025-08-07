import GemBlock from "../../assets/photos/Gem block pic.png";
import TeamPic from "../../assets/photos/Volleyball team pic.png";

const VolleyballSection = () => {
  return (
    <section>
      <article className="text-secondary grid grid-cols-1 space-y-5 md:grid-cols-[65%_35%]">
        <div className="font-droid flex flex-col gap-5 md:text-xl/relaxed">
          <div className="font-ubuntu mt-7 py-2 text-black">
            <h2 className="text-xl font-semibold md:text-3xl">
              🏐 When I'm not debugging, I'm blocking.
            </h2>
          </div>
          <p>
            Volleyball is more than just a sport for me—it's a passion that
            keeps me active, focused, and connected. I play middle blocker for
            the BSIT Golden Huskies at Dalubhasaan ng Lungsod ng Lucena, where
            I've learned the value of timing, teamwork, and hustle. Recently,
            our team proudly won the championship, and the energy on the court
            was unforgettable.
          </p>
          <div>
            <h3> A few things I love about playing volleyball:</h3>
            <ul>
              <li>The adrenaline of a perfect block</li>
              <li>Team chemistry on and off the court</li>
              <li>That feeling after a hard-fought win</li>
            </ul>
          </div>
          <div>
            <h4>Check out the championship post here.</h4>
            <a
              href="https://www.facebook.com/share/p/1LB9Vn34Kj/"
              className="text-sm text-blue-600 underline md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/share/p/1LB9Vn34Kj/
            </a>
          </div>
        </div>

        <div className="relative justify-items-end">
          <img
            src={GemBlock}
            alt="Gem blocking during volleyball championships match"
          />
          <img
            src={TeamPic}
            alt="Team photo of BSIT Golden Huskies volleyball team"
          />
        </div>
      </article>
    </section>
  );
};

export default VolleyballSection;

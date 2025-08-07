import Title from "../ui/Title";
import TeamPicOpenIT from "../../assets/photos/team pic.png";
import FilmFest from "../../assets/photos/Film Fest Group pic.png";
import Summit from "../../assets/photos/Summit Group Pic.png";
import AssemblyPic from "../../assets/photos/Developer pic.png";
import PresentationPic from "../../assets/photos/Presentation pic.png";
import TeamPhotoCard from "../../assets/photos/Team photo card.png";
import ClassPic from "../../assets/photos/Class Pic.png";
import PhotoNews from "../../assets/photos/Photo news.png";
import EventCard from "../list/EventCard";

const EventsSection = () => {
  return (
    <section>
      <Title header="Where I've Shown Up" />

      <div className="grid grid-cols-1 gap-12 py-8 md:grid-cols-3 md:py-12">
        <EventCard
          image={TeamPicOpenIT}
          mainLink="https://www.facebook.com/share/p/1GAK6Y5kmR/"
          title="Open iT Hackathon Codefest 2025"
          description="Joined a 2-day hackathon where our team built a real-world solution focused on gamifying team motivation and engagement. We collaborated under pressure to turn ideas into a working prototype that tackled performance through play."
        />

        <EventCard
          image={FilmFest}
          mainLink="https://www.facebook.com/share/p/1B5XH5NMnu/"
          title="BSIT Film Fest 2025"
          description="BSIT students screened original short films on May 15, 2025, showcasing creativity and storytelling at the Pacific Mall Event Theatre."
        />

        <EventCard
          image={Summit}
          title="DLL Student Leaders' Summit 2024"
          description="Student leaders gathered for the 2024 summit to engage in leadership training, collaboration, and discussions on building a more empowered DLL community."
        />

        <EventCard
          image={AssemblyPic}
          title="CBQP General Assembly 2024"
          description="Held on June 30, 2024, the assembly marked the successful deployment of the custom-built Voting System, streamlining the election process with improved security, efficiency, and transparency for all cooperative members."
        />

        <EventCard
          image={PresentationPic}
          mainLink="https://www.facebook.com/share/p/1bEhBcAWw1/"
          title="DLL Pagkilatis 2024"
          description="Presented our capstone research as one of three BSIT capstone projects selected for the DLL Faculty and Students Research Conference on June 21, 2024."
        />

        <EventCard
          image={TeamPhotoCard}
          mainLink="https://www.facebook.com/share/p/16wxefq8zY/"
          title="HackForGov 3 - Regional Qualifier"
          description="Competed in the CALABARZON regional round of HackForGov 3, tackling real-world cybersecurity challenges alongside 11 other student teams."
          links={[
            {
              label: "Photos from the event on Facebook",
              url: "https://www.facebook.com/share/v/165kdrjXJ2/",
            },
            {
              label: "More coverage and highlights here",
              url: "https://www.facebook.com/share/p/1CgWAK3YHK/",
            },
          ]}
        />

        <EventCard
          image={ClassPic}
          mainLink="https://www.facebook.com/share/p/1LPw1zHW2H/"
          title="DICT Python Essentials"
          description="Completed 40 hours of Python Programming Essentials training conducted by DICT Region IV-A - Quezon, hosted at Dalubhasaan ng Lungsod ng Lucena."
        />

        <EventCard
          image={PhotoNews}
          mainLink="https://www.facebook.com/share/p/1HtmRMYBwK/"
          title="HackForGov 2 - Regional Qualifier"
          description="Participated in HackForGov 2, a DICT-led Capture-the-Flag competition aimed at strengthening national cybersecurity by developing future cyber defenders from the youth sector across the CALABARZON region."
        />
      </div>
    </section>
  );
};

export default EventsSection;

import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "wankuma-allicance",
    title: "DevOps User Group Event 02 Supported",
    date: "July 4, 2026",
    location: "Cafe Lyon",
    description:
      "Learn how to secure AI model API access using Azure API Management and build telemetry gathering systems for Azure AI agents, followed by community lightning talks.",
    type: "workshop",
    photo: "dev-ops-2.jpg",
    // TODO: Gem — add actual event link
    links: [
      { label: "Event Page", url: "https://www.meetup.com/manila-devops-user-group/events/315034302/?eventOrigin=group_past_events" },
    ],
  },
  {
    id: "microsoft-build-manila",
    title: "Microsoft Build //localhost:manila",
    date: "June 2026",
    location: "Makati City",
    description:
      "AI application development, scalable AI agents, and AI-ready databases.",
    type: "conference",
    photo: "Azure-Build.jpg",
    // TODO: Gem — add actual event link
    links: [
      { label: "Event Page", url: "https://www.facebook.com/share/p/1ByMwrELcw/" },
    ],
  },
  {
    id: "drupal-meetup-makati",
    title: "Drupal Meetup",
    date: "March 2026",
    location: "Makati City",
    description: "CMS vs Core architectures discussion and community meetup.",
    type: "meetup",
    photo: "drupal.jpg",
    // TODO: Gem — add actual meetup link
    links: [
      { label: "Meetup Page", url: "https://www.facebook.com/share/p/1JGVV33vbf/" },
    ],
  },
  {
    id: "openit-hackathon-2025",
    title: "Open iT Hackathon Codefest 2025",
    date: "July 2025",
    location: "Makati City",
    description:
      "2-day hackathon focused on gamifying team motivation in the workplace.",
    type: "hackathon",
    photo: "team pic.png",
    // TODO: Gem — add actual event link if available
    links: [
      { label: "Event Page", url: "https://www.facebook.com/share/p/1GAK6Y5kmR/" },
      { label: "Watch event recap", url: "https://www.facebook.com/share/v/1C5yd21Rb1/" },
    ],
  },
  {
    id: "bsit-film-fest-2025",
    title: "BSIT Film Fest 2025",
    date: "May 15, 2025",
    location: "Pacific Mall Event Theatre",
    description: "Film festival organized by the BSIT department.",
    type: "other",
    photo: "Film Fest Group pic.png",
     links: [
      { label: "Event Page", url: "https://www.facebook.com/share/p/1B5XH5NMnu/" },
    ],
  },
  {
    id: "dll-student-leaders-summit-2024",
    title: "DLL Student Leaders' Summit 2024",
    description: "Leadership training and development summit.",
    type: "summit",
    photo: "Summit Group Pic.png",
  },
  {
    id: "cbqp-general-assembly-2024",
    title: "CBQP General Assembly 2024",
    date: "June 30, 2024",
    description:
      "Deployed the custom Voting System built during internship for live cooperative decision-making.",
    type: "conference",
    photo: "Developer pic.png",
  },
  {
    id: "dll-pagkilatis-2024",
    title: "DLL Pagkilatis 2024",
    date: "June 21, 2024",
    description: "Presented capstone research to academic panel.",
    type: "other",
    photo: "Presentation pic.png",
    links: [
      { label: "Event Page", url: "https://www.facebook.com/share/p/1bEhBcAWw1/" },
    ],
  },
  {
    id: "hackforgov-3",
    title: "HackForGov 3 - Regional Qualifier",
    location: "CALABARZON",
    description:
      "Regional cybersecurity competition organized by DICT.",
    type: "hackathon",
    photo: "Team photo card.png",
    // TODO: Gem — add actual event/news link
    links: [
      { label: "Event Info", url: "https://www.facebook.com/share/p/16wxefq8zY/" },
      { label: "Photos from the event on Facebook", url: "https://www.facebook.com/share/v/165kdrjXJ2/" },
      { label: "More coverage and highlights here", url: "https://www.facebook.com/share/p/1CgWAK3YHK/" },
    ],
  },
  {
    id: "dict-python-essentials",
    title: "DICT Python Essentials",
    description:
      "40-hour Python training program by DICT Region IV-A Quezon.",
    type: "training",
    location: "DICT Region IV-A Quezon",
    photo: "Class Pic.png",
    links: [
      { label: "Event Info", url: "https://www.facebook.com/share/p/1LPw1zHW2H" },
    ],
  },
  {
    id: "hackforgov-2",
    title: "HackForGov 2 - Regional Qualifier",
    location: "CALABARZON",
    description:
      "DICT Capture The Flag competition focused on cybersecurity.",
    type: "hackathon",
    photo: "Photo news.png",
    // TODO: Gem — add actual event/news link
    links: [
      { label: "Event Info", url: "https://www.facebook.com/share/p/1HtmRMYBwK/" },
    ],
  },
];

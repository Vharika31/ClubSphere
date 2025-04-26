// Mock data for the VIIT ClubSphere portal

export interface ClubMember {
  id: number
  name: string
  role: string
  image: string
}

export interface ClubEvent {
  id: number
  title: string
  date: string
  description: string
  poster: string
}

export interface ClubAlumni {
  id: number
  name: string
  role: string
  year: string
  currentPosition: string
  image: string
}

export interface Club {
  id: string
  name: string
  slug: string
  logo: string
  lead: string
  leadImage: string
  description: string
  team: ClubMember[]
  events: ClubEvent[]
  alumni: ClubAlumni[]
  gallery: string[]
}

export interface Opportunity {
  id: number
  club: string
  role: string
  description: string
  requirements: string[]
  deadline: string
}

export const clubs: Club[] = [
  {
    id: "1",
    name: "GeeksforGeeks",
    slug: "gfg",
    logo: "/placeholder.svg?height=200&width=200",
    lead: "Harika Vavilapalli",
    leadImage: "/placeholder.svg?height=400&width=400",
    description:
      "GeeksforGeeks Student Chapter at VIIT is dedicated to creating a culture of competitive programming and technical excellence. We organize coding contests, workshops, and technical sessions to help students enhance their coding skills and prepare for technical interviews.",
    team: [
      {
        id: 1,
        name: "Megha Reddy",
        role: "Content Lead",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Ravi Kumar",
        role: "Event Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: "Priya Sharma",
        role: "Technical Team Lead",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 4,
        name: "Karthik Reddy",
        role: "PR & Outreach",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    events: [
      {
        id: 1,
        title: "CodeRush Hackathon",
        date: "March 15, 2025",
        description:
          "A 24-hour coding marathon where participants solve real-world problems using their programming skills.",
        poster: "/placeholder.svg?height=400&width=600",
      },
      {
        id: 2,
        title: "DSA Bootcamp",
        date: "February 10, 2025",
        description:
          "An intensive 3-day bootcamp focusing on Data Structures and Algorithms with hands-on practice sessions.",
        poster: "/placeholder.svg?height=400&width=600",
      },
      {
        id: 3,
        title: "Tech Talk: Future of AI",
        date: "January 25, 2025",
        description: "An insightful session on the latest trends and future prospects in Artificial Intelligence.",
        poster: "/placeholder.svg?height=400&width=600",
      },
    ],
    alumni: [
      {
        id: 1,
        name: "Akhil Sharma",
        role: "Lead",
        year: "2023",
        currentPosition: "Software Engineer @ Zoho",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Sneha Patel",
        role: "Technical Team Lead",
        year: "2022",
        currentPosition: "SDE @ Amazon",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "2",
    name: "Google Developer Groups",
    slug: "gdg",
    logo: "/placeholder.svg?height=200&width=200",
    lead: "Himavarshini Mahapatruni",
    leadImage: "/placeholder.svg?height=400&width=400",
    description:
      "Google Developer Groups (GDG) VIIT is a community of developers interested in Google's developer technology. We organize events, workshops, and study jams on various Google technologies like Android, Flutter, Firebase, and more.",
    team: [
      {
        id: 1,
        name: "Arjun Reddy",
        role: "Android Lead",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Nisha Patel",
        role: "Web Technologies Lead",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 3,
        name: "Rahul Verma",
        role: "Event Manager",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    events: [
      {
        id: 1,
        title: "Flutter Workshop",
        date: "April 2, 2025",
        description: "A hands-on workshop on building cross-platform mobile applications using Flutter.",
        poster: "/placeholder.svg?height=400&width=600",
      },
      {
        id: 2,
        title: "Firebase Dev Day",
        date: "March 5, 2025",
        description:
          "Learn how to integrate Firebase services into your applications for authentication, database, and hosting.",
        poster: "/placeholder.svg?height=400&width=600",
      },
    ],
    alumni: [
      {
        id: 1,
        name: "Vikram Singh",
        role: "Lead",
        year: "2023",
        currentPosition: "Mobile Developer @ Google",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "3",
    name: "Algozenith",
    slug: "az",
    logo: "/placeholder.svg?height=200&width=200",
    lead: "Nehal Fathema",
    leadImage: "/placeholder.svg?height=400&width=400",
    description:
      "Algozenith (AZ) is focused on competitive programming and algorithmic problem-solving. We conduct regular coding contests, practice sessions, and workshops to improve students' problem-solving abilities.",
    team: [
      {
        id: 1,
        name: "Aditya Kumar",
        role: "Contest Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Shreya Gupta",
        role: "Training Lead",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    events: [
      {
        id: 1,
        title: "CP Bootcamp",
        date: "February 28, 2025",
        description: "An intensive bootcamp on competitive programming techniques and strategies.",
        poster: "/placeholder.svg?height=400&width=600",
      },
    ],
    alumni: [
      {
        id: 1,
        name: "Rohan Mehta",
        role: "Lead",
        year: "2023",
        currentPosition: "Software Engineer @ Microsoft",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "4",
    name: "Yuva",
    slug: "yuva",
    logo: "/placeholder.svg?height=200&width=200",
    lead: "Jaideep Thandra",
    leadImage: "/placeholder.svg?height=400&width=400",
    description:
      "Yuva is a cultural and social club that focuses on organizing cultural events, social service activities, and personality development programs for students.",
    team: [
      {
        id: 1,
        name: "Ananya Reddy",
        role: "Cultural Secretary",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Vishal Kumar",
        role: "Social Service Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    events: [
      {
        id: 1,
        title: "Cultural Fest",
        date: "April 15, 2025",
        description: "Annual cultural festival featuring music, dance, and theatrical performances.",
        poster: "/placeholder.svg?height=400&width=600",
      },
    ],
    alumni: [
      {
        id: 1,
        name: "Kavya Sharma",
        role: "Lead",
        year: "2023",
        currentPosition: "Event Manager @ EventPro",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "5",
    name: "ACM",
    slug: "acm",
    logo: "/placeholder.svg?height=200&width=200",
    lead: "Sidharth Varma",
    leadImage: "/placeholder.svg?height=400&width=400",
    description:
      "The ACM Student Chapter at VIIT is dedicated to advancing computing as a science and profession. We organize technical workshops, coding competitions, and industry connect sessions.",
    team: [
      {
        id: 1,
        name: "Divya Reddy",
        role: "Vice Chair",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Aryan Sharma",
        role: "Technical Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    events: [
      {
        id: 1,
        title: "ACM Coding Contest",
        date: "March 20, 2025",
        description: "A competitive programming contest based on ACM ICPC format.",
        poster: "/placeholder.svg?height=400&width=600",
      },
    ],
    alumni: [
      {
        id: 1,
        name: "Nikhil Reddy",
        role: "Chair",
        year: "2023",
        currentPosition: "Research Assistant @ IIT Bombay",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: "6",
    name: "CodeChef Club",
    slug: "codechef",
    logo: "/placeholder.svg?height=200&width=200",
    lead: "K Ganesh",
    leadImage: "/placeholder.svg?height=400&width=400",
    description:
      "CodeChef Club at VIIT is dedicated to enhancing coding skills and competitive programming. We organize regular coding contests, practice sessions, and workshops to help students excel in competitive programming platforms.",
    team: [
      {
        id: 1,
        name: "Sai Kumar",
        role: "Contest Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 2,
        name: "Anjali Sharma",
        role: "Technical Lead",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    events: [
      {
        id: 1,
        title: "Cook-Off Challenge",
        date: "March 25, 2025",
        description: "A competitive programming contest with challenging algorithmic problems.",
        poster: "/placeholder.svg?height=400&width=600",
      },
      {
        id: 2,
        title: "Competitive Programming Workshop",
        date: "February 15, 2025",
        description: "Learn strategies and techniques to excel in competitive programming contests.",
        poster: "/placeholder.svg?height=400&width=600",
      },
    ],
    alumni: [
      {
        id: 1,
        name: "Rahul Verma",
        role: "Lead",
        year: "2023",
        currentPosition: "Software Engineer @ Adobe",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
]

export const opportunities: Opportunity[] = [
  {
    id: 1,
    club: "GeeksforGeeks",
    role: "Technical Team Member",
    description:
      "Join the GFG Technical Team to help organize coding contests, workshops, and develop technical content for the club.",
    requirements: [
      "Strong programming skills in at least one language",
      "Knowledge of data structures and algorithms",
      "Good communication skills",
      "Ability to work in a team",
    ],
    deadline: "April 30, 2025",
  },
  {
    id: 2,
    club: "Google Developer Groups",
    role: "Flutter Developer",
    description:
      "Looking for Flutter enthusiasts to help organize workshops and develop sample applications for learning purposes.",
    requirements: [
      "Experience with Flutter and Dart",
      "Understanding of mobile app development concepts",
      "Willingness to learn and teach others",
    ],
    deadline: "May 5, 2025",
  },
  {
    id: 3,
    club: "Algozenith",
    role: "Problem Setter",
    description: "Create challenging algorithmic problems for our monthly coding contests and practice sessions.",
    requirements: [
      "Strong problem-solving skills",
      "Experience in competitive programming",
      "Ability to create clear problem statements",
    ],
    deadline: "April 15, 2025",
  },
  {
    id: 4,
    club: "ACM",
    role: "Event Coordinator",
    description: "Coordinate technical events, workshops, and guest lectures organized by the ACM Student Chapter.",
    requirements: [
      "Good organizational skills",
      "Excellent communication",
      "Previous event management experience is a plus",
    ],
    deadline: "May 10, 2025",
  },
  {
    id: 5,
    club: "Yuva",
    role: "Creative Team Member",
    description: "Join our creative team to design posters, social media content, and event materials.",
    requirements: [
      "Design skills (Photoshop, Illustrator, or similar tools)",
      "Creative mindset",
      "Attention to detail",
    ],
    deadline: "April 20, 2025",
  },
  {
    id: 6,
    club: "CodeChef Club",
    role: "Competitive Programmer",
    description: "Join our team to help organize coding contests and represent VIIT in external competitions.",
    requirements: [
      "Strong problem-solving skills",
      "Experience with competitive programming",
      "Knowledge of data structures and algorithms",
      "Ability to work under time constraints",
    ],
    deadline: "April 25, 2025",
  },
]

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((club) => club.slug === slug)
}

export function getAllClubSlugs(): string[] {
  return clubs.map((club) => club.slug)
}

export function getOpportunitiesByClub(clubName: string): Opportunity[] {
  return opportunities.filter((opportunity) => opportunity.club === clubName)
}

export function getAllOpportunities(): Opportunity[] {
  return opportunities
}

export function getAllAlumni(): ClubAlumni[] {
  return clubs.flatMap((club) =>
    club.alumni.map((alumni) => ({
      ...alumni,
      club: club.name,
    })),
  ) as ClubAlumni[]
}

export function getAllGalleryImages(): { image: string; club: string }[] {
  return clubs.flatMap((club) =>
    club.gallery.map((image) => ({
      image,
      club: club.name,
    })),
  )
}

export type ClientTestimonialItem = {
  id: number;
  name: string;
  role: string;
  location?: string;
  image: string;
  text: string;
  rating: number;
  projectType?: string;
  systemSize?: string;
  verified?: boolean;
};

export const clientTestimonialsData: ClientTestimonialItem[] = [
  {
    id: 1,
    name: "General Dr. Anwar Ul Haq",
    role: "Homeowner",
    location: "Lahore",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "I am flabbergasted that Zorays Solar has provided the ultimate net metering solution for my household.",
    rating: 5,
    projectType: "Residential Solar",
    verified: true,
  },
  {
    id: 2,
    name: "Umair Ahsan",
    role: "Cattle Farmer",
    location: "Kasur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Customer service is a vital aspect of the solar industry. I have had the pleasure of maintaining my cattle farm in Kasur with Zorays.",
    rating: 5,
    projectType: "Agricultural Solar",
    verified: true,
  },
  {
    id: 3,
    name: "Khawaja Muhammad Asif",
    role: "Businessman",
    location: "Sialkot",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "I met Zorays at a wedding in a beloved friend circle. I said: what's in it for me. He proved me wrong.",
    rating: 5,
    projectType: "Commercial Solar",
    verified: true,
  },
  {
    id: 4,
    name: "General Nasrullah Tahir Dogar (Retired)",
    role: "Retired Army Officer",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    text: "I am so happy with Zorays team that I extended my 10kW system with another 15kW increment within 8 months.",
    rating: 5,
    projectType: "Residential Solar",
    systemSize: "25 kW",
    verified: true,
  },
  {
    id: 5,
    name: "Shehroze Malik",
    role: "Business Owner",
    location: "Karachi",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "It's been a while that we have taken Zorays Solar as our permanent green initiative partners.",
    rating: 5,
    projectType: "Commercial Solar",
    verified: true,
  },
  {
    id: 6,
    name: "Dr. Acha Tariq Sajid",
    role: "Medical Professional",
    location: "Multan",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "I am trying them for the young team they are. I am going to refer them soon after getting good payback from my newly installed net metering system.",
    rating: 5,
    projectType: "Net Metering",
    verified: true,
  },
];
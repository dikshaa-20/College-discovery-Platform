import { College } from "@/types/college";

export const colleges: College[] = [
  {
    id: "1",
    name: "IIT Delhi",
    location: "Delhi",
    fees: 220000,
    rating: 4.8,
    placements: 95,
    courses: ["CSE", "ECE"],
    overview: "Premier engineering institute."
  },
  {
    id: "2",
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: 550000,
    rating: 4.6,
    placements: 91,
    courses: ["CSE", "Electrical"],
    overview: "Top private engineering college."
  },
  {
    id: "3",
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 180000,
    rating: 4.5,
    placements: 90,
    courses: ["CSE", "Civil"],
    overview: "Leading National Institute of Technology."
  }
];
'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import chennai from "../../app/public/assets/cityCards/Chennai.jpg"
import mumbai from "../../app/public/assets/cityCards/Mumbai1.jpg"
import bangalore from "../../app/public/assets/cityCards/bangalore1.jpg"
import hyderabad from "../../app/public/assets/cityCards/hyderabad1.jpg"
import indiaFlag from "../../app/public/assets/indiaFlag.png"  // Placeholder path for the India flag image
import { BadgeCheck } from 'lucide-react';

interface CityCardProps {
  city: string
  backgroundImage: string | StaticImageData
  overlayColor: string // New property for dynamic overlay color
}

const cities: CityCardProps[] = [
  {
    city: "Bengaluru",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
  },
  {
    city: "Pune",
    backgroundImage: bangalore,
    overlayColor: "from-purple-500/60", // Example color
  },
  {
    city: "Hyderabad",
    backgroundImage: hyderabad,
    overlayColor: "from-yellow-500/60", // Example color
  },
  {
    city: "Gurugram",
    backgroundImage: chennai,
    overlayColor: "from-blue-500/60", // Example color
  },
  {
    city: "Mumbai",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
  },
  {
    city: "Chennai",
    backgroundImage: mumbai,
    overlayColor: "from-pink-500/60", // Example color
  },

]

const events = [
  "Hands-on Training with a Capstone Project",
  "Meet Mr. Vimal Daga in Person",
  "Network with Professionals from Leading Companies",
  "Gain Industry Insights & Discuss Real Use Cases with Experts",
  "Opportunity to Get Hired by Engaging with Talent Acquisition Heads"
]

export default function CityCardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="p-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#FFFFFF] mb-2 mt-6"><span className="text-[#ff0000]">Mr. Vimal Daga</span> on India <Image src={indiaFlag} alt="India Flag" width={40} height={30} className="inline-block" /> Tour</h1>
        <div className="h-1 w-48 bg-red-500 mx-auto"></div>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Three cards per row */}
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105 h-[425px] group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={city.backgroundImage}
                alt={`${city.city} background`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Add the dynamic pink overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${city.overlayColor} to-transparent`} />
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <div>
                <h2 className="text-3xl font-extrabold mb-4">
                  {city.city}
                  <br />
                  TGS <span className="text-sm">(स्वागत आहे 🙏)</span>
                </h2>
                <ul className="space-y-2">
                  {events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-lg"> <BadgeCheck  className='inline text-sm'/></span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Conditional rendering based on city name */}
              {city.city === "Bangaluru" ? (
                <div className="mt-4 py-2 px-4 w-full hover:border text-white font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-center">
                  10th - 12th Jan, 2025
                </div>
              ) : (
                <button
                  className={`mt-4 py-2 px-4 w-full border text-white font-semibold rounded-lg transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-white/20 border-white'
                      : 'border-transparent bg-white/10 hover:bg-white/20'
                  }`}
                >
                  PARTICIPATE
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

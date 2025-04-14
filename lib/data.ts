import { ServiceBase } from "@/types";
import { IoIosSend } from "react-icons/io";
import {
  FaFacebookMessenger,
  FaPhoneVolume,
  FaFacebook,
  FaGoogle,
  FaCanadianMapleLeaf,
  FaHouse,
  FaLightbulb,
  FaToolbox,
  // FaLocationDot,
  // FaClock,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoRibbon } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: FaHouse,
  },
  {
    name: "About",
    href: "/about",
    icon: FaLightbulb,
  },
  {
    name: "Services",
    href: "/landscapingservices",
    icon: FaToolbox,
  },
  {
    name: "Contact",
    href: "contact",
    icon: FaPhoneVolume,
  },
];

export const values = [
  {
    label: "Quality Without Compromise",
    description:
      "We don’t cut corners—we build landscapes that last. From premium materials to skilled craftsmanship, every project reflects our commitment to excellence.",
    icon: IoRibbon,
  },
  {
    label: "Family-First Integrity",
    description:
      "Treating your property like our own isn’t just a slogan—it’s how we operate. Honest communication, fair pricing, and respect for your home are non-negotiables.",
    icon: LuHeartHandshake,
  },
  {
    label: "Eco-Smart Landscaping",
    description:
      "Beautiful spaces shouldn’t cost the earth. We prioritize water-wise designs, native plants, and eco-friendly practices to protect your yard—and the planet.",
    icon: FaCanadianMapleLeaf,
  },
];

// Target values for the metrics
export const metrics = [
  {
    metric: "Projects Comepleted",
    target: 180,
    duration: 2,
  },
  {
    metric: "Customers Worked With",
    target: 150,
    duration: 2,
  },
  {
    metric: "Years of Experience",
    target: 20,
    duration: 4,
  },
];

export const contactInfo = [
  // {
  //   name: "Time",
  //   content: "Monday - Friday: 7am - 3pm",
  //   url: "",
  //   icon: IoTime,
  // },
  {
    name: "Email",
    content: "Landscaping.jdconstruction@gmail.com",
    url: "mailto:Landscaping.jdconstruction@gmail.com",
    icon: IoIosSend,
  },
  {
    name: "Phone Number",
    content: "(612) 200-7243",
    url: "tel:6122007243",
    icon: FaPhoneVolume,
  },
];

// Socials and contact data
export const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100064157432741",
    icon: FaFacebookMessenger,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jandd_landscaping_and_construc/",
    icon: RiInstagramFill,
  },
];

export const contactAndSocials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100064157432741",
    icon: FaFacebookMessenger,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jandd_landscaping_and_construc/",
    icon: RiInstagramFill,
  },
  {
    name: "Email",
    url: "mailto:Landscaping.jdconstruction@gmail.com",
    icon: IoIosSend,
  },
  {
    name: "Phone",
    url: "tel:6122007243",
    icon: FaPhoneVolume,
  },
];

export const reviewLinks = [
  {
    name: "GoogleReview",
    url: "https://search.google.com/local/writereview?placeid=ChIJq_ZT0WWjtFIRdtRCvvmyBFc",
    label: "Leave Us a Google Review!",
    icon: FaGoogle,
  },
  {
    name: "FacebookReview",
    url: "https://www.facebook.com/profile.php?id=100064157432741&sk=reviews",
    label: "Share Your Feedback on Facebook!",
    icon: FaFacebook,
  },
];

export const testimonials = [
  {
    clientName: "Erickson",
    location: "Minnesota",
    review:
      "So impressed and appreciate the craftsmanship and hard work of you and your team. What a great company!",
    rating: 5,
  },
  {
    clientName: "Leah Hill",
    location: "Minnesota",
    review:
      "Jorge did such a great job on our new edging and drains for our gutters. He always replies to messages and worked fast! Highly recommend!",
    rating: 5,
  },
  {
    clientName: "Brandon E.",
    location: "Minnesota",
    review:
      "We are so happy with our new stone patio and stairs! Thank you Jorge!",
    rating: 5,
  },
];

export const services: ServiceBase[] = [
  {
    id: "planting-mulch",
    name: "Planting & Mulch",
    mainImageId: "planting-mulch-main",
    galleryTag: "planting-mulch",
    description:
      "Transform your outdoor space with expert plant selection and premium mulch installation for enhanced curb appeal and garden health.",
    fullDescription: `Our planting and mulch services bring life and vibrancy to your landscape. We carefully select plants suited to your specific environment and aesthetic preferences, ensuring they thrive in their new home. Our professional installation is complemented by premium mulch application that protects your investment, reduces water usage, and enhances your property's visual appeal. From colorful flower beds to strategic shrub placement, we create lasting beauty that grows more impressive each season.`,
    features: [
      "Custom plant selection tailored to your climate and soil",
      "Expert installation with proper spacing and depth",
      "Premium quality mulch options in various colors and textures",
      "Weed suppression and moisture retention",
      "Seasonal color planning and rotation options",
      "Native and drought-resistant plant selections available",
    ],
  },

  {
    id: "patio-installation",
    name: "Paver Patios",
    mainImageId: "paver-patios-main",
    galleryTag: "patios",
    description:
      "Custom-designed paver patios that create beautiful, durable outdoor living spaces perfect for entertaining and relaxation.",
    fullDescription: `Extend your living space outdoors with our custom paver patio installations. We use premium materials and meticulous installation techniques to create stunning outdoor areas that withstand the elements while enhancing your home's value. Our design process considers your lifestyle needs, architectural style, and budget to deliver a functional, beautiful space you'll enjoy for years. From intimate garden retreats to expansive entertainment areas, our paver patios combine aesthetic appeal with practical durability.`,
    features: [
      "Custom design consultation and 3D visualization",
      "Wide selection of premium pavers in various styles and colors",
      "Proper base preparation for lasting stability",
      "Professional installation with precise grading for drainage",
      "Optional features including fire pits, seating walls, and outdoor kitchens",
      "Environmentally friendly permeable paver options",
    ],
  },
  {
    id: "driveways-pathways",
    name: "Driveways & Pathways",
    mainImageId: "driveways-pathways-main",
    galleryTag: "driveways-pathways",
    description:
      "Elegant, durable paver driveways and pathways that enhance property access while adding distinctive character to your landscape.",
    fullDescription: `Our custom driveways and pathways combine functionality with aesthetic appeal, creating striking first impressions and improving property navigation. Using premium paving materials and expert installation techniques, we ensure these high-traffic areas remain beautiful and functional for decades. From grand circular driveways to charming garden paths, each project is engineered for proper drainage, stability, and visual harmony with your home and surrounding landscape. Transform ordinary transitions into extraordinary features that guide and delight.`,
    features: [
      "Custom designs that complement your home's architecture",
      "Premium paver selections in various materials, patterns, and colors",
      "Heavy-duty base construction for vehicle support and longevity",
      "Proper sloping and drainage integration",
      "Accent lighting options for safety and ambiance",
      "Border and inlay design options for unique visual interest",
    ],
  },
  {
    id: "retaining-wall-installation",
    name: "Retaining Walls",
    mainImageId: "retaining-walls-main",
    galleryTag: "retaining-walls",
    description:
      "Structurally sound retaining walls that solve elevation challenges, prevent erosion, and create usable space on sloped properties.",
    fullDescription: `Our retaining wall installations transform challenging slopes into functional terraced spaces while adding architectural interest to your landscape. Engineered for structural integrity and designed for beauty, our walls solve erosion problems, create planting opportunities, and define outdoor rooms. Whether you prefer the clean lines of modern blocks or the timeless appeal of natural stone, we match the solution to your property's needs and aesthetic preferences. Each wall includes proper drainage and engineering to ensure decades of performance and enjoyment.`,
    features: [
      "Engineered designs for structural stability and longevity",
      "Multiple material options including concrete block and natural stone",
      "Built-in drainage systems to prevent water pressure damage",
      "Integrated lighting options for safety and dramatic effect",
      "Terraced designs to maximize usable space on slopes",
      "Optional seating walls and planting pockets for added functionality",
    ],
  },
  {
    id: "boulder-placement",
    name: "Boulder Features",
    mainImageId: "boulders-main",
    galleryTag: "boulders",
    description:
      "Strategic boulder placement that creates natural focal points, solves landscape challenges, and adds organic character to your outdoor space.",
    fullDescription: `Our boulder installation services bring the dramatic beauty of nature to your landscape. We carefully select and place boulders of various sizes and types to create stunning focal points, natural-looking retaining solutions, and distinctive garden features. Boulder arrangements can define spaces, direct traffic flow, create microclimates for specialized plantings, or simply add sculptural interest to flat areas. Each boulder is positioned with precision equipment for safety and stability, creating installations that appear as though nature placed them there centuries ago.`,
    features: [
      "Handpicked premium boulders in various sizes, colors, and geological types",
      "Natural-looking arrangements that complement your landscape style",
      "Boulder groupings for dramatic focal points and garden accents",
      "Dry creek beds and water features incorporating boulder elements",
      "Strategic placement for erosion control and slope stabilization",
      "Boulders positioned to create planting pockets for alpine and rock garden species",
    ],
  },

  // {
  //   id: "drainage-solutions",
  //   name: "Yard Drainage Solutions",
  //   mainImageId: "drainage-main",
  //   galleryTag: "drainage",
  //   description:
  //     "Effective drainage systems that protect your property from water damage while preserving landscape beauty and functionality.",
  //   fullDescription: `Our yard drainage solutions address water problems at their source, protecting your home's foundation, preventing soil erosion, and eliminating standing water issues. We design and install customized drainage systems that work with your property's unique topography and soil conditions. Our solutions integrate seamlessly into your landscape, often enhancing its beauty while performing crucial water management functions. From simple surface adjustments to comprehensive underground systems, we solve water problems permanently while respecting your outdoor aesthetic.`,
  //   features: [
  //     "Comprehensive site assessment and water flow analysis",
  //     "French drains and subsurface drainage systems",
  //     "Catch basins and channel drains in high-collection areas",
  //     "Dry creek beds that combine function with natural beauty",
  //     "Grading corrections to improve natural water flow",
  //     "Rain garden installations for sustainable water management",
  //   ],
  // },
  {
    id: "snow-removal-services",
    name: "Snow Removal",
    mainImageId: "snow-removal-main",
    galleryTag: "snow-removal",
    description:
      "Reliable, timely snow and ice management services that keep your property safe and accessible throughout winter months.",
    fullDescription: `When winter weather strikes, our professional snow removal services ensure your property remains safe and accessible. We offer both scheduled service plans and on-demand assistance, using appropriate equipment for your specific property needs. Our teams clear driveways, walkways, and parking areas efficiently, applying ice melt products as needed to prevent dangerous conditions. With prompt response times and attention to detail, we handle winter's challenges so you don't have to worry about accessibility or liability concerns during snowy conditions.`,
    features: [
      "24/7 monitoring of weather conditions for timely response",
      "Scheduled service plans with priority response guarantees",
      "Driveway, sidewalk, and entry clearing for safe access",
      "Safe application of ice melt products appropriate for your surfaces",
      "Snow relocation strategies for properties with space limitations",
      "Commercial property service plans with liability documentation",
    ],
  },
];

/*
  EDIT WEBSITE CONTENT HERE.
  This is the main content file. You can change wording, business details and image URLs
  without editing index.html or script.js.
  To replace a photo: upload your new image into the assets folder (or use a trusted HTTPS image URL)
  and update the matching image value below. Example: image: "assets/my-new-photo.jpg"
*/
const SITE_CONTENT = {
  brand: {
    name: "AURELIA JOURNEYS",
    descriptor: "PRIVATE MEDICAL & TRAVEL CONCIERGE",
    announcement: "NEW ZEALAND BASED  ·  PERSONALISED MEDICAL COORDINATION  ·  BESPOKE PRIVATE TRAVEL",
    tagline: "A personal bridge between New Zealand and China.",
    email: "hello@yourdomain.co.nz", // CHANGE to your real business email before publishing
    phone: "", // Optional: add your business phone number
    location: "New Zealand"
  },
  hero: {
    eyebrow: "PRIVATE MEDICAL & BESPOKE TRAVEL CONCIERGE",
    title: "Discover China, with every detail thoughtfully considered.",
    intro: "From exploring healthcare options to designing a private journey around your interests, pace and budget, enjoy a more personal way to experience China — with a New Zealand-based point of contact.",
    button: "Arrange a Private Consultation",
    footnote: "Personalised planning · Clear communication · No obligation",
    caption: "China · A destination of many possibilities",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=2200&q=85"
  },
  intro: {
    eyebrow: "A MORE PERSONAL WAY TO EXPLORE CHINA",
    title: "More than a trip. A journey designed around you.",
    text: "We bring together medical travel coordination and bespoke private travel, helping New Zealand clients explore options in China with greater clarity and personal support. Whether you are considering a health check-up, dental care, or simply wish to discover China in your own way, we help make the arrangements feel more manageable."
  },
  medical: {
    note: "Our role is to provide information and coordination support. All clinical decisions, diagnoses and treatment recommendations are made by appropriately qualified healthcare professionals."
  },
  services: [
    {number:"01", title:"Health Check-ups", description:"Explore preventive health assessments and screening options with selected healthcare providers in China.", image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=82"},
    {number:"02", title:"Dental Care", description:"Explore dental consultations and treatment options, from routine care to more complex restorative dentistry.", image:"https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=82"},
    {number:"03", title:"Cancer Screening", description:"Assistance exploring screening services and coordinating appointments, subject to appropriate clinical advice.", image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=82"},
    {number:"04", title:"Second Medical Opinions", description:"Practical coordination to help you seek an additional specialist opinion and arrange the secure transfer of relevant records.", image:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=82"}
  ],
  travel: {
    title: "Your time. Your interests. Your China.",
    intro: "No fixed itineraries. No set number of days. We design private journeys around what matters to you — whether that means a short cultural escape, a multi-city discovery or a longer, slower exploration of China.",
    image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=1500&q=85",
    options: [
      {title:"Flexible duration", text:"A few days, several weeks or longer — shaped around your available time."},
      {title:"Places you choose", text:"One destination or several regions, from iconic cities to quieter discoveries."},
      {title:"Your preferred pace", text:"A relaxed stay, a rich cultural itinerary or a mix of both."},
      {title:"A budget that works for you", text:"Comfortable, premium or luxury experiences, planned transparently."}
    ],
    callout: "Your journey can be arranged as a standalone private holiday or combined with medical appointments and recovery time where clinically appropriate."
  },
  why: {
    intro: "Planning across countries can feel unfamiliar. Our role is to make communication and practical arrangements easier, with a local New Zealand contact who understands both New Zealand and Chinese cultural expectations."
  },
  reasons: [
    {icon:"⌂", title:"New Zealand based", text:"A local point of contact for your initial enquiry, planning and agreed coordination support."},
    {icon:"↔", title:"Cross-cultural understanding", text:"We understand the importance of clear communication across languages, cultures and service expectations."},
    {icon:"✳", title:"Personalised attention", text:"Your preferences, schedule and budget guide the planning — not a one-size-fits-all package."},
    {icon:"◇", title:"Clear and considered", text:"We help you understand arrangements, inclusions, indicative costs and the questions to ask before deciding."}
  ],
  approach: {
    title: "A considered process, from first conversation to your return.",
    intro: "Every enquiry is different. We take time to understand what you need before suggesting possible next steps."
  },
  steps: [
    {number:"01", title:"Start a conversation", text:"Tell us what you are interested in, what matters to you and the kind of experience you have in mind."},
    {number:"02", title:"Explore possibilities", text:"We help you explore relevant providers, destinations, services and practical considerations."},
    {number:"03", title:"Shape your plan", text:"We coordinate agreed appointments and/or a private itinerary around your schedule and budget."},
    {number:"04", title:"Stay connected", text:"We provide the agreed coordination support before and during your journey, with clear points of contact."}
  ],
  about: {
    title: "Founded in New Zealand. Connected to China.",
    text: "Aurelia Journeys was created around a simple idea: exploring healthcare and travel options across borders should feel more personal, informed and manageable.",
    textTwo: "With roots in New Zealand and Chinese cultures, we appreciate the questions that can arise when planning services in another country. We aim to bridge communication and practical gaps through thoughtful coordination, clear information and a personal approach.",
    signature: "A personal connection, every step of the way.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
  },
  contact: {
    title: "Let's plan something that feels right for you.",
    text: "Whether you are exploring healthcare options, considering a private journey through China, or interested in combining the two, we would be pleased to hear from you.",
    privacy: "Please do not include medical records, diagnoses or other sensitive health information in this enquiry form. We will discuss an appropriate secure method if further information is needed.",
    legal: "Aurelia Journeys provides travel planning and coordination assistance, not medical advice or treatment. Healthcare services are provided by independent healthcare providers. Any medical decisions should be made with appropriately qualified clinicians. Travel arrangements are subject to supplier terms and applicable New Zealand law."
  },
  enquiryOptions: [
    "Health check-up",
    "Dental care",
    "Cancer screening",
    "Second medical opinion",
    "Bespoke private travel in China",
    "Medical travel and private travel combined",
    "General enquiry"
  ],
  footer: {
    tagline: "Personal medical coordination and bespoke private travel, with a New Zealand connection.",
    copyright: "© " + new Date().getFullYear() + " Aurelia Journeys. All rights reserved."
  }
};

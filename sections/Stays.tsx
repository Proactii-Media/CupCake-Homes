import StayCard from "@/components/StayCard";

const stays = [
  {
    title: "House of Cosme",
    link: "https://airbnb.com/h/cupcakehomes-cosme",
    images: ["/stay1a.avif", "/stay1b.avif", "/stay1c.avif", "/stay1d.avif", "/stay1e.avif"],
    amenities: [
      "Garden view",
      "Beach access",
      "Kitchen",
      "Wifi",
      "Dedicated workspace",
      "Free parking on premises",
      "Shared outdoor pool – available all year",
      "Free washer – In unit",
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
  },
  {
    title: "House of Hem",
    link: "https://airbnb.com/h/cupcakehomes-houseofheim",
    images: ["/stay2a.avif", "/stay2b.avif", "/stay2c.avif", "/stay2d.avif", "/stay2e.avif"],
    amenities: [
      "Lake view",
      "Beach access",
      "Kitchen",
      "Wifi",
      "Free parking on premises",
      "Washing machine",
      "AC – split-type ductless system",
      "Private patio or balcony",
      "Show all 26 amenities",
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
  },
];

export default function StaysSection() {
  return (
    <section id="stays" className="bg-[#FAF9F6] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#2C2C2C]/55">Stays</p>
        <h2 className="mb-12 text-4xl text-[#2C2C2C] sm:text-5xl">Crafted spaces for slow living</h2>

        <div className="space-y-10">
          {stays.map((stay) => (
            <StayCard key={stay.title} {...stay} />
          ))}
        </div>
      </div>
    </section>
  );
}

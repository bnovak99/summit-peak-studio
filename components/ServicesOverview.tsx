import { services } from "@/lib/services";

export default function ServicesOverview() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-heading font-bold text-white">What we do</h2>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-lg border border-white/10 bg-night p-8"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-mist">{service.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

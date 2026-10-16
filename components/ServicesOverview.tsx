import { services } from "@/lib/services";

export default function ServicesOverview() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-brand">What we do</h2>
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-muted">{service.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

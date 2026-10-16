import { team } from "@/lib/about";

export default function Team() {
  return (
    <section className="bg-night">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-heading font-bold text-white">The team</h2>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li
              key={member.name}
              className="flex flex-col items-start rounded-lg border border-white/10 bg-panel p-8"
            >
              <span
                aria-hidden="true"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-glow text-xl font-bold text-night"
              >
                {member.initials}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-mist">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

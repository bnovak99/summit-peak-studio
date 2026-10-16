import Image from "next/image";
import storyImage from "@/public/peak-2.webp";

export default function Story() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
      <div>
        <h2 className="text-heading font-bold text-white">How we got here</h2>
        <p className="mt-6 text-mist">
          We started in 2016 as a two-person design shop working out of a
          converted garage. Our first clients were local shops and small
          nonprofits, and most of our early work came from referrals.
        </p>
        <p className="mt-4 text-mist">
          Over time we grew into a small team, but we kept the same habits:
          we keep projects focused, we stay close to the people who use what
          we build, and we only take on the work we can do well.
        </p>
      </div>

      <Image
        src={storyImage}
        alt="Mountain ridges and evergreen forest under a cloudy sky"
        placeholder="blur"
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
    </section>
  );
}

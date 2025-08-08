import { motion } from "motion/react";

const GuitarArtSection = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-8 pt-10 md:grid-cols-2 md:gap-20">
      <motion.article
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2"
      >
        <h3 className="text-xl font-semibold md:text-2xl">🎨 + 🎸</h3>
        <p className="text-secondary md:text-lg/relaxed">
          My interests outside of tech include art and playing the electric
          guitar. My appreciation for art grew over time, but one piece that has
          always stood out to me is “Spoliarium” by Juan Luna, a powerful work
          that never fails to inspire. As for music, I've been diving into the
          world of guitar, drawing inspiration from bands and artists like IV of
          Spades, Radiohead, and Eric Clapton. Whether I'm sketching ideas or
          learning a new riff, both art and music give me space to express
          myself creatively beyond code.
        </p>
      </motion.article>
      <motion.article
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2"
      >
        <h3 className="text-xl font-semibold md:text-2xl">
          👨🏾‍💻 Code Competitor
        </h3>
        <p className="text-secondary md:text-lg/relaxed">
          I love joining hackathons to sharpen my skills and push myself outside
          of my comfort zone. I've participated in events focused on both
          software development and cybersecurity, where I've learned to think
          fast, build efficiently, and collaborate under pressure. It's a fun
          and challenging way to grow as a developer, and there's always
          something new to explore next.
        </p>
      </motion.article>
    </div>
  );
};

export default GuitarArtSection;

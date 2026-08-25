import { motion } from "motion/react";
import { events } from "@/data/events";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getPhotoUrl } from "@/utils/index";
import type { Event, EventType } from "@/types";

const eventTypeColors: Record<EventType, string> = {
  conference: "bg-blue-500/10 text-blue-400",
  meetup: "bg-green-500/10 text-green-400",
  hackathon: "bg-purple-500/10 text-purple-400",
  workshop: "bg-yellow-500/10 text-yellow-400",
  summit: "bg-orange-500/10 text-orange-400",
  assembly: "bg-teal-500/10 text-teal-400",
  competition: "bg-red-500/10 text-red-400",
  training: "bg-cyan-500/10 text-cyan-400",
  other: "bg-neutral-500/10 text-neutral-400",
};

interface EventsGalleryProps {
  standalone?: boolean;
}

export default function EventsGallery({ standalone }: EventsGalleryProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={standalone ? "py-32" : "px-6 py-32"} aria-label="Where I've shown up">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display mb-4 text-3xl font-bold tracking-tight md:text-5xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Where I've Shown Up
        </motion.h2>
        <motion.p
          className="mb-16 max-w-xl text-text-secondary"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Conferences, hackathons, meetups, and communities I've been part of.
        </motion.p>

        {/* Events grid — editorial, varied sizes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              large={index < 2}
              reducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EventCardProps {
  event: Event;
  index: number;
  large?: boolean;
  reducedMotion: boolean;
}

function EventCard({ event, index, large, reducedMotion }: EventCardProps) {
  return (
    <motion.article
      className={`group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/20 hover:bg-surface-elevated ${
        large ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Photo */}
      {event.photo && (
        <div className="mb-4 aspect-16/10 overflow-hidden rounded-lg bg-surface-elevated">
          {getPhotoUrl(event.photo) ? (
            <img
              src={getPhotoUrl(event.photo)}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-text-muted">
              {event.photo}
            </div>
          )}
        </div>
      )}

      {/* Type badge */}
      <span
        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${eventTypeColors[event.type]}`}
      >
        {event.type}
      </span>

      {/* Title */}
      <h3 className="font-display mt-3 text-lg font-semibold text-text-primary">
        {event.title}
      </h3>

      {/* Meta */}
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-tertiary">
        {event.date && <span>{event.date}</span>}
        {event.location && (
          <>
            <span aria-hidden="true">&middot;</span>
            <span>{event.location}</span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
        {event.description}
      </p>

      {/* External links */}
      {event.links && event.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {event.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} — ${event.title}`}
              className="inline-flex items-center gap-1 text-xs text-text-tertiary transition-colors hover:text-accent"
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

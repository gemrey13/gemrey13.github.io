import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "why-i-chose-electron",
    slug: "why-i-chose-electron",
    title: "Why I Chose Electron for a Reconciliation System",
    excerpt:
      "When I started building Gi-Recon PRO, I had to decide: web app or desktop app? Here's why Electron won — and the trade-offs I accepted.",
    date: "February 12, 2025",
    readTime: "6 min read",
    tags: ["Electron", "TypeScript", "Architecture", "Desktop Apps"],
    published: true,
    content: `When I started building Gi-Recon PRO — a reconciliation system for matching POS data against third-party delivery platforms — the first major decision was the delivery format. Web app? Desktop app? Something else entirely?

## The Problem Space

The accounting and logistics departments at the company needed to reconcile sales from their internal POS system against reports from Foodpanda and GrabFood. The data came in various formats: CSV exports, DBF files from a legacy 32-bit FoxPro system, and platform-specific report downloads.

This immediately narrowed my options. The system needed to:

- Read local files directly from the user's machine (DBF, CSV, Excel)
- Process large datasets without depending on network speed
- Work offline — internet connectivity at the office wasn't always reliable
- Interface with a legacy FoxPro database through its DBF files

## Why Not a Web App?

A web app would've been simpler to deploy and update. But the file system access requirements made it impractical. The \`File System Access API\` exists in browsers, but it's limited and requires constant user permission grants. Reading DBF files — a binary format — directly from disk isn't something browsers handle gracefully.

More importantly, processing thousands of transactions with matching logic is CPU-intensive work. Doing that in a browser tab, with data round-tripping to a server, would introduce latency the users wouldn't tolerate. They needed instant feedback.

## Why Electron?

Electron gave me the best of both worlds:

- **Full Node.js access** — I could read DBF files, process CSVs, and interact with SQLite directly
- **React frontend** — the UI could be built with the same tools I'm fastest with
- **Cross-platform potential** — though the initial deployment was Windows-only, the option was there
- **Worker threads** — heavy processing could be offloaded without freezing the UI

## The Trade-Offs I Accepted

Electron isn't perfect. The bundle size is large — shipping Chromium with your app is inherently heavy. Memory usage is higher than a native app. Auto-updates require infrastructure.

But for this use case, those trade-offs were acceptable. The app runs on dedicated office machines, not resource-constrained devices. The users don't care about the 150MB install size — they care that reconciliation that took hours manually now takes minutes.

## What I'd Reconsider

If I were building this today with the same requirements, I'd look more seriously at **Tauri**. Smaller bundles, lower memory footprint, and Rust on the backend. The ecosystem has matured significantly. But at the time I started, Electron's maturity and the React integration story made it the pragmatic choice.

The lesson: choose the tool that solves the actual problem. Electron gets criticized often, but when your requirements genuinely demand desktop capabilities with a modern UI, it's still a solid option.`,
  },
  {
    id: "worker-threads-saved-my-app",
    slug: "worker-threads-saved-my-app",
    title: "Worker Threads Saved My App from Freezing",
    excerpt:
      "Processing thousands of transaction records in Electron froze the entire UI. Worker threads fixed it — here's how I implemented them.",
    date: "March 28, 2025",
    readTime: "8 min read",
    tags: ["Node.js", "Worker Threads", "Electron", "Performance"],
    published: true,
    content: `About two months into building Gi-Recon PRO, I hit a wall. The reconciliation engine worked — it matched POS transactions against delivery platform records accurately. But when processing a full month of data (thousands of records), the entire application froze for 10-15 seconds.

In a web app, you'd show a loading spinner and the browser handles it. In Electron, when the main process or renderer process blocks, *everything* freezes. The window becomes unresponsive. Windows might even show the "Not Responding" dialog. Not a great look for a tool that's supposed to make people's lives easier.

## Understanding the Problem

The reconciliation logic involves:

1. Reading and parsing DBF files (binary format from the legacy POS)
2. Reading CSV/Excel exports from Foodpanda and GrabFood
3. Normalizing data across different schemas
4. Running matching algorithms — comparing transaction amounts, dates, reference numbers
5. Identifying discrepancies and generating reports

Steps 1-2 are I/O bound, but steps 3-5 are CPU-intensive. The matching algorithm compares each POS transaction against delivery records, looking for matches across multiple fields with tolerance for slight differences. That's O(n*m) in the worst case.

## The Solution: Node.js Worker Threads

Node.js \`worker_threads\` let you run JavaScript in parallel threads with their own V8 instances. Unlike child processes, workers can share memory via \`SharedArrayBuffer\` and transfer data efficiently.

The architecture I landed on:

\`\`\`typescript
// Main thread: handles UI and coordination
// Worker thread: handles all heavy data processing

// renderer -> main process (IPC) -> worker thread -> results back

const worker = new Worker('./reconciliation-worker.js');

worker.postMessage({
  type: 'RECONCILE',
  posData: serializedPosRecords,
  deliveryData: serializedDeliveryRecords,
  config: matchingConfig
});

worker.on('message', (result) => {
  if (result.type === 'PROGRESS') {
    // Update progress bar in UI
    updateProgress(result.percent);
  }
  if (result.type === 'COMPLETE') {
    // Reconciliation finished
    displayResults(result.data);
  }
});
\`\`\`

## Key Implementation Details

**Progress reporting:** The worker sends progress messages back to the main thread at intervals. This lets the UI show a real progress bar instead of just a spinner. Users can see "Processing record 2,450 of 8,200" — that's much better than a frozen screen.

**Data transfer:** I serialize the parsed records and send them to the worker via \`postMessage\`. For large datasets, I use \`transferList\` to transfer ArrayBuffers without copying — this significantly reduces the handoff time.

**Error handling:** Workers can crash independently. I wrapped the worker communication in a promise-based API with timeouts, so the main app can recover gracefully if something goes wrong in the processing thread.

## The Result

After implementing worker threads:

- UI stays completely responsive during processing
- Users see real-time progress feedback
- Processing time is roughly the same (workers don't make single-threaded code faster), but the *perceived* performance is dramatically better
- The app no longer triggers "Not Responding" warnings

## Lessons Learned

Worker threads aren't a magic bullet. They add complexity — you're now dealing with message passing, serialization costs, and parallel-code debugging challenges. For quick operations (under a second), the overhead of spinning up a worker and transferring data isn't worth it.

But for anything that blocks the event loop for more than a couple hundred milliseconds in an Electron app, they're essential. Your users should never see a frozen window.`,
  },
  {
    id: "reconciling-messy-real-world-data",
    slug: "reconciling-messy-real-world-data",
    title: "Lessons from Reconciling Messy Real-World Data",
    excerpt:
      "POS systems, Foodpanda, and GrabFood all structure their data differently. Building reconciliation logic that handles the mess taught me a lot about defensive programming.",
    date: "May 5, 2025",
    readTime: "7 min read",
    tags: ["Data Processing", "TypeScript", "SQLite", "Architecture"],
    published: true,
    content: `The hardest part of building a reconciliation system isn't the matching algorithm. It's dealing with the data *before* it reaches the algorithm. Real-world data from multiple sources is messy, inconsistent, and full of edge cases that no spec document will ever warn you about.

## Three Sources, Three Realities

Gi-Recon PRO reconciles data from three sources:

- **POS System** — a legacy 32-bit FoxPro application that exports data as DBF files
- **GrabFood** — CSV exports from the merchant dashboard
- **Foodpanda** — their own report format with different column structures

Each source has its own ideas about how to represent the same information. A single order might appear as:

\`\`\`typescript
// POS: amount is the total including add-ons
{ ref: "GR-20250103-0042", amount: 547.00, date: "2025-01-03" }

// Grab: amount might exclude platform fees
{ reference_number: "GR20250103-0042", subtotal: 520.00, fee: 27.00, order_date: "01/03/2025" }

// Foodpanda: completely different schema
{ order_id: "FP-8847291", total_amount: "547", created_at: "2025-01-03T14:22:00+08:00" }
\`\`\`

Notice the differences: reference number formats aren't consistent. Date formats vary. Amount fields might or might not include fees. Column names are different. Some values are strings, others are numbers.

## Normalization Is Everything

Before any matching can happen, every record needs to be normalized into a common shape. I built a normalization layer that:

- Strips dashes, spaces, and prefixes from reference numbers
- Parses dates into a consistent format regardless of input (handles \`YYYY-MM-DD\`, \`MM/DD/YYYY\`, ISO 8601)
- Converts all amounts to numbers with consistent decimal precision
- Maps platform-specific field names to a unified schema

This normalization layer is where most bugs lived during development. Every time accounting reported a "missed match," it was usually a normalization edge case I hadn't handled.

## Fuzzy Matching by Necessity

Exact matching on reference numbers sounds clean in theory. In practice, reference numbers get modified. A POS operator might add a note. The platform might truncate the reference. Sometimes the reference is simply missing from one source.

So the matching algorithm uses a tiered approach:

1. **Exact match** on normalized reference number — highest confidence
2. **Fuzzy match** on reference + amount within tolerance (±2 pesos for rounding differences)
3. **Date + amount match** when reference numbers don't align — lower confidence, flagged for manual review
4. **Unmatched** — records that couldn't be matched go into a discrepancy report

## The DBF Challenge

Reading DBF files deserves its own mention. The legacy POS runs on a 32-bit FoxPro system — technology from the 1990s. DBF is a binary format with fixed-width fields and its own character encoding quirks.

I used a Node.js DBF parser, but had to handle:

- Character encoding issues (some fields used code pages I had to detect)
- Memo fields stored in separate \`.fpt\` files
- Deleted records that are still physically present in the file (marked with a flag)
- Date fields stored as 8-character strings (\`YYYYMMDD\`)

## What I Learned

**Never trust external data.** Every field from an external source gets validated and normalized before entering your system. Assume the format will change without warning.

**Build reconciliation in layers.** Separate parsing, normalization, matching, and reporting into distinct stages. When something breaks (it will), you need to know which layer failed.

**Make discrepancies visible.** The most valuable output of a reconciliation system isn't the matched records — it's the ones that *didn't* match. That's where the money is being lost.

**Log aggressively during development.** When a match fails, you need to see exactly what both records looked like before and after normalization. Without this, debugging matching logic is impossible.

Real-world data reconciliation is unglamorous work. But it taught me more about defensive programming, data integrity, and building systems that handle uncertainty than any textbook project ever could.`,
  },
];

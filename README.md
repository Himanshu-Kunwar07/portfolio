# Himanshu Kunwar | Portfolio

Personal portfolio website of **Himanshu Kunwar**, a Full Stack Developer who builds responsive web applications, real-time systems and data-driven products.

## About me

I build user-friendly, robust web products from the interface to the database: React and TypeScript on the front, Node.js, Express and Bun on the back, with PostgreSQL, MongoDB, Prisma and Redis for data. I also work as a data analyst, using SQL, BI tools and Python to keep data accurate and useful.

## Experience

- **Data Analyst, Invedus** (08/2025 – Present): cleaning and validating large datasets, geospatial analysis for 3D city mapping, and QA that cut annotation errors by 10%.
- **Frontend Developer, Fourth Quarter Technology** (08/2024 – 08/2025): maintained websites for 100+ real estate clients and wrote SQL for backend systems serving 1000+ customers.

## Selected work

| Project | What it is | Stack |
| --- | --- | --- |
| [Dashboard](https://github.com/Himanshu-Kunwar07/Dashboard) | Dashboard application | React, TypeScript |
| [Peer-to-Peer Payments](https://github.com/Himanshu-Kunwar07?tab=repositories) | Instant transfers by phone, email or username, with a wallet and OTP/PIN/biometric security | React, WebSocket, Express, Bun, PostgreSQL |
| [Centralized Exchange](https://github.com/Himanshu-Kunwar07/CentralizedExchange) | Real-time order book, custodial wallets and a beginner-friendly trading dashboard | React, WebSocket, Express, Bun, Prisma, Redis |
| [Project Manager App](https://github.com/Himanshu-Kunwar07/trello_mongo) | Project management application | React, Node.js, MongoDB |

## Education

- MCA, Galgotias University (2022 – 2024)
- B.Sc. Computer Science, KL DAV PG College Roorkee (2018 – 2021)

## About this website

Pages: **Home**, **About**, **Work** and **Contact**, with a shared header and footer.

- Next.js (App Router) and TypeScript, with hand-written CSS and no UI libraries
- Scroll-reveal animations, a scrolling tools marquee, count-up stats, an animated skills selector and a FAQ accordion
- Custom cursor and a scroll progress bar
- Contact form that emails me through the [Resend](https://resend.com) API, with the visitor set as the reply-to address

## Run it locally

```bash
npm install
cp .env.example .env.local   # add your RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run lint`, `npm run build`, `npm run start`.

**Environment variables**

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com (required for the contact form) |
| `CONTACT_TO_EMAIL` | Where messages are delivered (optional; defaults to the email in `data/site.ts`) |

Copy and links live in `data/site.ts`; styles are in `app/globals.css`.

## Get in touch

- Email: himanshukunwar07@gmail.com
- LinkedIn: [himanshu-022001](https://linkedin.com/in/himanshu-022001)
- GitHub: [Himanshu-022001](https://github.com/Himanshu-022001)

## License

All rights reserved. The code and content in this repository may not be copied or reused without permission.

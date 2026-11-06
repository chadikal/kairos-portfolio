import Image from 'next/image';
import heroArtwork from '../../public/brand/derived/kairos-hourglass-crisp.png';
import wordmark from '../../public/brand/derived/kairos-interface-tech-wordmark.png';
import { ResponsiveNavigation } from '@/components/ui/responsive-navigation';
import { ButtonLink } from '@/components/ui/button-link';
import { Section } from '@/components/ui/section';
import { Arrow } from '@/components/ui/arrow';
import { ProjectCard } from '@/components/project-card';
import { ServiceCard } from '@/components/service-card';
import { ContactChannel } from '@/components/contact-channel';
import {
  navigation,
  projects,
  services,
  contactChannels,
} from '@/content/site';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ResponsiveNavigation
        brand={
          <a href="#home" className="brand" aria-label="KAIROS home">
            <Image
              src={wordmark}
              alt="KAIROS | Interface Tech"
              unoptimized
              sizes="(max-width: 767px) 144px, 160px"
              className="brand-wordmark"
            />
          </a>
        }
        items={navigation}
        action={{ label: 'Let’s Talk', href: '#contact' }}
      />
      <main id="main" tabIndex={-1}>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="small-line" /> INDEPENDENT FRONTEND DEVELOPER
              </p>
              <h1 id="hero-title">
                Every great idea
                <br className="desktop-break" /> has its{' '}
                <span className="gradient-text">moment.</span>
              </h1>
              <p className="hero-description">
                I turn designs into responsive, interactive websites built with
                precision and care.
              </p>
              <div className="hero-actions">
                <ButtonLink href="#work">Explore My Work</ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  Let&apos;s Talk
                </ButtonLink>
              </div>
              <p className="hero-signature">
                <span aria-hidden="true">✦</span> Your vision. My craft. The
                right moment.
              </p>
            </div>
            <figure className="hero-artwork">
              <div className="hero-stage">
                <div className="hero-ground" aria-hidden="true" />
                <Image
                  src={heroArtwork}
                  alt="KAIROS — the luminous hourglass-shaped K"
                  sizes="(max-width: 767px) min(100vw - 40px, 440px), (max-width: 1100px) 44vw, 560px"
                  preload
                  className="hero-symbol"
                />
              </div>
              <figcaption className="artwork-caption">
                <span className="artwork-dot" /> A moment of possibility.
              </figcaption>
            </figure>
          </div>
          <div className="container hero-baseline">
            <p className="technical">FROM DESIGN TO EXPERIENCE.</p>
            <a href="#work">
              Discover the work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <Section
          id="work"
          index="01"
          eyebrow="SELECTED WORK"
          title="Designs brought to life."
          description="A space for the details, decisions, and interfaces behind my work."
        >
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="future-project">
            <span className="future-project-icon" aria-hidden="true">
              +
            </span>
            <div>
              <h3>The next chapter</h3>
              <p>Future client projects will appear here.</p>
            </div>
            <span className="technical future-project-label">MORE TO COME</span>
          </div>
        </Section>
        <Section
          id="services"
          index="02"
          eyebrow="WHAT I DO"
          title="Your design. Every detail."
          description="Focused frontend services that bridge the gap between a design file and a website people can use."
        >
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
          <div className="services-note">
            <span className="small-line" />
            <p>Designed by you. Developed with care.</p>
            <span className="technical">FIGMA / ADOBE XD → WEB</span>
          </div>
        </Section>
        <Section
          id="about"
          index="03"
          eyebrow="BEHIND KAIROS"
          title="A personal approach."
        >
          <div className="about-grid">
            <div className="about-statement">
              <p>
                From Design
                <br />
                to <span className="gradient-text">Experience.</span>
              </p>
              <span className="technical">THE RIGHT MOMENT TO CREATE.</span>
            </div>
            <div className="about-copy">
              <h3>
                Hi, I&apos;m Chadi.
                <span>The developer behind KAIROS.</span>
              </h3>
              <p>
                I&apos;m an independent frontend developer turning
                client-provided Figma and Adobe XD designs into responsive,
                interactive websites.
              </p>
              <p>
                I care about the small details: spacing that feels right,
                layouts that adapt naturally, and interactions that make sense.
                You work directly with me, with clear communication from design
                file to finished interface.
              </p>
              <div className="brand-meaning">
                <span className="technical">WHY KAIROS?</span>
                <p>
                  The right moment. The right opportunity. The K and hourglass
                  capture that idea: bringing your vision to life when it
                  matters.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <section
          id="contact"
          className="contact-section section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">
                <span>04 /</span> LET&apos;S CONNECT
              </p>
              <h2 id="contact-title">
                Your next idea.
                <br />
                <span className="gradient-text">Its next moment.</span>
              </h2>
              <p className="contact-intro">
                Have a design ready to become a website?
                <br />
                Let&apos;s bring it to life.
              </p>
              <p className="contact-notice">
                <span aria-hidden="true">↗</span> Contact details will be added
                soon.
              </p>
            </div>
            <div className="contact-channels">
              {contactChannels.map((channel) => (
                <ContactChannel key={channel.label} {...channel} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a href="#home" className="brand" aria-label="KAIROS home">
              <Image
                src={wordmark}
                alt="KAIROS | Interface Tech"
                unoptimized
                sizes="(max-width: 767px) 144px, 160px"
                className="brand-wordmark"
              />
            </a>
            <p>Every great idea has its moment.</p>
            <a className="back-top" href="#home">
              Back to top <Arrow diagonal />
            </a>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} KAIROS | Interface Tech. All rights
              reserved.
            </p>
            <nav aria-label="Footer">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <span className="technical">CRAFTED WITH INTENT.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

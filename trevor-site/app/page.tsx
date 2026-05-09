import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Image from "next/image";

const skills = [
  "SolidWorks", "3D Printing", "Mechanical Design",
  "Rack & Pinion Systems", "Embedded Systems", "Arduino / C++",
  "Technical Documentation", "Team Collaboration",
];

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-sm text-blue-600 font-medium mb-3 tracking-wide">
            Engineering Student
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 text-gray-900">
            Hi, I&apos;m Trevor Witkowski.
          </h1>
          <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
            I design and build mechanical systems — from CAD models to working prototypes.
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-5">About me</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              I&apos;m an engineering student with hands-on experience in mechanical
              design, CAD modeling, and embedded systems. I love taking a problem
              from a rough idea all the way to a finished, working prototype.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Outside of engineering, I&apos;m always looking for the next project
              to sink my teeth into.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src="/images/team-photo.jpg"
              alt="Trevor with the S.L.E.D project team"
              width={600}
              height={420}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Projects</h2>

          {/* Putt Master */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {/* GIF hero */}
            <div className="bg-gray-50 flex items-center justify-center gap-6 p-8 border-b border-gray-100 flex-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/putt-master-demo.gif"
                alt="Putt Master full project demo"
                className="max-h-64 rounded-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sled-gears.gif"
                alt="Putt Master rack and pinion mechanism in motion"
                className="max-h-64 rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mechanical", "Electronics", "Team Project"].map(tag => (
                  <span key={tag}
                    className="text-xs px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">Putt Master</h3>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
                An adaptable golf putting green built with a 5-person team. A
                motor-driven rack-and-pinion system adjusts the terrain angle,
                and removable obstacles can be placed on the turf to change the
                difficulty — making every round different.
              </p>

              {/* CAD images */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { src: "/images/sled-ramp.jpg", alt: "Terrain adjustment arm" },
                  { src: "/images/sled-mount.jpg", alt: "Motor mount bracket" },
                  { src: "/images/sled-gears.jpg", alt: "Rack & pinion mechanism" },
                ].map((img) => (
                  <div key={img.src}
                    className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-video flex items-center justify-center">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={280}
                      className="w-full h-full object-contain p-3"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
                <span><span className="text-gray-900 font-medium">Role</span> — Mechanical Designer</span>
                <span><span className="text-gray-900 font-medium">Team</span> — 5 members</span>
                <span><span className="text-gray-900 font-medium">Tools</span> — SolidWorks, Arduino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Open to internship opportunities, project collaborations, or just
              a conversation about engineering.
            </p>
            <a href="mailto:trevwit07@gmail.com"
              className="text-sm text-blue-600 hover:underline">
              trevwit07@gmail.com
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

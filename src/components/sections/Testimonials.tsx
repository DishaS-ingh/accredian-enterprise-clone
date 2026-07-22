import Image from "next/image";
import Container from "../ui/Container";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Testimonials from{" "}
            <span className="text-blue-600">Our Partners</span>
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            What our clients say about us
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.company}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={item.logo}
                alt={item.company}
                width={80}
                height={50}
                className="mb-6 h-12 w-auto object-contain"
              />

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
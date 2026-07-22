import Image from "next/image";
import Container from "../ui/Container";
import { courseSegments } from "@/constants/courseSegmentation";

export default function CourseSegmentation() {
  return (
    <section id="segmentation" className="py-20 bg-slate-50">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Explore learning paths designed for every professional.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courseSegments.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-blue-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "../ui/Container";
import { edgeItems } from "@/constants/edge";

export default function Edge() {
  return (
    <section id="edge" className="py-20 bg-slate-50">
      <Container>
        <div className="mb-16 text-center">
  <h2 className="text-4xl font-bold">
    The <span className="text-blue-600">Accredian Edge</span>
  </h2>

  <p className="mt-3 text-lg text-slate-600">
    Key Aspects of Our Strategic Training
  </p>
</div>

<div className="relative">
  {/* Timeline */}
  <div className="absolute left-0 right-0 top-10 hidden h-1 bg-blue-200 lg:block" />

  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
    {edgeItems.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="group relative flex flex-col items-center text-center"
        >
          {/* Step Number */}
          <div className="absolute -top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
            {index + 1}
          </div>

          {/* Icon */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg ring-4 ring-blue-100 transition duration-300 group-hover:-translate-y-2 group-hover:ring-blue-300">
            <Icon className="h-9 w-9 text-blue-600" />
          </div>

          <h3 className="mt-5 text-xl font-bold">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>
</div>
      </Container>
    </section>
  );
}
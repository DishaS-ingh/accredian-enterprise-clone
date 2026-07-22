import Container from "../ui/Container";
import { edgeItems } from "@/constants/edge";

export default function Edge() {
  return (
    <section id="edge" className="py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>

          <p className="mt-3 text-slate-600 text-lg">
            Key Aspects of Our Strategic Training
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-10 left-0 w-full h-1 bg-blue-100 hidden lg:block"></div>

          <div className="grid gap-12 lg:grid-cols-7">
            {edgeItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-blue-100">
                    <Icon className="h-9 w-9 text-blue-600" />
                  </div>

                  <h3 className="mt-6 font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-6">
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
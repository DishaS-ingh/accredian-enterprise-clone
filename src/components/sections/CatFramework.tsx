import Container from "../ui/Container";
import { catFramework } from "@/constants/cat";

export default function CatFramework() {
  return (
    <section
      id="cat"
      className="bg-slate-50 py-20"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Our Proven Learning Methodology
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {catFramework.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-12 w-12 text-blue-600" />
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

                {index !== 2 && (
                  <div className="absolute top-1/2 -right-8 hidden lg:block text-5xl text-blue-300">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
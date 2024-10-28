import {
  ButtonLink,
  ComingSoon,
  SectionTitle,
  classNames,
} from './SharedComponents';

export function CaseStudies() {
  return (
        <section className="container max-w-4xl my-36">
          <div className="flex flex-col m-auto mt-12 gap-24">
            <SectionTitle>使用 Stately 构建</SectionTitle>

            <div className="flex flex-col md:flex-row gap-4 md:gap-12 max-w-2xl">
              <img
                className="h-24 md:h-36 self-start"
                src="./assets/landing/fugo-logo.svg"
                alt={`Fugo`}
              />
              <Quote
                quote="我可以使用 Stately 编辑器中的模拟向利益相关者解释业务逻辑。离开编码很长时间后，我可以回来并有效地理解逻辑。"
                quoter="Marsel Atniashev"
                href="https://stately.ai/blog/2023-12-04-fugo-and-stately-case-study"
              />
            </div>

            <div className="flex flex-col gap-4 max-w-xl self-end">
              <div>
                <img
                  className="h-24 w-auto"
                  src="./assets/landing/koordinates-logo.svg"
                  alt={`Koordinates`}
                />
              </div>
              <Quote
                quote="我喜欢 XState 对副作用的一流支持。副作用可以与触发它并使用它的代码共同定位，而不必像 Redux 那样将它们放在其他地方。"
                quoter="Taylor Lodge"
                href="https://stately.ai/blog/2023-11-28-koordinates-and-stately-case-study"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12 max-w-2xl">
              <Quote
                quoter="Parker McMullin"
                quote="我能够向公司其他人展示机器可视化器，这是一种乐趣。这有助于传达 UI 部件的复杂性，也有助于讨论如何结合设计模型处理特定用例。"
                href="https://stately.ai/blog/2023-12-07-tidefi-and-stately-case-study"
              />

              <img
                className="h-24 md:h-36 self-start"
                src="./assets/landing/tidefi-logo.svg"
                alt={`Tidefi`}
              />
            </div>
          </div>
        </section>
  );
}

function Quote({
  quote,
  href,
  quoter,
}: {
  quote: string;
  quoter: string;
  href: string;
}) {
  return (
    <div>
      <p className="text-white/90 mt-4 font-medium text-lg md:text-xl lg:text-2xl">
        “{quote}”
      </p>
      <p className="text-white/60 mt-4 mb-8 font-semibold">- {quoter}</p>
      <ButtonLink href={href} target="_blank" size="medium">
                阅读案例研究
      </ButtonLink>
    </div>
  );
}

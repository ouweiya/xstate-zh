import { SectionTitle } from './SharedComponents';

export function Testimonials() {
  return (
        <section className="container pt-36 w-full">
          <div className="pb-24 w-fit m-auto">
            <SectionTitle>团队的喜爱</SectionTitle>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6 items-start">
            <li>
              <ul className="grid gap-6 w-full">
                <Testimonial
                  imgSrc="./landing-page/assets/amy.png"
                  name="Amy Pellegrini"
                  company="Thoughtworks"
                >
                  每个我引入 XState 的团队在处理复杂用户界面的状态管理时都变得更加高效。它填补了 JS 生态系统中之前没有的一个空白。
                </Testimonial>
                <Testimonial
                  imgSrc="./landing-page/assets/natalie.png"
                  name="Natalie Cuthbert"
                  company="Stitch"
                >
                  我们一直在为我们的新支付产品使用 XState。向让设计复杂前端流程变得轻松的团队致敬。
                </Testimonial>
                <Testimonial
                  imgSrc="./landing-page/assets/patrick.png"
                  name="Patrick Cavit"
                  company="Netflix"
                >
                  XState 是一个启示。它使复杂的任务更容易构建和调试，同时也使代码更加简洁和易于理解。
                </Testimonial>
              </ul>
            </li>
            <li>
              <ul className="grid gap-6">
                <Testimonial
                  imgSrc="./landing-page/assets/presley.png"
                  name="Presley Pizzo"
                  company="Coder"
                >
                  XState 自然地分离了逻辑，并使模拟 API 调用变得简单，因此更容易测试和组织代码！
                </Testimonial>

                <Testimonial
                  imgSrc="./landing-page/assets/james.png"
                  name="James Tharpe"
                  company="T-Mobile"
                >
                  我们使用 XState 将业务工作流实现为状态图。可视化工具帮助我们与客户更紧密地合作，将工作流外部化为 JSON 配置使得复杂的工作流更改变得出奇地简单，测试用例生成使得前进变得更加自信。XState 让这一切成为可能！
                </Testimonial>
              </ul>
            </li>
            <li>
              <ul className="grid gap-6">
                <Testimonial
                  imgSrc="./landing-page/assets/maya.png"
                  name="Maya Shavin"
                  company="Microsoft"
                >
                  XState 的优势：代码流的视觉清晰视图、代码重用性、测试覆盖率、易于调试/发现错误、代码可扩展性和维护性，以及更好的代码设计和规划。
                </Testimonial>
                <Testimonial
                  imgSrc="./landing-page/assets/santi.png"
                  name="Santi Cros"
                  company="Domestic Data Streamers"
                >
                  使用 XState 进行思考和构建是我开发健壮业务逻辑的一场革命。但能够实时可视化这一点，在我建模和传达任何逻辑时都是一个游戏规则的改变者！
                </Testimonial>
              </ul>
            </li>
          </ul>
        </section>
  );
}

function Testimonial({ imgSrc, name, company, children }) {
  return (
    <li className="h-fit max-w-full bg-gradient-to-b from-gray-800/95 to-gray-800/80 border-[0.5px] shadow-md shadow-gray-900 border-gray-850 rounded-2xl px-8 py-6">
      <div className="flex items-center">
        <picture>
          <img src={imgSrc} alt="" height="62" width="62" />
        </picture>
        <div className="pl-4">
          <h3 className="text-white/60 text-lg font-semibold">{name}</h3>
          <p className="text-white/60 text-sm pt-1 font-semibold">
            @ {company}
          </p>
        </div>
      </div>
      <p className="text-white/90 text-lg leading-snug mt-4">{children}</p>
    </li>
  );
}

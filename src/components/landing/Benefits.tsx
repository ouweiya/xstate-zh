import {
  ArrowLeftRightIcon,
  BookOpenIcon,
  CalendarIcon,
  CheckCircleIcon,
  FileDownIcon,
  GithubIcon,
  MergeIcon,
  PartyPopperIcon,
  ShareIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Wand2Icon,
} from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  ButtonLink,
  ComingSoon,
  SectionTitle,
  classNames,
} from './SharedComponents';

export function Benefits() {
  return (
    <>
      <DesignSection />
      <XStateSection />
      <SkySection />
      <SourceOfTruthSection />
    </>
  );
}

function DesignSection() {
  return (
    <AnimateAwayGradient animationClass="bgimage-gradient-pink">
      <BenefitSection anchorLink="design">
              <>
                <SectionTitle>
                  <span className="text-pink-500">设计它的工作方式</span>，为团队中的每个人（甚至是 AI 🤖）提供一种视觉语言。
                </SectionTitle>
                <div className="grid grid-cols-1 gap-12 pt-16 lg:grid-cols-2">
                  <div className="flex max-w-lg">
                    <div className="pt-2 pr-12 text-pink-300">
                      <Wand2Icon size="32" />
                    </div>
                    <FeatureText>
                      我们的拖放编辑器汇集了各个背景的贡献者。代码、图表、文档、测试生成等都在一个地方。没有更多的孤岛。始终保持最新。
                    </FeatureText>
                  </div>
                  <div className="flex max-w-lg">
                    <div className="pt-2 pr-12 text-pink-300">
                      <SparklesIcon size="32" />
                    </div>
                    <FeatureText>
                      AI 喜欢在每个阶段提供帮助，通过状态机引导它们，而人类则使用可视化编辑器来审核和增强它们的工作。
                    </FeatureText>
                  </div>
                </div>

                <div className="grid w-full gap-12 pt-24 md:grid-cols-2">
                <div className="md:col-span-2">
                    <Feature noPadding box>
                      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 p-12">
                        <FeatureText>
                          <Strong>无需代码即可创建流程</Strong>。快速原型或收集需求，而无需担心技术细节。
                        </FeatureText>
                        <FeatureText>
                          <Strong>然后模拟你的设计</Strong>进行测试和迭代。你甚至可以立即尝试作为自动生成的 React 应用程序的原型。
                        </FeatureText>
                      </div>
                      <img
                        alt="在 Stately 编辑器中模拟模式下查看相同信用检查工作流的视图。在设计模式下，可以添加状态。在模拟模式下，可以逐步查看机器的当前状态和可用事件。"
                        src="./assets/landing/design-and-simulate.png"
                        className="w-full h-auto rounded-b-2xl"
                        height="385"
                        width="1207"
                      />
                    </Feature>
                  </div>
                  <Feature box>
                    <FeatureText>
                      <Strong>从你的团队和客户那里获得反馈</Strong>，了解一切应该如何工作。
                    </FeatureText>
                  </Feature>

                  <Feature box>
                    <FeatureText>
                      <Strong>探索社区图表</Strong>，以激发你自己的解决方案。与社区分享你的工作，获得反馈和赞誉。
                    </FeatureText>
                  </Feature>
                  <div className="md:col-span-2">
                    <Feature box noPadding>
                      <div className="grid md:grid-cols-2">
                        <div className="p-12">
                          <FeatureText>
                            <Strong>嵌入 Figma 设计或附加图像和其他资产到状态</Strong>，以查看代码旁边的模型、需求文档等。
                          </FeatureText>
                          <div className="grid pt-12 gap-8">

                          <div className="flex gap-4">
                              <CheckCircleIcon className="text-pink-300 mt-1" />
                              <div className="flex-1">
                                <FeatureText>
                                  嵌入的 Figma 框架与你的设计文件保持同步。
                                </FeatureText>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <CheckCircleIcon className="text-pink-300 mt-1" />
                              <div className="flex-1">
                                <FeatureText>
                                  设计师和产品经理可以填写每个状态应该如何显示。
                                </FeatureText>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <CheckCircleIcon className="text-pink-300 mt-1" />
                              <div className="flex-1">
                                <FeatureText>
                                  通过每一步的图像直观地理解状态机的作用。
                                </FeatureText>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <CheckCircleIcon className="text-pink-300 mt-1" />
                              <div className="flex-1">
                                <FeatureText>
                                  通过使用与你的代码相同逻辑的模型快速原型新想法。
                                </FeatureText>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          alt="在 Stately 编辑器中为颜色选择器创建的状态机，显示在空闲状态下的颜色值输入截图和在打开状态下的全光谱颜色选择器截图。"
                          src="./assets/landing/assets-colorpicker.png"
                          className="w-full h-auto rounded-r-2xl"
                          width="603"
                          height="903"
                        />
                      </div>
                    </Feature>
                  </div>

                  <div className="md:col-span-2">
                    <Feature box noPadding>
                      <div className="pt-24 pl-12 max-w-xl pb-24 m-auto">
                        <FeatureText>
                          <Strong>使用 AI 生成流程</Strong>，以搭建行为框架、建议变体、发现边缘情况，甚至编写代码。
                        </FeatureText>
                      </div>
                      <img
                        alt="在 Stately 编辑器中从文本描述准确生成的状态机：一个用于 Web 应用程序的身份验证流程。前两个登录选项是使用 GitHub 或 Apple，用户无需输入电子邮件地址或密码。第三个登录选项是使用电子邮件，用户需要输入电子邮件地址和密码，如果他们尚未注册则注册，如果已经注册则登录。身份验证流程在用户登录后完成。"
                        src="./assets/landing/ai-generation.png"
                        className="w-full h-auto rounded-br-2xl"
                        height="363"
                        width="1207"
                      />
                    </Feature>
                  </div>
                </div>
              </>
            </BenefitSection>
    </AnimateAwayGradient>
  );
}

function XStateSection() {
  return (
    <AnimateAwayGradient animationClass="bgimage-gradient-orange">
      <BenefitSection anchorLink="build">
                <SectionTitle>
                  <span className="text-orange-500">
                    使用可执行图表构建
                  </span>{' '}
                  并获得基于文本和可视化工具的最佳效果。
                </SectionTitle>
        <div className="grid mt-24 lg:grid-cols-3">
                    <Feature>
                      <img
                        alt="XState"
                        src="./assets/landing/xstate-white.svg"
                        height="32"
                        width="118"
                        className="self-start h-8 mb-4 opacity-60"
                      />
                      <FeatureText>
                        <Strong>使用 XState 运行图表</Strong>，这是一个用于在 JavaScript 和 TypeScript 应用中编排和管理状态的一流开源库。无需锁定。
                      </FeatureText>

                      <div className="flex gap-2">
                        <ButtonLink href="/docs/xstate" target="_self">
                          阅读 XState 文档
                        </ButtonLink>
                        <ButtonLink href="https://github.com/statelyai/xstate">
                          在 Github 上查看
                        </ButtonLink>
                      </div>
                    </Feature>

                    <Feature>
                      <div className="flex gap-4">
                        <img
                          alt="TypeScript, React, Vue"
                          src="./assets/landing/platform-logos.svg"
                          height="30"
                          width="126"
                          className="h-[30px] self-start mb-4 opacity-60"
                        />
                      </div>
                      <FeatureText>
                        <Strong>
                          在前端、后端或任何 JavaScript 运行的地方使用 XState
                        </Strong>
                        。可用于 React、Vue、Svelte 和其他框架的集成。
                      </FeatureText>
                    </Feature>
                    <Feature>
                      <img
                        alt=""
                        height="32"
                        width="102"
                        src="./assets/landing/network-white.svg"
                        className="h-[38px] self-start mb-2 opacity-60"
                      />

                      <FeatureText>
                        XState 使用事件驱动编程、状态机、状态图和演员模型来{' '}
                        <Strong>
                          以可预测、健壮和可视化的方式处理即使是最复杂的逻辑
                        </Strong>
                        。
                      </FeatureText>
                      <ButtonLink
                        href="/docs/state-machines-and-statecharts"
                        target="_self"
                      >
                        了解更多关于状态图的信息
                      </ButtonLink>
                    </Feature>
        </div>
        <img
          alt="A book lender state machine in VSCode. One panel shows the state machine as a JavaScript object, the other panel shows the same state machine visualized using the XState VSCode extension."
          src="./assets/landing/vscode-split.png"
          className="w-full h-auto mt-12"
          height="637"
          width="1208"
        />
        <div className="grid justify-center w-full gap-12 md:grid-cols-2 lg:grid-cols-3 pt-48">
          <Feature box>
            <div className="flex">
              <ArrowLeftRightIcon className="h-[24px] self-start mt-1 text-orange-300" />
              <div className="flex-1 pl-6">
                               <FeatureText>
                                  <Strong>双向更新</Strong> 在代码和可视化之间进行，让你使用最能提高生产力的工具。
                                </FeatureText>
              </div>
            </div>
          </Feature>
          <Feature box>
            <div className="flex">
              <FileDownIcon className="h-[24px] self-start text-orange-300" />
              <div className="flex-1 pl-6">
                                <FeatureText>
                                  <Strong>
                                    自动可视化 Redux、Zustand 和其他代码
                                  </Strong>{' '}
                                  即使没有 XState 也能在你的代码库中获得 Stately 的好处。
                                </FeatureText>
              </div>
            </div>
          </Feature>
          <Feature box>
                        <FeatureText>
                          <Strong>一个 IDE 扩展</Strong> 将 Stately 的强大功能带入
                          VS Code。
                        </FeatureText>
                        <ButtonLink href="https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode">
                          下载 VS Code 扩展
                        </ButtonLink>
          </Feature>

          <div className="md:col-span-2 lg:col-span-3">
            <Feature box noPadding>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="pt-12 pl-12">
                                   <FeatureText>
                                      <Strong>从图表生成 React 应用</Strong> 以快速启动产品开发。在 AI 的帮助下继续进行可视化迭代，或者直接深入代码，快速扩展脚手架以实现你的愿景。
                                    </FeatureText>
                </div>
                <img
                  alt="The room reading state machine visualized in the Stately editor alongside the React app code generated for that app logic. Over the top is a button that says Generate React app."
                  src="./assets/landing/generate-react.png"
                  className="w-full h-auto rounded-b-2xl md:rounded-bl-[0] md:rounded-tr-2xl"
                  height="331"
                  width="580"
                />
              </div>
            </Feature>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <Feature box noPadding>
              <div>
                <div className="p-12 pb-6">
                                  <FeatureText>
                                      <Strong>自动生成测试</Strong> 以保持覆盖率的健壮和最新。
                                    </FeatureText>
                </div>
                <img
                  alt="A test path list of states and events in the Stately editor alongside that path being highlighted on the canvas, and the code generated to implement the tests."
                  src="./assets/landing/test-generation.png"
                  height="287"
                  width="1207"
                  className="w-full h-auto rounded-br-2xl"
                />
              </div>
            </Feature>
          </div>
        </div>

        <div className="grid justify-center w-full gap-12 md:grid-cols-1 lg:grid-cols-2 pt-12">

                   <Feature box>
                      <div className="flex">
                        <ShareIcon className="h-[24px] self-start mt-1 text-orange-300" />
                        <div className="flex-1 pl-6">
                          <FeatureText>
                          <Strong>导出所有生成的代码</Strong>，可以是 Javascript 或 Typescript。
                          </FeatureText>
                        </div>
                      </div>
                    </Feature>
                    <Feature box>
                      <div className="flex">
                        <GithubIcon className="h-[24px] self-start text-orange-300" />
                        <div className="flex-1 pl-6">
                        <Strong>连接到 Github</Strong> 以同步 Stately 和你的代码库。
                        </div>
                      </div>
                    </Feature>

        </div>

        <div className="md:col-span-2 pt-12">
          <Feature noPadding box>
                       <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 p-12">
                          <FeatureText>
                            <Strong>检查运行中的应用</Strong> 使用 Stately Inspector 来帮助测试和调试你的逻辑。
                          </FeatureText>
                          <FeatureText>
                            <Strong>可视化演员之间的通信</Strong> 在你的运行应用中使用序列图。
                          </FeatureText>
                        </div>
            <img
              alt="The Stately Inspector view, showing a state machine and a sequence diagram for the pizza ordering process side-by-side."
              src="./assets/landing/inspector.png"
              className="w-full h-auto rounded-b-2xl"
              height="385"
              width="1207"
            />
          </Feature>
        </div>

      </BenefitSection>
    </AnimateAwayGradient>
  );
}

function SourceOfTruthSection() {
  return (
    <AnimateAwayGradient animationClass="bgimage-gradient-green">
      <BenefitSection anchorLink="understand">
              <p className="pb-8 text-3xl font-extrabold leading-tight drop-shadow-sm text-white/60">
                产品在不断发展。<span className="pl-4">人们都很忙。</span>
              </p>
              <SectionTitle>
                <span className="text-green-500">理解并保持一致</span>{' '}
                使用 Stately 作为事实来源。
              </SectionTitle>
              <div className="grid mt-24 lg:grid-cols-2">
                <Feature>
                  <div className="flex max-w-lg">
                    <div className="pt-2 pr-6 text-green-300">
                      <ShieldCheckIcon size="48" />
                    </div>
                    <FeatureText>
                      <Strong>未来保障你的代码</Strong> 使用清晰的可视化，便于以后返回和更改。即使是多年以后。
                    </FeatureText>
                  </div>
                </Feature>
                <Feature>
                  <div className="flex max-w-lg">
                    <div className="pt-2 pr-6 text-green-300">
                      <BookOpenIcon size="48" />
                    </div>
                    <FeatureText>
                      <Strong>活文档</Strong> 让整个团队保持同步，无需额外开销。
                    </FeatureText>
                  </div>
                </Feature>
              </div>
              <div className="grid w-full gap-12 mt-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="md:col-span-2 lg:col-span-3">
                  <Feature box noPadding>
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="pt-12 pl-12">
                        <FeatureText>
                          <Strong>参考事件目录</Strong> 自动生成并可注释以提供更多信息。
                        </FeatureText>
                      </div>
                      <img
                        alt="Stately 编辑器中的订单流程以及显示 OrderCreatedEvent、ShipmentSentEvent 和 OrderConfirmedEvent 事件的事件模式。每个事件都有各种类型的属性，包括字符串、数组、对象和布尔值。"
                        src="./assets/landing/event-schema.png"
                        height="580"
                        width="470"
                        className="rounded-md"
                      />
                    </div>
                  </Feature>
                </div>
                <Feature box>
                  <FeatureText>
                    <Strong>保存版本</Strong> 作为备份并查看你的工作历史。
                  </FeatureText>
                </Feature>

                <Feature box>
                  <FeatureText>
                    <Strong>
                      导出为 markdown 故事、Mermaid 图或 JSON 文档
                    </Strong>{' '}
                    可以复制到问题和项目文档中。
                  </FeatureText>
                </Feature>

                <Feature box>
                  <FeatureText>
                    <Strong>生成图表摘要</Strong> 以快速了解情况。
                  </FeatureText>
                </Feature>
              </div>
            </BenefitSection>
    </AnimateAwayGradient>
  );
}

function SkySection() {
  return (
    <AnimateAwayGradient animationClass="bgimage-gradient-purple">
      <BenefitSection anchorLink="deploy">
              <SectionTitle>
                <span className="text-purple-500">部署到 Stately Sky</span> 以获得即时的实时后端。
              </SectionTitle>
              <div className="grid grid-cols-1 gap-12 pt-16 lg:grid-cols-2">
                <div className="max-w-xl">
                  <FeatureText>
                    <Strong>想要保持简单吗？</Strong> 在我们的可视化编辑器中设计，然后一键部署到我们的多玩家就绪的逻辑即服务 Stately Sky。
                  </FeatureText>
                </div>
                <div className="max-w-xl">
                  <FeatureText>
                    使用我们的 SDK 发送事件，<Strong>我们会自动更新所有客户端</Strong>。
                  </FeatureText>
                </div>
              </div>

              <img
                alt="在 Stately 编辑器中显示的交通灯机器旁边是一个实时 Web 应用程序，显示了交通灯的渲染。"
                src="./assets/landing/deploy-to-sky.png"
                height="598"
                width="1024"
                className="w-full h-auto max-w-5xl mx-auto mt-32 rounded-2xl border-2 border-white/10"
              />

              <div className="flex flex-col max-w-5xl gap-4 m-auto mt-48">
                <FeatureTitle>无缝的开发者体验</FeatureTitle>
                <FeatureText>
                  针对大型云服务进行编码是繁琐的，充满样板代码，并且部署痛苦。<br />
                  低/无代码平台可能不灵活，并且需要供应商锁定。
                </FeatureText>
                <FeatureText>
                  <Strong>
                    使用 Stately Sky，只需绘制一个图表，生成一个 API 密钥，然后点击“部署”。<br />
                    它还提供可靠的导出选项，无需任何锁定。
                  </Strong>
                </FeatureText>
              </div>

              <img
                alt="一个图表显示了 Stately Studio 如何将一个 actor 部署到 Stately Sky，配置如何从 Stately Sky 发送到 Stately Sky SDK，后者又将状态和事件发送回 Stately Sky。"
                src="./assets/landing/sky-diagram.svg"
                height="139"
                width="1024"
                className="w-full max-w-5xl mx-auto mt-24"
              />

              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-36">
                <div className="grid col-span-3">
                  <Feature box>
                    <div className="max-w-3xl py-12 m-auto">
                      <FeatureText>
                        通过在 Sky 中运行状态机作为 actor，将状态图的表达性和可读性与云计算的持久性和容错性结合起来。
                      </FeatureText>
                    </div>

                    <div className="grid grid-cols-1 gap-8 pt-8 pb-8 m-auto md:grid-cols-2 lg:grid-cols-3">
                      <div className="flex gap-4">
                        <PartyPopperIcon className="mt-1 mb-4 text-purple-300" />
                        <div className="flex-1">
                          <FeatureText>
                            <Strong>多人协作</Strong> 可用于白板、文档编辑、游戏或许多其他类型的应用程序。
                          </FeatureText>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <MergeIcon className="mt-1 mb-4 text-purple-300" />
                        <div className="flex-1">
                          <FeatureText>
                            <Strong>异步工作流</Strong> 提高了在没有即时结果的操作中的效率，例如数据处理、邮件发送或 API 调用。
                          </FeatureText>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <CalendarIcon className="mt-1 mb-4 text-purple-300" />
                        <div className="flex-1">
                          <FeatureText>
                            <Strong>长时间运行的后端进程</Strong> 如医疗患者入职流程或库存管理。
                          </FeatureText>
                        </div>
                      </div>
                    </div>
                  </Feature>
                </div>
              </div>
            </BenefitSection>
    </AnimateAwayGradient>
  );
}

function BenefitSection({ anchorLink, children }) {
  return (
    <section
      id={anchorLink}
      className={classNames(
        'py-36',
        'container border-t-[0.5px] border-t-blue-900',
      )}
    >
      {children}
    </section>
  );
}

function Strong({ children }) {
  return (
    <span className="font-extrabold text-white/90 drop-shadow-sm">
      {children}
    </span>
  );
}

// Eventually maybe make all bolded text links to doc pages
// function StrongLink({ children, href = 'https://www.stately.ai/docs' }) {
//   return (
//     <a
//       href={href}
//       className="font-extrabold text-white/90 hover:text-white"
//       target="_blank"
//     >
//       {children}
//     </a>
//   );
// }

function FeatureText({
  children,
  imgSrc = '/landing/DELETE-1.png',
  imgAlt = 'TODO',
}) {
  return <p className="text-xl leading-normal text-white/60">{children}</p>;
}

function Feature({
  children,
  comingSoon,
  box,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  noPadding,
}: {
  children: ReactNode;
  comingSoon?: boolean;
  box?: boolean;
  imgSrc?: string;
  imgAlt?: string;
  imgHeight?: string;
  imgWidth?: string;
  noPadding?: boolean;
}) {
  const boxStyles = box
    ? 'bg-gradient-to-b from-gray-800/50 to-gray-800/10 border-[0.5px] shadow-md shadow-blue-900 border-blue-850 rounded-2xl'
    : '';

  const paddingStyles = noPadding ? 0 : 'py-6 px-8';
  return (
    <div
      className={classNames(
        boxStyles,
        paddingStyles,
        'flex flex-col gap-6 text-white/60 text-lg leading-normal',
      )}
    >
      {children}
      {comingSoon && <ComingSoon />}
      {imgSrc && (
        <img
          alt={imgAlt}
          src={imgSrc}
          height={imgHeight}
          width={imgWidth}
          className="rounded-xl border-[0.5px] shadow-2xl shadow-blue-900 border-blue-850 h-auto w-full mt-8"
        />
      )}
    </div>
  );
}

function AnimateAwayGradient({ animationClass, children }) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={isIntersecting ? animationClass : ''}>
      {children}
    </div>
  );
}

function FeatureTitle({ children }) {
  return (
    <h3 className="text-xl font-extrabold leading-tight md:text-2xl lg:text-3xl drop-shadow-sm text-white/90 md:leading-tight lg:leading-tight">
      {children}
    </h3>
  );
}

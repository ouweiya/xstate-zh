import Link from '@docusaurus/Link';

export function Footer() {
  return (
    <div className="bg-blue-950 pb-24 pt-72">
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl pb-16 mx-auto">
        <Newsletter />
        <DiscordCommunity />
      </section>
      <footer className="container border-t border-t-white/10">
        <AllLinks />
      </footer>
    </div>
  );
}

function AllLinks() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center pt-8 pb-16 max-w-5xl m-auto">
      <div className="mt-8">
        <a href="/">
          <img
            className="h-6 w-auto"
            src="./assets/landing/stately-logo.svg"
            alt="Stately"
            height="24"
            width="86"
          />
        </a>
        <p className="text-white/60 mt-5 text-base">&copy; 2024 Stately</p>
      </div>
      <LinkList title="产品">
              <LinkItem href="#design">功能</LinkItem>
              <LinkItem href="/docs/">文档</LinkItem>
              <LinkItem href="https://github.com/statelyai/xstate">XState</LinkItem>
              <LinkItem href="/agent/">Stately Agent</LinkItem>
              <LinkItem href="https://stately.ai/blog/tags/case-study">
                案例研究
              </LinkItem>
              <LinkItem href="/pricing/">定价</LinkItem>
            </LinkList>
            <LinkList title="公司">
              <LinkItem href="/blog/tags/changelog">更新日志</LinkItem>
              <LinkItem href="/blog/">博客</LinkItem>
              <LinkItem href="mailto:support@stately.ai">联系</LinkItem>
            </LinkList>
            <LinkList title="资源">
              <LinkItem href="/privacy/">隐私政策</LinkItem>
              <LinkItem href="/code-of-conduct/">行为准则</LinkItem>
            </LinkList>

            <LinkList title="社区">
              <LinkItem href="https://discord.gg/xstate">Discord</LinkItem>
              <LinkItem href="https://twitter.com/statelyai">Twitter</LinkItem>
              <LinkItem href="https://youtube.com/c/statelyai">YouTube</LinkItem>
              <LinkItem href="https://www.linkedin.com/company/statelyai">
                LinkedIn
              </LinkItem>
            </LinkList>
    </nav>
  );
}

function LinkList({ children, title }) {
  return (
    <div className="mt-8">
      <h4 className="text-base font-bold text-white/60 mb-4 mt-0">{title}</h4>
      <ul className="text-white/90 font-medium text-base">{children}</ul>
    </div>
  );
}

function LinkItem({ href, children }) {
  return (
    <li className="py-2">
      <a href={href}>{children}</a>
    </li>
  );
}

function Newsletter() {
  return (
    <aside>
      <h3 className="text-2xl font-black text-white/90 mb-4">
                通过电子邮件获取更新
      </h3>
      <form
        action="https://stately.ai/registry/api/newsletter/signup"
        method="post"
        target="popupwindow"
        className="embeddable-buttondown-form state"
        data-active
      >
        <label
          htmlFor="bd-email"
          className="text-base text-white/60 font-semibold"
        >
         订阅我们的新闻通讯
        </label>
        <div className="fields pt-2">
          <input
            type="email"
            name="email"
            id="bd-email"
            required
            placeholder="your@email.com"
            className="text-gray-900 bg-white/90 rounded-md px-3 py-2 text-base font-medium"
          />
          <input type="hidden" value="1" name="embed" />
          <input
            type="submit"
            className="text-blue-900 ml-2 bg-blue-300 rounded-md px-3 py-2 text-base font-medium cursor-pointer hover:bg-blue-200 shadow-sm"
            value="订阅"
          />
        </div>
      </form>
    </aside>
  );
}

function DiscordCommunity() {
  return (
        <aside>
          <h3 className="text-2xl font-black text-white/90 mb-4">
            成为友好和乐于助人的社区的一员
          </h3>
          <p className="text-white/60 font-medium">
            <a
              href="https://discord.gg/xstate"
              className="text-blue-300 hover:text-white font-bold hover:no-underline"
            >
              加入我们的 Discord
            </a>{' '}
            以提供反馈并获得支持。并参与我们的{' '}
            <a
              href="https://www.youtube.com/@Statelyai/streams"
              className="text-blue-300 hover:text-white font-bold hover:no-underline"
            >
              办公时间
            </a>{' '}
            以获取 Stately 团队的预览和公告。
          </p>
        </aside>
  );
}

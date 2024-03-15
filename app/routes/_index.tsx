import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <ul>
        <li>
          <Link
            to="/test"
            className="text-xl text-blue-600 underline"
          >
            Test
          </Link>
        </li>
        <li>
          <Link
            to="/keyboard"
            className="text-xl text-blue-600 underline"
          >
            Virtual Keyboard
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Form>
        <input type="text" />
      </Form>
      <p>It’s worth noting that as part of shipping the new viewport units in 2022, Chrome stopped resizing the layout viewport and initial containing block (ICB) when the virtual keyboard is shown. This behavior is considered the “the best default”, and it ensures that the new viewport units are consistent across browsers. This change also made the mobile web feel less janky because resizing the ICB is a costly operation. However, the virtual keyboard may still resize the layout viewport in some mobile browsers.</p>

      <p>In these two cases, the visual viewport continues to be “the rectangular section of the web browser in which the web page is rendered,” while the layout viewport becomes a larger rectangle that is only partially visible on the screen and that completely encloses the visual viewport. In all other situations, both viewports have the same size and position.</p>

      <p>One benefit of the two-viewport system is that when the user pinch-zooms and pans around the page, fixed-positioned elements don’t stick to the screen, which would almost always be a bad experience. That being said, there are valid use cases for positioning an element above the virtual keyboard (e.g., a floating action button). The CSS Working Group is currently discussing how to make this possible in CSS.</p>

      <p>CSS viewport units are based on the layout viewport, and they are unaffected by changes to the size of the visual viewport. Therefore, I will focus on the layout viewport in this article. For more information about the visual viewport, see the widely supported Visual Viewport API.</p>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function DocLayout({ eyebrow, title, subtitle, meta, toc, children, bannerClass, banner }) {
  const [activeId, setActiveId] = useState(toc?.[0]?.id ?? "");
  const contentRef = useRef(null);

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className="doc-page">
      <div className="doc-hero">
        <div className="doc-hero-inner">
          <div className="breadcrumb">
            <Link to="/">Start</Link>
            <span>/</span>
            <Link to="/#projekte">Projekte</Link>
            <span>/</span>
            <span>{title}</span>
          </div>
          <p className="doc-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="doc-subtitle">{subtitle}</p>
          {banner && <div className={`doc-banner ${bannerClass ?? ""}`}>{banner}</div>}
          <dl className="meta-grid" style={{ marginTop: banner ? 24 : 0 }}>
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="doc-body">
        <aside className="doc-toc">
          <div className="doc-toc-sticky">
            <span className="doc-toc-label">Auf dieser Seite</span>
            <ul>
              {toc.map((item) => (
                <li key={item.id} className={activeId === item.id ? "is-active" : ""}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <article className="doc-content" ref={contentRef}>
          {children}
        </article>
      </div>
    </div>
  );
}

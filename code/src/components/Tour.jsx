import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const PAD = 10;

const Tour = forwardRef(function Tour({ steps }, ref) {
  const [stepIndex, setStepIndex] = useState(-1);
  const [rect, setRect] = useState(null);
  const active = stepIndex >= 0;

  useImperativeHandle(ref, () => ({
    start: () => setStepIndex(0),
  }));

  const measure = useCallback(() => {
    if (!active) return;
    const el = document.querySelector(steps[stepIndex].selector);
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRect({
      top: r.top - PAD,
      left: r.left - PAD,
      width: r.width + PAD * 2,
      height: r.height + PAD * 2,
    });
  }, [active, stepIndex, steps]);

  useLayoutEffect(() => {
    if (!active) return;
    const el = document.querySelector(steps[stepIndex].selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    const t1 = setTimeout(measure, 200);
    const t2 = setTimeout(measure, 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, stepIndex, measure, steps]);

  useEffect(() => {
    if (!active) return;
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    const onKey = (e) => {
      if (e.key === "Escape") setStepIndex(-1);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, measure]);

  const next = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
    else setStepIndex(-1);
  };
  const prev = () => stepIndex > 0 && setStepIndex(stepIndex - 1);
  const close = () => setStepIndex(-1);

  if (!active || !rect) return active ? <div className="tour-overlay-plain" /> : null;

  const step = steps[stepIndex];
  const tooltipHeight = 210;
  const maxTop = window.innerHeight - tooltipHeight - 16;
  const tooltipTop = rect.top + rect.height + 16;
  const flip = tooltipTop > maxTop;
  const rawTop = flip ? rect.top - tooltipHeight - 16 : tooltipTop;
  const tipStyle = {
    top: Math.min(Math.max(16, rawTop), Math.max(16, maxTop)),
    left: clampLeft(rect.left),
  };

  return (
    <div className="tour-root">
      <div className="tour-blocker" onClick={(e) => e.stopPropagation()} />
      <div className="tour-veil" style={{ boxShadow: `0 0 0 9999px rgba(10,14,20,0.68)`, ...rect }} />
      <div className="tour-ring" style={rect} />
      <div className="tour-tooltip" style={tipStyle}>
        <div className="tour-step-label">
          Schritt {stepIndex + 1} / {steps.length}
        </div>
        <h4>{step.title}</h4>
        <p>{step.text}</p>
        <div className="tour-actions">
          <button className="tour-btn tour-btn-ghost" onClick={close}>
            Tour beenden
          </button>
          <div className="tour-actions-right">
            {stepIndex > 0 && (
              <button className="tour-btn" onClick={prev}>
                ← Zurück
              </button>
            )}
            <button className="tour-btn tour-btn-primary" onClick={next}>
              {stepIndex === steps.length - 1 ? "Fertig" : "Weiter →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

function clampLeft(left) {
  const max = window.innerWidth - 340;
  return Math.min(Math.max(16, left), Math.max(16, max));
}

export default Tour;

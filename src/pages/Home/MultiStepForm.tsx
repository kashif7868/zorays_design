import { useState } from "react";
import "../../assets/css/home/multiformSection.css";

// ─── Step Config ─────────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Purpose",      icon: "◎" },
  { id: 2, label: "Load",         icon: "⚡" },
  { id: 3, label: "Panels",       icon: "☀" },
  { id: 4, label: "Inverters",    icon: "⚙" },
  { id: 5, label: "Address",      icon: "📍" },
  { id: 6, label: "Introduction", icon: "🏁" },
];

// ─── Step 1 — Purpose ────────────────────────────────────────────────────────
const Step1 = ({
  data,
  onChange,
  showError,
}: {
  data: { application: string; structureType: string };
  onChange: (key: string, val: string) => void;
  showError: boolean;
}) => {
  const applications = ["Residential", "Corporate", "Industrial", "Agricultural"];
  const structures = [
    "Ground-mounted (for flat roofs)",
    "Hi-rise (for shade mitigation)",
    "Carport (for parking sheds)",
    "Grouted (for corrugated turfs)",
  ];

  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />
      <div className="msf-step-content">
        <h2 className="msf-step-title">System Design</h2>

        <div className="msf-field">
          <label className="msf-label">
            Application <span className="msf-required">*</span>
          </label>
          <div className="msf-radio-group">
            {applications.map((opt) => (
              <label key={opt} className={`msf-radio-label${data.application === opt ? " selected" : ""}`}>
                <input
                  type="radio"
                  name="application"
                  value={opt}
                  checked={data.application === opt}
                  onChange={() => onChange("application", opt)}
                />
                <span className="msf-radio-dot" />
                {opt}
              </label>
            ))}
          </div>
          {showError && !data.application && (
            <p className="msf-error">Please select an application type</p>
          )}
        </div>

        <div className="msf-field">
          <label className="msf-label">
            Structure Type <span className="msf-required">*</span>
          </label>
          <div className="msf-radio-group msf-radio-group--wrap">
            {structures.map((opt) => (
              <label key={opt} className={`msf-radio-label${data.structureType === opt ? " selected" : ""}`}>
                <input
                  type="radio"
                  name="structureType"
                  value={opt}
                  checked={data.structureType === opt}
                  onChange={() => onChange("structureType", opt)}
                />
                <span className="msf-radio-dot" />
                {opt}
              </label>
            ))}
          </div>
          {showError && !data.structureType && (
            <p className="msf-error">Please select a structure type</p>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Step 2 — Load ───────────────────────────────────────────────────────────
const Step2 = ({
  data,
  onChange,
  showError,
}: {
  data: { units: string; bill: string };
  onChange: (key: string, val: string) => void;
  showError: boolean;
}) => (
  <div className="msf-step-body">
    <div className="msf-step-accent" />
    <div className="msf-step-content">
      <h2 className="msf-step-title">Electricity Load</h2>
      <div className="msf-field">
        <label className="msf-label">Monthly Units (kWh) <span className="msf-required">*</span></label>
        <input
          className={`msf-input${showError && !data.units.trim() ? " msf-input--error" : ""}`}
          type="number"
          placeholder="e.g. 800"
          value={data.units}
          onChange={(e) => onChange("units", e.target.value)}
        />
        {showError && !data.units.trim() && <p className="msf-error">Please enter monthly units</p>}
      </div>
      <div className="msf-field">
        <label className="msf-label">Average Monthly Bill (PKR) <span className="msf-required">*</span></label>
        <input
          className={`msf-input${showError && !data.bill.trim() ? " msf-input--error" : ""}`}
          type="number"
          placeholder="e.g. 15000"
          value={data.bill}
          onChange={(e) => onChange("bill", e.target.value)}
        />
        {showError && !data.bill.trim() && <p className="msf-error">Please enter average monthly bill</p>}
      </div>
    </div>
  </div>
);

// ─── Step 3 — Panels ─────────────────────────────────────────────────────────
const Step3 = ({
  data,
  onChange,
  showError,
}: {
  data: { panelType: string };
  onChange: (key: string, val: string) => void;
  showError: boolean;
}) => {
  const panels = ["Mono PERC", "Bifacial", "Poly", "HJT (Premium)"];
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />
      <div className="msf-step-content">
        <h2 className="msf-step-title">Panel Selection</h2>
        <div className="msf-field">
          <label className="msf-label">Panel Type <span className="msf-required">*</span></label>
          <div className="msf-radio-group">
            {panels.map((opt) => (
              <label key={opt} className={`msf-radio-label${data.panelType === opt ? " selected" : ""}`}>
                <input type="radio" name="panelType" value={opt} checked={data.panelType === opt} onChange={() => onChange("panelType", opt)} />
                <span className="msf-radio-dot" />
                {opt}
              </label>
            ))}
          </div>
          {showError && !data.panelType && <p className="msf-error">Please select a panel type</p>}
        </div>
      </div>
    </div>
  );
};

// ─── Step 4 — Inverters ──────────────────────────────────────────────────────
const Step4 = ({
  data,
  onChange,
  showError,
}: {
  data: { inverterType: string };
  onChange: (key: string, val: string) => void;
  showError: boolean;
}) => {
  const inverters = ["On-Grid", "Off-Grid", "Hybrid", "Micro-Inverter"];
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />
      <div className="msf-step-content">
        <h2 className="msf-step-title">Inverter Type</h2>
        <div className="msf-field">
          <label className="msf-label">Select Inverter <span className="msf-required">*</span></label>
          <div className="msf-radio-group">
            {inverters.map((opt) => (
              <label key={opt} className={`msf-radio-label${data.inverterType === opt ? " selected" : ""}`}>
                <input type="radio" name="inverterType" value={opt} checked={data.inverterType === opt} onChange={() => onChange("inverterType", opt)} />
                <span className="msf-radio-dot" />
                {opt}
              </label>
            ))}
          </div>
          {showError && !data.inverterType && <p className="msf-error">Please select an inverter type</p>}
        </div>
      </div>
    </div>
  );
};

// ─── Step 5 — Address ────────────────────────────────────────────────────────
const Step5 = ({
  data,
  onChange,
  showError,
}: {
  data: { city: string; address: string };
  onChange: (key: string, val: string) => void;
  showError: boolean;
}) => (
  <div className="msf-step-body">
    <div className="msf-step-accent" />
    <div className="msf-step-content">
      <h2 className="msf-step-title">Installation Address</h2>
      <div className="msf-field">
        <label className="msf-label">City <span className="msf-required">*</span></label>
        <input
          className={`msf-input${showError && !data.city.trim() ? " msf-input--error" : ""}`}
          type="text"
          placeholder="e.g. Lahore"
          value={data.city}
          onChange={(e) => onChange("city", e.target.value)}
        />
        {showError && !data.city.trim() && <p className="msf-error">Please enter your city</p>}
      </div>
      <div className="msf-field">
        <label className="msf-label">Full Address <span className="msf-required">*</span></label>
        <textarea
          className={`msf-input msf-textarea${showError && !data.address.trim() ? " msf-input--error" : ""}`}
          placeholder="Street, Sector, Area..."
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
          rows={3}
        />
        {showError && !data.address.trim() && <p className="msf-error">Please enter your address</p>}
      </div>
    </div>
  </div>
);

// ─── Step 6 — Introduction ───────────────────────────────────────────────────
const Step6 = ({
  data,
  onChange,
  showError,
}: {
  data: { name: string; phone: string; email: string };
  onChange: (key: string, val: string) => void;
  showError: boolean;
}) => (
  <div className="msf-step-body">
    <div className="msf-step-accent" />
    <div className="msf-step-content">
      <h2 className="msf-step-title">Your Introduction</h2>
      <div className="msf-field">
        <label className="msf-label">Full Name <span className="msf-required">*</span></label>
        <input
          className={`msf-input${showError && !data.name.trim() ? " msf-input--error" : ""}`}
          type="text"
          placeholder="Muhammad Ali"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
        {showError && !data.name.trim() && <p className="msf-error">Please enter your full name</p>}
      </div>
      <div className="msf-field">
        <label className="msf-label">Phone Number <span className="msf-required">*</span></label>
        <input
          className={`msf-input${showError && !data.phone.trim() ? " msf-input--error" : ""}`}
          type="tel"
          placeholder="+92 300 0000000"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
        />
        {showError && !data.phone.trim() && <p className="msf-error">Please enter your phone number</p>}
      </div>
      <div className="msf-field">
        <label className="msf-label">Email Address</label>
        <input
          className="msf-input"
          type="email"
          placeholder="you@email.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>
    </div>
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    application: "",
    structureType: "",
    units: "",
    bill: "",
    panelType: "",
    inverterType: "",
    city: "",
    address: "",
    name: "",
    phone: "",
    email: "",
  });

  const update = (key: string, val: string) =>
    setFormData((prev) => ({ ...prev, [key]: val }));

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: return !!formData.application && !!formData.structureType;
      case 2: return !!formData.units.trim() && !!formData.bill.trim();
      case 3: return !!formData.panelType;
      case 4: return !!formData.inverterType;
      case 5: return !!formData.city.trim() && !!formData.address.trim();
      case 6: return !!formData.name.trim() && !!formData.phone.trim();
      default: return true;
    }
  };

  const triggerShake = () => {
    setShowError(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const next = () => {
    if (!isStepValid(currentStep)) { triggerShake(); return; }
    setShowError(false);
    if (currentStep < STEPS.length) setCurrentStep((s) => s + 1);
  };

  const prev = () => {
    setShowError(false);
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = () => {
    if (!isStepValid(currentStep)) { triggerShake(); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="msf-section" id="multi-step-form">
        <div className="msf-wrapper msf-success">
          <div className="msf-success-icon">✓</div>
          <h2>Thank You, {formData.name || "Friend"}!</h2>
          <p>Our solar expert will contact you within 24 hours.</p>
          <button className="msf-btn-next" onClick={() => { setSubmitted(false); setCurrentStep(1); setShowError(false); }}>
            Submit Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="msf-section" id="multi-step-form">
      <div className="msf-wrapper">

        {/* ── Stepper ── */}
        <div className="msf-stepper">
          {STEPS.map((step, idx) => {
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            return (
              <div key={step.id} className="msf-stepper__item">
                {idx > 0 && (
                  <div className={`msf-connector${isCompleted || isActive ? " filled" : ""}`} />
                )}
                <button
                  className={`msf-step-circle${isActive ? " active" : ""}${isCompleted ? " completed" : ""}`}
                  onClick={() => isCompleted && setCurrentStep(step.id)}
                  disabled={!isCompleted && !isActive}
                  aria-label={step.label}
                >
                  {isCompleted ? <span className="msf-check">✓</span> : step.id}
                </button>
                <span className={`msf-step-label${isActive ? " active" : ""}${isCompleted ? " done" : ""}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Step Content ── */}
        <div className={`msf-form-card${shake ? " msf-shake" : ""}`} key={currentStep}>
          {currentStep === 1 && (
            <Step1 data={{ application: formData.application, structureType: formData.structureType }} onChange={update} showError={showError} />
          )}
          {currentStep === 2 && (
            <Step2 data={{ units: formData.units, bill: formData.bill }} onChange={update} showError={showError} />
          )}
          {currentStep === 3 && (
            <Step3 data={{ panelType: formData.panelType }} onChange={update} showError={showError} />
          )}
          {currentStep === 4 && (
            <Step4 data={{ inverterType: formData.inverterType }} onChange={update} showError={showError} />
          )}
          {currentStep === 5 && (
            <Step5 data={{ city: formData.city, address: formData.address }} onChange={update} showError={showError} />
          )}
          {currentStep === 6 && (
            <Step6 data={{ name: formData.name, phone: formData.phone, email: formData.email }} onChange={update} showError={showError} />
          )}
        </div>

        {/* ── Navigation ── */}
        <div className="msf-nav">
          {currentStep > 1 && (
            <button className="msf-btn-prev" onClick={prev}>
              ← Previous
            </button>
          )}
          {currentStep < STEPS.length ? (
            <button
              className={`msf-btn-next${!isStepValid(currentStep) ? " msf-btn--disabled" : ""}`}
              onClick={next}
            >
              Next Step →
            </button>
          ) : (
            <button
              className={`msf-btn-submit${!isStepValid(currentStep) ? " msf-btn--disabled" : ""}`}
              onClick={handleSubmit}
            >
              Submit Quote ✓
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default MultiStepForm;
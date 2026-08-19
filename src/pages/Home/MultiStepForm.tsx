import { useState } from "react";
import "../../assets/css/home/multiformSection.css";

import {
  SOLAR_QUOTE_STEPS,
  APPLICATION_TYPES,
  STRUCTURE_TYPES,
  SYSTEM_TYPES,
  BATTERY_BANKS,
  PV_BRANDS,
  PV_BRAND_NOTE,
  THREE_PHASE_INVERTER_BRANDS,
  CONTACT_ACCEPTANCE_TEXT,
  CONTACT_HELP_TEXT,
  INTRODUCTION_FIELDS,
  QUOTE_STATUS_OPTIONS,
  REMARK_OPTIONS,
  FORM_TEXT,
  INITIAL_SOLAR_QUOTE_FORM,
  type SolarQuoteFormState,
} from "../../Data/home/solarQuoteFormData";

type StringField =
  | "application"
  | "structureType"
  | "load"
  | "systemType"
  | "batteryBank"
  | "city"
  | "email"
  | "whatsapp"
  | "name"
  | "existingQuote"
  | "projectTimelineWeeks"
  | "specialRequirements";

type ArrayField = "pvBrands" | "inverterBrands" | "remarks";


// ======================================================
// STEP 1 — PURPOSE
// ======================================================

const StepPurpose = ({
  data,
  updateString,
  showError,
}: {
  data: SolarQuoteFormState;
  updateString: (key: StringField, value: string) => void;
  showError: boolean;
}) => {
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />

      <div className="msf-step-content">
        <h2 className="msf-step-title">{FORM_TEXT.purposeTitle}</h2>

        <div className="msf-field">
          <label className="msf-label">
            Application <span className="msf-required">*</span>
          </label>

          <div className="msf-radio-group">
            {APPLICATION_TYPES.map((option) => (
              <label
                key={option.id}
                className={`msf-radio-label ${
                  data.application === option.id ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="application"
                  value={option.id}
                  checked={data.application === option.id}
                  onChange={() => updateString("application", option.id)}
                />

                <span className="msf-radio-dot" />

                {option.label}
              </label>
            ))}
          </div>

          {showError && !data.application && (
            <p className="msf-error">
              Please select an application type.
            </p>
          )}
        </div>

        <div className="msf-field">
          <label className="msf-label">
            Structure Type <span className="msf-required">*</span>
          </label>

          <div className="msf-radio-group msf-radio-group--wrap">
            {STRUCTURE_TYPES.map((option) => (
              <label
                key={option.id}
                className={`msf-radio-label ${
                  data.structureType === option.id ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="structureType"
                  value={option.id}
                  checked={data.structureType === option.id}
                  onChange={() =>
                    updateString("structureType", option.id)
                  }
                />

                <span className="msf-radio-dot" />

                {option.label}
              </label>
            ))}
          </div>

          {showError && !data.structureType && (
            <p className="msf-error">
              Please select a structure type.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};


// ======================================================
// STEP 2 — LOAD
// ======================================================

const StepLoad = ({
  data,
  updateString,
  showError,
}: {
  data: SolarQuoteFormState;
  updateString: (key: StringField, value: string) => void;
  showError: boolean;
}) => {
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />

      <div className="msf-step-content">
        <h2 className="msf-step-title">{FORM_TEXT.loadTitle}</h2>

        <div className="msf-field">
          <label className="msf-label">
            Load <span className="msf-required">*</span>
          </label>

          <input
            type="number"
            className={`msf-input ${
              showError && !data.load.trim()
                ? "msf-input--error"
                : ""
            }`}
            value={data.load}
            placeholder="e.g. 15000"
            onChange={(e) =>
              updateString("load", e.target.value)
            }
          />

          {showError && !data.load.trim() && (
            <p className="msf-error">
              Please enter your electricity load.
            </p>
          )}
        </div>

        <div className="msf-field">
          <label className="msf-label">
            System Type <span className="msf-required">*</span>
          </label>

          <div className="msf-radio-group">
            {SYSTEM_TYPES.map((option) => (
              <label
                key={option.id}
                className={`msf-radio-label ${
                  data.systemType === option.id ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="systemType"
                  value={option.id}
                  checked={data.systemType === option.id}
                  onChange={() =>
                    updateString("systemType", option.id)
                  }
                />

                <span className="msf-radio-dot" />

                {option.label}
              </label>
            ))}
          </div>

          {showError && !data.systemType && (
            <p className="msf-error">
              Please select a system type.
            </p>
          )}
        </div>

        {data.systemType === "hybrid" && (
          <div className="msf-field">
            <label className="msf-label">Battery Bank</label>

            <div className="msf-option-grid">
              {BATTERY_BANKS.map((battery) => (
                <label
                  key={battery.id}
                  className={`msf-radio-label ${
                    data.batteryBank === battery.id
                      ? "selected"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="batteryBank"
                    value={battery.id}
                    checked={data.batteryBank === battery.id}
                    onChange={() =>
                      updateString("batteryBank", battery.id)
                    }
                  />

                  <span className="msf-radio-dot" />

                  {battery.label}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// ======================================================
// STEP 3 — PANELS
// ======================================================

const StepPanels = ({
  data,
  toggleArrayValue,
  showError,
}: {
  data: SolarQuoteFormState;
  toggleArrayValue: (
    key: ArrayField,
    value: string
  ) => void;
  showError: boolean;
}) => {
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />

      <div className="msf-step-content">
        <h2 className="msf-step-title">{FORM_TEXT.panelsTitle}</h2>

        <div className="msf-field">
          <label className="msf-label">PV Brands</label>

          <div className="msf-checkbox-list">
            {PV_BRANDS.map((brand) => (
              <label
                key={brand.id}
                className={`msf-checkbox-label ${
                  data.pvBrands.includes(brand.id)
                    ? "selected"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={data.pvBrands.includes(brand.id)}
                  onChange={() =>
                    toggleArrayValue("pvBrands", brand.id)
                  }
                />

                <span className="msf-checkbox-box" />

                <span>
                  {brand.name}

                  {"note" in brand && brand.note
                    ? ` (${brand.note})`
                    : ""}
                </span>
              </label>
            ))}
          </div>

          {showError && data.pvBrands.length === 0 && (
            <p className="msf-error">
              Please select at least one PV brand.
            </p>
          )}

          <p className="msf-help-text">{PV_BRAND_NOTE}</p>
        </div>
      </div>
    </div>
  );
};


// ======================================================
// STEP 4 — INVERTERS
// ======================================================

const StepInverters = ({
  data,
  toggleArrayValue,
  showError,
}: {
  data: SolarQuoteFormState;
  toggleArrayValue: (
    key: ArrayField,
    value: string
  ) => void;
  showError: boolean;
}) => {
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />

      <div className="msf-step-content">
        <h2 className="msf-step-title">
          {FORM_TEXT.inverterTitle}
        </h2>

        <div className="msf-field">
          <label className="msf-label">
            {FORM_TEXT.inverterSubtitle}
          </label>

          <div className="msf-option-grid">
            {THREE_PHASE_INVERTER_BRANDS.map((brand) => {
              const suffix =
                "note" in brand && brand.note
                  ? brand.note
                  : "country" in brand && brand.country
                    ? brand.country
                    : "";

              return (
                <label
                  key={brand.id}
                  className={`msf-checkbox-label ${
                    data.inverterBrands.includes(brand.id)
                      ? "selected"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={data.inverterBrands.includes(
                      brand.id
                    )}
                    onChange={() =>
                      toggleArrayValue(
                        "inverterBrands",
                        brand.id
                      )
                    }
                  />

                  <span className="msf-checkbox-box" />

                  <span>
                    {brand.name}
                    {suffix ? ` (${suffix})` : ""}
                  </span>
                </label>
              );
            })}
          </div>

          {showError &&
            data.inverterBrands.length === 0 && (
              <p className="msf-error">
                Please select at least one inverter brand.
              </p>
            )}
        </div>
      </div>
    </div>
  );
};


// ======================================================
// STEP 5 — ADDRESS
// ======================================================

const StepAddress = ({
  data,
  updateString,
  showError,
}: {
  data: SolarQuoteFormState;
  updateString: (key: StringField, value: string) => void;
  showError: boolean;
}) => {
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />

      <div className="msf-step-content">
        <h2 className="msf-step-title">
          {FORM_TEXT.addressTitle}
        </h2>

        <div className="msf-field">
          <label className="msf-label">
            Address (City){" "}
            <span className="msf-required">*</span>
          </label>

          <input
            type="text"
            className={`msf-input ${
              showError && !data.city.trim()
                ? "msf-input--error"
                : ""
            }`}
            placeholder="e.g. Lahore"
            value={data.city}
            onChange={(e) =>
              updateString("city", e.target.value)
            }
          />

          {showError && !data.city.trim() && (
            <p className="msf-error">
              Please enter installation city.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};


// ======================================================
// STEP 6 — CONTACT
// ======================================================

const StepContact = ({
  data,
  updateString,
  updateBoolean,
  showError,
}: {
  data: SolarQuoteFormState;
  updateString: (key: StringField, value: string) => void;
  updateBoolean: (
    key: "marketingConsent",
    value: boolean
  ) => void;
  showError: boolean;
}) => {
  return (
    <div className="msf-step-body">
      <div className="msf-step-accent" />

      <div className="msf-step-content">
        <p className="msf-intro-text">
          {CONTACT_HELP_TEXT}
        </p>

        <h2 className="msf-step-title">
          {FORM_TEXT.contactTitle}
        </h2>

        <div className="msf-field">
          <label className="msf-label">
            E-mail <span className="msf-required">*</span>
          </label>

          <input
            type="email"
            className={`msf-input ${
              showError && !data.email.trim()
                ? "msf-input--error"
                : ""
            }`}
            placeholder="example@email.com"
            value={data.email}
            onChange={(e) =>
              updateString("email", e.target.value)
            }
          />

          {showError && !data.email.trim() && (
            <p className="msf-error">
              Please enter your email address.
            </p>
          )}
        </div>

        <div className="msf-field">
          <label className="msf-label">
            WhatsApp <span className="msf-required">*</span>
          </label>

          <input
            type="tel"
            className={`msf-input ${
              showError && !data.whatsapp.trim()
                ? "msf-input--error"
                : ""
            }`}
            placeholder="+92 300 1234567"
            value={data.whatsapp}
            onChange={(e) =>
              updateString("whatsapp", e.target.value)
            }
          />

          {showError && !data.whatsapp.trim() && (
            <p className="msf-error">
              Please enter your WhatsApp number.
            </p>
          )}
        </div>

        <div className="msf-field">
          <label className="msf-label">Acceptance</label>

          <label className="msf-checkbox-label">
            <input
              type="checkbox"
              checked={data.marketingConsent}
              onChange={(e) =>
                updateBoolean(
                  "marketingConsent",
                  e.target.checked
                )
              }
            />

            <span className="msf-checkbox-box" />

            <span>{CONTACT_ACCEPTANCE_TEXT}</span>
          </label>
        </div>
      </div>
    </div>
  );
};


// ======================================================
// STEP 7 — INTRODUCTION
// ======================================================

const StepIntroduction = ({
  data,
  updateString,
  toggleArrayValue,
  showError,
  showSummary,
  setShowSummary,
}: {
  data: SolarQuoteFormState;
  updateString: (key: StringField, value: string) => void;
  toggleArrayValue: (
    key: ArrayField,
    value: string
  ) => void;
  showError: boolean;
  showSummary: boolean;
  setShowSummary: (value: boolean) => void;
}) => {
  return (
    <>
      <div className="msf-step-body">
        <div className="msf-step-accent" />

        <div className="msf-step-content">
          <h2 className="msf-step-title">
            {FORM_TEXT.introductionTitle}
          </h2>

          <div className="msf-field">
            <label className="msf-label">
              {INTRODUCTION_FIELDS.name.label}{" "}
              <span className="msf-required">*</span>
            </label>

            <input
              type="text"
              className={`msf-input ${
                showError && !data.name.trim()
                  ? "msf-input--error"
                  : ""
              }`}
              placeholder={
                INTRODUCTION_FIELDS.name.placeholder
              }
              value={data.name}
              onChange={(e) =>
                updateString("name", e.target.value)
              }
            />

            {showError && !data.name.trim() && (
              <p className="msf-error">
                Please enter your name.
              </p>
            )}
          </div>

          <div className="msf-field">
            <label className="msf-label">
              Do you already have a quote?
            </label>

            <select
              className="msf-input"
              value={data.existingQuote}
              onChange={(e) =>
                updateString(
                  "existingQuote",
                  e.target.value
                )
              }
            >
              {QUOTE_STATUS_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={
                    "disabled" in option
                      ? option.disabled
                      : false
                  }
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="msf-field">
            <label className="msf-label">
              {INTRODUCTION_FIELDS.timeline.label}
            </label>

            <input
              type="number"
              min="1"
              className="msf-input"
              placeholder={
                INTRODUCTION_FIELDS.timeline.placeholder
              }
              value={data.projectTimelineWeeks}
              onChange={(e) =>
                updateString(
                  "projectTimelineWeeks",
                  e.target.value
                )
              }
            />
          </div>

          <div className="msf-field">
            <label className="msf-label">Remarks</label>

            <div className="msf-checkbox-list">
              {REMARK_OPTIONS.map((remark) => (
                <label
                  key={remark.id}
                  className="msf-checkbox-label"
                >
                  <input
                    type="checkbox"
                    checked={data.remarks.includes(
                      remark.id
                    )}
                    onChange={() =>
                      toggleArrayValue(
                        "remarks",
                        remark.id
                      )
                    }
                  />

                  <span className="msf-checkbox-box" />

                  <span>{remark.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="msf-field">
            <label className="msf-label">
              {
                INTRODUCTION_FIELDS.specialRequirements
                  .label
              }
            </label>

            <textarea
              rows={4}
              className="msf-input msf-textarea"
              placeholder={
                INTRODUCTION_FIELDS.specialRequirements
                  .placeholder
              }
              value={data.specialRequirements}
              onChange={(e) =>
                updateString(
                  "specialRequirements",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="msf-summary-toggle"
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? "Hide Summary" : FORM_TEXT.showSummaryButton}
      </button>

      {showSummary && (
        <FormSummary data={data} />
      )}
    </>
  );
};


// ======================================================
// SUMMARY
// ======================================================

const FormSummary = ({
  data,
}: {
  data: SolarQuoteFormState;
}) => {
  const application = APPLICATION_TYPES.find(
    (item) => item.id === data.application
  )?.label;

  const structure = STRUCTURE_TYPES.find(
    (item) => item.id === data.structureType
  )?.label;

  const systemType = SYSTEM_TYPES.find(
    (item) => item.id === data.systemType
  )?.label;

  const battery = BATTERY_BANKS.find(
    (item) => item.id === data.batteryBank
  )?.label;

  const panelLabels = data.pvBrands
    .map(
      (id) =>
        PV_BRANDS.find((item) => item.id === id)?.name
    )
    .filter(Boolean)
    .join(", ");

  const inverterLabels = data.inverterBrands
    .map(
      (id) =>
        THREE_PHASE_INVERTER_BRANDS.find(
          (item) => item.id === id
        )?.name
    )
    .filter(Boolean)
    .join(", ");

  return (
    <div className="msf-summary">
      <h3>Quote Summary</h3>

      <div className="msf-summary-grid">
        <div>
          <span>Application</span>
          <strong>{application || "-"}</strong>
        </div>

        <div>
          <span>Structure</span>
          <strong>{structure || "-"}</strong>
        </div>

        <div>
          <span>Load</span>
          <strong>{data.load || "-"}</strong>
        </div>

        <div>
          <span>System Type</span>
          <strong>{systemType || "-"}</strong>
        </div>

        {data.systemType === "hybrid" && (
          <div>
            <span>Battery</span>
            <strong>{battery || "-"}</strong>
          </div>
        )}

        <div>
          <span>PV Brands</span>
          <strong>{panelLabels || "-"}</strong>
        </div>

        <div>
          <span>Inverters</span>
          <strong>{inverterLabels || "-"}</strong>
        </div>

        <div>
          <span>City</span>
          <strong>{data.city || "-"}</strong>
        </div>

        <div>
          <span>Email</span>
          <strong>{data.email || "-"}</strong>
        </div>

        <div>
          <span>WhatsApp</span>
          <strong>{data.whatsapp || "-"}</strong>
        </div>

        <div>
          <span>Name</span>
          <strong>{data.name || "-"}</strong>
        </div>

        <div>
          <span>Timeline</span>
          <strong>
            {data.projectTimelineWeeks
              ? `${data.projectTimelineWeeks} weeks`
              : "-"}
          </strong>
        </div>
      </div>
    </div>
  );
};


// ======================================================
// MAIN COMPONENT
// ======================================================

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] =
    useState<SolarQuoteFormState>(
      INITIAL_SOLAR_QUOTE_FORM
    );

  const [showError, setShowError] = useState(false);
  const [shake, setShake] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);


  // ====================================================
  // STATE HELPERS
  // ====================================================

  const updateString = (
    key: StringField,
    value: string
  ) => {
    setFormData((prev) => {
      const next = {
        ...prev,
        [key]: value,
      };

      if (
        key === "systemType" &&
        value === "on-grid"
      ) {
        next.batteryBank = "";
      }

      return next;
    });
  };


  const updateBoolean = (
    key: "marketingConsent",
    value: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };


  const toggleArrayValue = (
    key: ArrayField,
    value: string
  ) => {
    setFormData((prev) => {
      const values = prev[key];

      const updatedValues = values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];

      return {
        ...prev,
        [key]: updatedValues,
      };
    });
  };


  // ====================================================
  // VALIDATION
  // ====================================================

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return Boolean(
          formData.application &&
            formData.structureType
        );

      case 2:
        return Boolean(
          formData.load.trim() &&
            formData.systemType &&
            (formData.systemType !== "hybrid" ||
              formData.batteryBank)
        );

      case 3:
        return formData.pvBrands.length > 0;

      case 4:
        return formData.inverterBrands.length > 0;

      case 5:
        return Boolean(formData.city.trim());

      case 6:
        return Boolean(
          formData.email.trim() &&
            formData.whatsapp.trim()
        );

      case 7:
        return Boolean(formData.name.trim());

      default:
        return true;
    }
  };


  const triggerError = () => {
    setShowError(true);
    setShake(true);

    window.setTimeout(() => {
      setShake(false);
    }, 450);
  };


  // ====================================================
  // NAVIGATION
  // ====================================================

  const handleNext = () => {
    if (!isStepValid(currentStep)) {
      triggerError();
      return;
    }

    setShowError(false);
    setShowSummary(false);

    setCurrentStep((prev) =>
      Math.min(
        prev + 1,
        SOLAR_QUOTE_STEPS.length
      )
    );

    window.setTimeout(() => {
      document
        .getElementById("multi-step-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };


  const handlePrevious = () => {
    setShowError(false);
    setShowSummary(false);

    setCurrentStep((prev) =>
      Math.max(prev - 1, 1)
    );
  };


  const handleStepClick = (stepId: number) => {
    if (stepId >= currentStep) return;

    setShowError(false);
    setShowSummary(false);
    setCurrentStep(stepId);
  };


  // ====================================================
  // SUBMIT
  // ====================================================

  const handleSubmit = () => {
    if (!isStepValid(currentStep)) {
      triggerError();
      return;
    }

    console.log(
      "Solar Quote Form Submission:",
      formData
    );

    setSubmitted(true);
  };


  const resetForm = () => {
    setFormData(INITIAL_SOLAR_QUOTE_FORM);
    setCurrentStep(1);
    setSubmitted(false);
    setShowError(false);
    setShowSummary(false);
  };


  // ====================================================
  // SUCCESS SCREEN
  // ====================================================

  if (submitted) {
    return (
      <section
        className="msf-section"
        id="multi-step-form"
      >
        <div className="msf-wrapper">
          <div className="msf-success">
            <div className="msf-success-icon">✓</div>

            <span className="msf-success-eyebrow">
              Solar Assessment Submitted
            </span>

            <h2>
              Thank You,{" "}
              {formData.name || "Valued Customer"}
            </h2>

            <p>
              Your solar requirements have been received.
              Our team will review the information and
              contact you through the details provided.
            </p>

            <button
              type="button"
              className="msf-btn-next"
              onClick={resetForm}
            >
              Submit Another Assessment
            </button>
          </div>
        </div>
      </section>
    );
  }


  // ====================================================
  // RENDER
  // ====================================================

  return (
    <section
      className="msf-section"
      id="multi-step-form"
    >
      <div className="msf-wrapper">

        {/* ============================================= */}
        {/* STEPPER */}
        {/* ============================================= */}

        <div className="msf-stepper">
          {SOLAR_QUOTE_STEPS.map((step, index) => {
            const completed =
              currentStep > step.id;

            const active =
              currentStep === step.id;

            return (
              <div
                key={step.id}
                className="msf-stepper__item"
              >
                {index > 0 && (
                  <div
                    className={`msf-connector ${
                      completed || active
                        ? "filled"
                        : ""
                    }`}
                  />
                )}

                <button
                  type="button"
                  className={[
                    "msf-step-circle",
                    active ? "active" : "",
                    completed ? "completed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() =>
                    handleStepClick(step.id)
                  }
                  disabled={
                    !completed && !active
                  }
                >
                  {completed ? "✓" : step.id}
                </button>

                <span
                  className={[
                    "msf-step-label",
                    active ? "active" : "",
                    completed ? "done" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>


        {/* ============================================= */}
        {/* FORM CARD */}
        {/* ============================================= */}

        <div
          className={`msf-form-card ${
            shake ? "msf-shake" : ""
          }`}
          key={currentStep}
        >
          {currentStep === 1 && (
            <StepPurpose
              data={formData}
              updateString={updateString}
              showError={showError}
            />
          )}

          {currentStep === 2 && (
            <StepLoad
              data={formData}
              updateString={updateString}
              showError={showError}
            />
          )}

          {currentStep === 3 && (
            <StepPanels
              data={formData}
              toggleArrayValue={toggleArrayValue}
              showError={showError}
            />
          )}

          {currentStep === 4 && (
            <StepInverters
              data={formData}
              toggleArrayValue={toggleArrayValue}
              showError={showError}
            />
          )}

          {currentStep === 5 && (
            <StepAddress
              data={formData}
              updateString={updateString}
              showError={showError}
            />
          )}

          {currentStep === 6 && (
            <StepContact
              data={formData}
              updateString={updateString}
              updateBoolean={updateBoolean}
              showError={showError}
            />
          )}

          {currentStep === 7 && (
            <StepIntroduction
              data={formData}
              updateString={updateString}
              toggleArrayValue={toggleArrayValue}
              showError={showError}
              showSummary={showSummary}
              setShowSummary={setShowSummary}
            />
          )}
        </div>


        {/* ============================================= */}
        {/* NAVIGATION */}
        {/* ============================================= */}

        <div className="msf-nav">
          {currentStep > 1 && (
            <button
              type="button"
              className="msf-btn-prev"
              onClick={handlePrevious}
            >
              ← {FORM_TEXT.previousButton}
            </button>
          )}

          {currentStep <
          SOLAR_QUOTE_STEPS.length ? (
            <button
              type="button"
              className="msf-btn-next"
              onClick={handleNext}
            >
              {FORM_TEXT.nextButton} →
            </button>
          ) : (
            <button
              type="button"
              className="msf-btn-submit"
              onClick={handleSubmit}
            >
              {FORM_TEXT.submitButton} ✓
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Mail,
  MapPin,
  Phone,
  UserRound,
  WalletCards,
} from "lucide-react";

import "../../../assets/css/solarFinancing/solarFinancingForm.css";

import {
  solarFinancingFormData,
  solarFinancingRequirements,
} from "../../../Data/SolarFinancing/solarFinancingData";

type FinancingFormState = {
  name: string;
  profession: string;
  monthlyIncome: string;
  email: string;
  cellNumber: string;
  telephone: string;
  address: string;
};

const initialFormState: FinancingFormState = {
  name: "",
  profession: "",
  monthlyIncome: "",
  email: "",
  cellNumber: "",
  telephone: "",
  address: "",
};

const SolarFinancingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] =
    useState<FinancingFormState>(initialFormState);

  const handleChange = (
    name: keyof FinancingFormState,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) =>
      Math.min(
        prev + 1,
        solarFinancingFormData.steps.length - 1
      )
    );
  };

  const previousStep = () => {
    setCurrentStep((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  const renderFieldIcon = (name: string) => {
    if (name === "email") {
      return <Mail size={15} />;
    }

    if (
      name === "cellNumber" ||
      name === "telephone"
    ) {
      return <Phone size={15} />;
    }

    if (name === "address") {
      return <MapPin size={15} />;
    }

    if (
      name === "profession" ||
      name === "name"
    ) {
      return <UserRound size={15} />;
    }

    if (name === "monthlyIncome") {
      return <WalletCards size={15} />;
    }

    return <Building2 size={15} />;
  };

  const isLastStep =
    currentStep ===
    solarFinancingFormData.steps.length - 1;

  return (
    <section
      id="solar-financing-form"
      className="sf-form-section"
    >
      <div className="sf-form-container">
        <div className="sf-form-header">
          <span className="sf-form-eyebrow">
            <BadgeCheck size={14} />
            {solarFinancingFormData.eyebrow}
          </span>

          <h2>
            {solarFinancingFormData.title}
            <span>
              {solarFinancingFormData.highlightedTitle}
            </span>
          </h2>

          <p>
            {solarFinancingFormData.description}
          </p>
        </div>

        <div className="sf-form-stepper">
          {solarFinancingFormData.steps.map(
            (step, index) => {
              const isActive =
                currentStep === index;

              const isCompleted =
                currentStep > index;

              return (
                <div
                  className="sf-form-step"
                  key={step.id}
                >
                  {index > 0 && (
                    <span
                      className={`sf-form-step-line ${
                        isCompleted || isActive
                          ? "active"
                          : ""
                      }`}
                    />
                  )}

                  <button
                    type="button"
                    className={`sf-form-step-circle ${
                      isActive
                        ? "active"
                        : ""
                    } ${
                      isCompleted
                        ? "completed"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        isCompleted ||
                        index <= currentStep
                      ) {
                        setCurrentStep(index);
                      }
                    }}
                  >
                    {isCompleted ? (
                      <Check size={17} />
                    ) : (
                      index + 1
                    )}
                  </button>

                  <span
                    className={`sf-form-step-label ${
                      isActive ||
                      isCompleted
                        ? "active"
                        : ""
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            }
          )}
        </div>

        <div className="sf-form-card">
          <div className="sf-form-accent" />

          <div className="sf-form-content">
            {currentStep === 0 && (
              <>
                <div className="sf-form-card-heading">
                  <span>
                    <Building2 size={18} />
                  </span>

                  <div>
                    <h3>Bank Requirements</h3>
                    <p>
                      Enter your basic financing
                      profile.
                    </p>
                  </div>
                </div>

                <div className="sf-form-fields">
                  {solarFinancingRequirements
                    .filter((field) =>
                      [
                        "name",
                        "profession",
                        "monthlyIncome",
                      ].includes(field.name)
                    )
                    .map((field) => (
                      <label
                        className="sf-form-field"
                        key={field.id}
                      >
                        <span className="sf-form-label">
                          {field.label}

                          {field.required && (
                            <em>*</em>
                          )}
                        </span>

                        <div className="sf-form-input-wrap">
                          <span>
                            {renderFieldIcon(
                              field.name
                            )}
                          </span>

                          <input
                            type={field.type}
                            placeholder={
                              field.placeholder
                            }
                            value={
                              formData[
                                field.name as keyof FinancingFormState
                              ]
                            }
                            onChange={(e) =>
                              handleChange(
                                field.name as keyof FinancingFormState,
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </label>
                    ))}
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <div className="sf-form-card-heading">
                  <span>
                    <Phone size={18} />
                  </span>

                  <div>
                    <h3>Contact Information</h3>
                    <p>
                      Tell us how we can reach you.
                    </p>
                  </div>
                </div>

                <div className="sf-form-fields">
                  {solarFinancingRequirements
                    .filter((field) =>
                      [
                        "email",
                        "cellNumber",
                        "telephone",
                      ].includes(field.name)
                    )
                    .map((field) => (
                      <label
                        className="sf-form-field"
                        key={field.id}
                      >
                        <span className="sf-form-label">
                          {field.label}

                          {field.required && (
                            <em>*</em>
                          )}
                        </span>

                        <div className="sf-form-input-wrap">
                          <span>
                            {renderFieldIcon(
                              field.name
                            )}
                          </span>

                          <input
                            type={field.type}
                            placeholder={
                              field.placeholder
                            }
                            value={
                              formData[
                                field.name as keyof FinancingFormState
                              ]
                            }
                            onChange={(e) =>
                              handleChange(
                                field.name as keyof FinancingFormState,
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </label>
                    ))}
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="sf-form-card-heading">
                  <span>
                    <MapPin size={18} />
                  </span>

                  <div>
                    <h3>Installation Address</h3>
                    <p>
                      Share the project location.
                    </p>
                  </div>
                </div>

                <div className="sf-form-fields">
                  {solarFinancingRequirements
                    .filter(
                      (field) =>
                        field.name === "address"
                    )
                    .map((field) => (
                      <label
                        className="sf-form-field"
                        key={field.id}
                      >
                        <span className="sf-form-label">
                          {field.label}

                          {field.required && (
                            <em>*</em>
                          )}
                        </span>

                        <div className="sf-form-input-wrap">
                          <span>
                            {renderFieldIcon(
                              field.name
                            )}
                          </span>

                          <input
                            type={field.type}
                            placeholder={
                              field.placeholder
                            }
                            value={
                              formData.address
                            }
                            onChange={(e) =>
                              handleChange(
                                "address",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </label>
                    ))}
                </div>

                <div className="sf-form-review">
                  <strong>
                    Financing Profile Ready
                  </strong>

                  <p>
                    Your information will later be
                    submitted to the financing API
                    once backend integration is
                    enabled.
                  </p>
                </div>
              </>
            )}

            <div className="sf-form-note">
              <BadgeCheck size={15} />
              <p>
                {solarFinancingFormData.financeNote}
              </p>
            </div>
          </div>
        </div>

        <div className="sf-form-navigation">
          {currentStep > 0 && (
            <button
              type="button"
              className="sf-form-prev"
              onClick={previousStep}
            >
              <ArrowLeft size={15} />
              Previous
            </button>
          )}

          {!isLastStep ? (
            <button
              type="button"
              className="sf-form-next"
              onClick={nextStep}
            >
              Next Step
              <ArrowRight size={15} />
            </button>
          ) : (
            <button
              type="button"
              className="sf-form-submit"
              onClick={() => {
                console.log(
                  "Solar financing form:",
                  formData
                );
              }}
            >
              Submit Application
              <ArrowRight size={15} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolarFinancingForm;
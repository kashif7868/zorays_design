import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Mail,
  MapPin,
  Phone,
  Sprout,
  UserRound,
} from "lucide-react";

import "../../../assets/css/solarAgriculture/solarAgricultureOverview.css";

import {
  solarAgricultureFormFields,
  solarAgricultureOverviewData,
} from "../../../Data/SolarAgriculture/solarAgricultureData";

type AgricultureFormState = {
  name: string;
  email: string;
  cellNumber: string;
  telephone: string;
  address: string;
  city: string;
};

const initialFormState: AgricultureFormState = {
  name: "",
  email: "",
  cellNumber: "",
  telephone: "",
  address: "",
  city: "",
};

const SolarAgricultureOverview = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] =
    useState<AgricultureFormState>(initialFormState);

  const handleChange = (
    name: keyof AgricultureFormState,
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
        solarAgricultureOverviewData.steps.length - 1
      )
    );
  };

  const renderIcon = (name: string) => {
    if (name === "email") {
      return <Mail size={15} />;
    }

    if (
      name === "cellNumber" ||
      name === "telephone"
    ) {
      return <Phone size={15} />;
    }

    if (
      name === "address" ||
      name === "city"
    ) {
      return <MapPin size={15} />;
    }

    return <UserRound size={15} />;
  };

  return (
    <section className="sa-overview-section">
      <div className="sa-overview-container">

        <div className="sa-overview-header">
          <span className="sa-overview-eyebrow">
            <Sprout size={14} />
            {solarAgricultureOverviewData.eyebrow}
          </span>

          <h1>
            {solarAgricultureOverviewData.title}

            <span>
              {solarAgricultureOverviewData.highlightedTitle}
            </span>
          </h1>

          <p>
            {solarAgricultureOverviewData.description}
          </p>

          <p className="sa-overview-secondary">
            {solarAgricultureOverviewData.secondaryText}
          </p>
        </div>

        <div className="sa-overview-stepper">
          {solarAgricultureOverviewData.steps.map(
            (step, index) => {
              const isActive =
                currentStep === index;

              const isCompleted =
                currentStep > index;

              return (
                <div
                  className="sa-overview-step"
                  key={step.id}
                >
                  {index > 0 && (
                    <span
                      className={`sa-overview-step-line ${
                        isActive || isCompleted
                          ? "active"
                          : ""
                      }`}
                    />
                  )}

                  <button
                    type="button"
                    className={`sa-overview-step-circle ${
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
                      <Check size={16} />
                    ) : (
                      index + 1
                    )}
                  </button>

                  <span
                    className={`sa-overview-step-label ${
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

        <div className="sa-overview-form-card">
          <div className="sa-overview-accent" />

          <div className="sa-overview-form-content">

            {currentStep === 0 && (
              <>
                <div className="sa-overview-card-title">
                  <span>
                    <UserRound size={18} />
                  </span>

                  <div>
                    <h3>
                      Introduce Yourself
                    </h3>

                    <p>
                      Share your basic contact details.
                    </p>
                  </div>
                </div>

                <div className="sa-overview-fields">
                  {solarAgricultureFormFields
                    .filter((field) =>
                      [
                        "name",
                        "email",
                        "cellNumber",
                        "telephone",
                      ].includes(field.name)
                    )
                    .map((field) => (
                      <label
                        className="sa-overview-field"
                        key={field.id}
                      >
                        <span>
                          {field.label}

                          {field.required && (
                            <em>*</em>
                          )}
                        </span>

                        <div className="sa-overview-input-wrap">
                          <span>
                            {renderIcon(field.name)}
                          </span>

                          <input
                            type={field.type}
                            placeholder={
                              field.placeholder
                            }
                            value={
                              formData[
                                field.name as keyof AgricultureFormState
                              ]
                            }
                            onChange={(e) =>
                              handleChange(
                                field.name as keyof AgricultureFormState,
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
                <div className="sa-overview-card-title">
                  <span>
                    <MapPin size={18} />
                  </span>

                  <div>
                    <h3>
                      Installation Location
                    </h3>

                    <p>
                      Tell us where the solar tubewell
                      or agricultural system is required.
                    </p>
                  </div>
                </div>

                <div className="sa-overview-fields">
                  {solarAgricultureFormFields
                    .filter((field) =>
                      [
                        "address",
                        "city",
                      ].includes(field.name)
                    )
                    .map((field) => (
                      <label
                        className="sa-overview-field"
                        key={field.id}
                      >
                        <span>
                          {field.label}

                          {field.required && (
                            <em>*</em>
                          )}
                        </span>

                        <div className="sa-overview-input-wrap">
                          <span>
                            {renderIcon(field.name)}
                          </span>

                          <input
                            type={field.type}
                            placeholder={
                              field.placeholder
                            }
                            value={
                              formData[
                                field.name as keyof AgricultureFormState
                              ]
                            }
                            onChange={(e) =>
                              handleChange(
                                field.name as keyof AgricultureFormState,
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
              <div className="sa-overview-ready">
                <BadgeCheck size={28} />

                <div>
                  <h3>
                    Project Details Ready
                  </h3>

                  <p>
                    Your solar agricultural inquiry is
                    ready for technical review and
                    product selection.
                  </p>
                </div>
              </div>
            )}

            <div className="sa-overview-actions">
              {currentStep <
                solarAgricultureOverviewData.steps.length -
                  1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                >
                  Next Step
                  <ArrowRight size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "Solar Agriculture Form:",
                      formData
                    )
                  }
                >
                  {
                    solarAgricultureOverviewData.primaryButton
                  }

                  <ArrowRight size={15} />
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SolarAgricultureOverview;
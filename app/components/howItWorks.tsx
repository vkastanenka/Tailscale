// components
import Button from "./button";

// utilities
import cx from "classnames";

interface HowItWorks {
  sanityData: {
    howItWorksHeading: string;
    howItWorksSubheading: string;
  };
}

const HowItWorks = ({ sanityData, ...props }: HowItWorks): JSX.Element => {
  return (
    <section
      className={cx("overflow-hidden", "p-top-115", "p-bottom-175")}
      {...props}
    >
      <div className={cx("space-y-8", "md:!space-y-10", "container")}>
        {/* TODO: Create element animation */}
        <div className={cx("flex", "justify-center", "w-full")}>
          <div
            className={cx(
              "w-[654px]",
              "h-[508px]",
              "bg-black-bg",
              "rounded-xl"
            )}
          />
        </div>
        <div className={cx("text-center")}>
          <h2
            className={cx(
              "t-h2",
              "text-black",
              "mb-3",
              "md:mb-6",
              "mx-auto",
              "max-w-[782px]"
            )}
          >
            {sanityData.howItWorksHeading}
          </h2>
          <div
            className={cx(
              "t-b20",
              "text-body-black",
              "mb-5",
              "lg:mb-[65px]",
              "mx-auto",
              "max-w-[530px]"
            )}
          >
            <div className={cx("content-prose")}>
              <p>{sanityData.howItWorksSubheading}</p>
            </div>
          </div>
          <div className={cx("w-full", "xs:w-auto", "flex", "justify-center")}>
            <div
              className={cx(
                "flex",
                "w-full",
                "flex-col",
                "gap-y-4",
                "xs:w-auto",
                "xs:flex-row",
                "xs:items-center",
                "xs:space-x-5",
                "md:space-x-[30px]"
              )}
            >
              <Button variant="underlined">{`How it works`}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

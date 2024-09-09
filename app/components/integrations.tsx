// components
import Button from "./button";

// utils
import cx from "classnames";

interface Integrations {
  sanityData: {
    integrationsHeading1: string;
    integrationsHeading2: string;
  };
}

const Integrations = ({ sanityData, ...props }: Integrations): JSX.Element => {
  return (
    <section
      className={cx("overflow-hidden", "p-top-175", "p-bottom-175")}
      {...props}
    >
      <div
        className={cx(
          "space-y-14",
          "md:!space-y-20",
          "lg:!space-y-[100px]",
          "container"
        )}
      >
        <div className={cx("text-left", "mx-0")}>
          <h2
            className={cx(
              "t-h3",
              "text-black",
              "mb-3",
              "md:mb-6",
              "max-w-[670px]"
            )}
          >
            {`${sanityData.integrationsHeading1} `}
            <span className={cx("text-subheading-black")}>
              {sanityData.integrationsHeading2}
            </span>
          </h2>
        </div>
        {/* TODO: Shuffling tileboards */}
        {/* <div className={cx('grid', 'gap-[5px]', 'grid-cols-3')}></div> */}
        <div className={cx("text-left", "mx-0")}>
          <div className={cx("w-full", "xs:w-auto", "flex", "justify-start")}>
            <div
              className={cx(
                "flex",
                "w-full",
                "flex-col",
                "gap-y-4",
                "xs:w-auto",
                "xs:flex-row",
                "xs:items-center",
                "xs:space-x-5"
                // 'md:-space-x-[30px]'
              )}
            >
              <Button>{`Operating systems`}</Button>
              <Button variant="underlined">{`Identity providers`}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

// components
import Button from "./button";
import Image from "next/image";

// utils
import cx from "classnames";
import { urlFor } from "@/sanity/lib/image";

// types
import { SanityImg } from "@/app/types/sanity";

interface Homelab {
  sanityData: {
    homelabTitle: string;
    homelabHeading: string;
    homelabSubheading: string;
    homelabImage: SanityImg;
  };
}

const Homelab = ({ sanityData, ...props }: Homelab): JSX.Element => {
  return (
    <section
      className={cx("overflow-hidden", "p-top-0", "p-bottom-0")}
      {...props}
    >
      <div className={cx("space-y-8", "md:!space-y-20", "container")}>
        <div className={cx("text-center")}>
          <div className={cx("justify-center", "text-center")}>
            <h2 className={cx("t-subheading", "mb-5", "text-subheading-black")}>
              {sanityData.homelabTitle}
            </h2>
          </div>
          <h3
            className={cx("t-h3", "text-black", "mb-3", "md:mb-6", "mx-auto")}
          >
            {sanityData.homelabHeading}
          </h3>
          <div
            className={cx(
              "t-b20",
              "text-body-black",
              "mb-5",
              "lg:mb-[72px]",
              "mx-auto",
              "max-w-[583px]"
            )}
          >
            <div className={cx("content-prose")}>
              <p>{sanityData.homelabSubheading}</p>
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
              <Button>{`Download for free`}</Button>
              <Button variant="underlined">{`Learn more`}</Button>
            </div>
          </div>
        </div>
        <div className={cx("h-full", "w-full")}>
          <div className={cx("w-full")}>
            <Image
              alt={sanityData.homelabImage.altText}
              src={urlFor(sanityData.homelabImage.url).url()}
              width={sanityData.homelabImage.dimensions.width}
              height={sanityData.homelabImage.dimensions.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homelab;

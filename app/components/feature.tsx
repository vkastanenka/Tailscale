"use client";

// Components
import Button from "./button";
import Image from "next/image";

// Types
import { HTMLAttributes } from "react";
import { SanityImg } from "@/app/types/sanity";

// Utilities
import cx from "classnames";
import { urlFor } from "@/sanity/lib/image";
import { useInView } from "react-intersection-observer";

interface Feature {
  sanityData: {
    featureHeading: string;
    featureHeadingMaxWidth: string;
    featureSubheading: string;
    featureSubheadingMaxWidth: string;
    featureImage: SanityImg;
  };
}

const Feature = ({
  sanityData,
  children,
  className,
  ...props
}: Feature & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const { ref, inView } = useInView();

  return (
    <section
      className={cx("overflow-hidden", "p-bottom-190", className)}
      {...props}
    >
      <div className={cx("space-y-8", "md:!space-y-20", "container")}>
        <div
          ref={ref}
          className={cx(
            "text-left",
            "mx-0",
            "transition-transform",
            "ease-in-out",
            "duration-300",
            "delay-[25ms]"
          )}
          style={{
            transform: `translateX(${inView ? "40px" : "0px"}) translateZ(0px)`,
          }}
        >
          <h2
            className={cx("t-h3", "text-black", "mb-3", "md:mb-6")}
            style={{ maxWidth: sanityData.featureHeadingMaxWidth }}
          >
            {sanityData.featureHeading}
          </h2>
          <div
            className={cx(
              "t-b18",
              "text-body-black",
              "mb-5",
              "lg:mb-10",
              "max-w-[750px]"
            )}
            style={{ maxWidth: sanityData.featureSubheadingMaxWidth }}
          >
            <div className={cx("content-prose")}>
              <p>{sanityData.featureSubheading}</p>
            </div>
          </div>
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
                "xs:space-x-5",
                "md:space-x-[30px]"
              )}
            >
              <Button variant="underlined">{`Button Text`}</Button>
            </div>
          </div>
        </div>
        <Image
          alt={sanityData.featureImage.altText}
          src={urlFor(sanityData.featureImage.url).url()}
          width={sanityData.featureImage.dimensions.width}
          height={sanityData.featureImage.dimensions.height}
        />
      </div>
      {children}
    </section>
  );
};

export default Feature;

export const FeatureGradient = ({ ...props }): JSX.Element => {
  return (
    <div
      className={cx(
        "absolute",
        "bottom-0",
        "left-0",
        "right-0",
        "h-[200px]",
        "w-full",
        "bg-gradient-to-b",
        "from-white",
        "to-grey-1"
      )}
      {...props}
    />
  );
};

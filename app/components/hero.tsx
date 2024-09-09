"use client";

// components
import Button from "./button";
import Image from "next/image";

// utils
import cx from "classnames";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

// types
import { SanityImg } from "@/app/types/sanity";

interface Home {
  sanityData: {
    heroHeading1: string;
    heroHeading2: string;
    heroHeadingList: { hex: string; text: string }[];
    heroSubheading: string;
    heroImageDesktop: SanityImg;
    heroImageMobile: SanityImg;
    heroCompanyTrustHeading: string;
    companyLogos: SanityImg[];
  };
}

const Hero = ({ sanityData, ...props }: Home): JSX.Element => {
  const [headingListItemIdx, setHeadingListItemIdx] = useState<number>(0);
  const [currentHeadingListItem, setCurrentHeadingListItem] = useState<{
    hex: string;
    text: string;
  }>(sanityData.heroHeadingList[0]);

  useEffect(() => {
    const headingListInterval = setInterval(() => {
      setHeadingListItemIdx((prevState) =>
        prevState === sanityData.heroHeadingList.length - 1 ? 0 : prevState + 1
      );
    }, 2000);

    return () => clearInterval(headingListInterval);
  }, [sanityData.heroHeadingList.length]);

  useEffect(() => {
    setCurrentHeadingListItem(sanityData.heroHeadingList[headingListItemIdx]);
  }, [sanityData.heroHeadingList, headingListItemIdx]);

  return (
    <section
      className={cx("overflow-hidden", "bg-grey-2", "p-bottom-75")}
      {...props}
    >
      <div
        className={cx(
          "space-y-8",
          "md:!space-y-[65px]",
          "container",
          "is-wide"
        )}
      >
        <div
          className={cx(
            "space-y-10",
            "pt-24",
            "lg:space-y-[115px]",
            "lg:pt-[185px]"
          )}
        >
          <div className={cx("container")}>
            <div
              className={cx(
                "flex",
                "flex-col",
                "justify-between",
                "gap-5",
                "lg:flex-row",
                "lg-items:end"
              )}
            >
              <h1
                className={cx(
                  "w-full",
                  "text-center",
                  "lg:max-w-[750px]",
                  "lg:text-left"
                )}
              >
                <span
                  className={cx(
                    "relative",
                    "inline-flex",
                    "max-w-[90%]",
                    "flex-wrap",
                    "items-center",
                    "justify-center",
                    "gap-3",
                    "gap-y-2",
                    "overflow-hidden",
                    "text-heading-black",
                    "xxs:max-w-[300px]",
                    "xs:max-w-none",
                    "lg:inline"
                  )}
                >
                  <span className={cx("t-72", "font-medium")}>
                    {sanityData.heroHeading1}
                    <span className={cx("ml-1.5", "md:hidden")}>
                      {sanityData.heroHeading2}
                    </span>
                  </span>
                  <div
                    className={cx(
                      "relative",
                      "inline-flex",
                      "w-auto",
                      "items-center",
                      "gap-4"
                    )}
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    <span
                      className={cx(
                        "t-72",
                        "hidden",
                        "flex-1",
                        "font-medium",
                        "md:inline-block"
                      )}
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      {sanityData.heroHeading2}
                    </span>
                    <div
                      className={cx(
                        "t-52",
                        "flex",
                        "overflow-hidden",
                        "rounded-[10px]",
                        "px-3",
                        "py-2",
                        "font-medium",
                        "text-white",
                        "md:px-5",
                        "md:py-2.5",
                        "relative"
                      )}
                      style={{
                        backgroundColor: currentHeadingListItem.hex,
                      }}
                    >
                      <div
                        key={currentHeadingListItem.text}
                        style={{
                          animation: "fadeInUp 0.5s",
                        }}
                      >
                        {currentHeadingListItem.text}
                      </div>
                    </div>
                  </div>
                </span>
              </h1>
              <div
                className={cx(
                  "text-left",
                  "mx-0",
                  "mx-auto",
                  "md:max-w-[441px]",
                  "lg:mx-0"
                )}
              >
                <div
                  className={cx("t-b20", "text-body-black", "mb-5", "lg:mb-9")}
                >
                  <div className={cx("content-prose")}>
                    <p>{sanityData.heroSubheading}</p>
                  </div>
                </div>
                <div
                  className={cx("w-full", "xs:w-auto", "flex", "justify-start")}
                >
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
                    <Button>{`Get Started`}</Button>
                    <Button variant="underlined">{`Contact Sales`}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx(
              "relative",
              "mx-auto",
              "md:aspect-[1360/725]",
              "w-full",
              "max-w-[1360px]",
              "overflow-hidden",
              "rounded-2xl",
              "bg-black-4",
              "will-change-transform"
            )}
          >
            <Image
              priority
              alt={sanityData.heroImageDesktop.altText}
              src={urlFor(sanityData.heroImageDesktop.url).url()}
              className={cx(
                "hidden",
                "md:block",
                "rounded-2xl",
                "overflow-hidden",
                "mx-auto"
              )}
              width={sanityData.heroImageDesktop.dimensions.width}
              height={sanityData.heroImageDesktop.dimensions.height}
            />
            <Image
              priority
              alt={sanityData.heroImageMobile.altText}
              src={urlFor(sanityData.heroImageMobile.url).url()}
              className={cx(
                "block",
                "md:hidden",
                "w-full",
                "rounded-2xl",
                "overflow-hidden",
                "mx-auto"
              )}
              width={sanityData.heroImageMobile.dimensions.width}
              height={sanityData.heroImageMobile.dimensions.height}
            />
          </div>
        </div>
        <div>
          <h2
            className={cx(
              "body-new",
              "!tracking-wider",
              "font-mdio",
              "font-medium",
              "uppercase",
              "mb-4",
              "text-center",
              "text-subheading-black",
              "md:mb-8"
            )}
          >
            {sanityData.heroCompanyTrustHeading}
          </h2>
          <div className={cx("relative", "w-full")}>
            <div
              className={cx("marquee-container", "logo-marquee", "w-full")}
              style={
                {
                  "--play": "running",
                  "--direction": "normal",
                  "--duration": "88.88s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                } as React.CSSProperties
              }
            >
              <div
                className={cx("marquee")}
                style={
                  {
                    "--play": "running",
                    "--direction": "normal",
                    "--duration": "88.88s",
                    "--delay": "0s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                  } as React.CSSProperties
                }
              >
                <div className={cx("initial-child-container")}>
                  {sanityData.companyLogos.map((logo, i) => (
                    <div
                      key={i}
                      className={cx("child")}
                      style={
                        {
                          "--transform": "none",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className={cx(
                          "flex",
                          "w-auto",
                          "max-w-[150px]",
                          "items-center",
                          "md:max-w-none"
                        )}
                      >
                        <Image
                          priority
                          alt={logo.altText}
                          src={urlFor(logo.url).url()}
                          className={cx("mx-auto")}
                          width={logo.dimensions.width}
                          height={logo.dimensions.height}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={cx("marquee")}
                style={
                  {
                    "--play": "running",
                    "--direction": "normal",
                    "--duration": "88.88s",
                    "--delay": "0s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                  } as React.CSSProperties
                }
              >
                <div className={cx("initial-child-container")}>
                  {sanityData.companyLogos.map((logo, i) => (
                    <div
                      key={i}
                      className={cx("child")}
                      style={
                        {
                          "--transform": "none",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className={cx(
                          "flex",
                          "w-auto",
                          "max-w-[150px]",
                          "items-center",
                          "md:max-w-none"
                        )}
                      >
                        <Image
                          priority
                          alt={logo.altText}
                          src={urlFor(logo.url).url()}
                          className={cx("mx-auto")}
                          width={logo.dimensions.width}
                          height={logo.dimensions.height}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

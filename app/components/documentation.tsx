// components
import Button from "./button";
import Image from "next/image";

// utils
import cx from "classnames";
import { urlFor } from "@/sanity/lib/image";

// types
import { SanityImg } from "@/app/types/sanity";

interface Documentation {
  sanityData: {
    workflowHeading: string;
    workflowSubheading: string;
    workflowImage: SanityImg;
    quickstartTitle: string;
    quickstartHeading: string;
    quickstartSubheading: string;
    quickstartImage: SanityImg;
  };
}

const Documentation = ({
  sanityData,
  ...props
}: Documentation): JSX.Element => {
  return (
    <section
      className={cx("overflow-hidden", "p-top-175", "p-bottom-0")}
      {...props}
    >
      <div className={cx("space-y-8", "md:!space-y-20", "container")}>
        <div
          className={cx(
            "flex",
            "flex-col",
            "justify-between",
            "gap-6",
            "md:flex-row"
          )}
        >
          <div className={cx("max-w-[840px]", "flex-[0.75]")}>
            <div
              className={cx(
                "flex",
                "h-full",
                "flex-col",
                "justify-between",
                "rounded-xl",
                "bg-black-4",
                "pb-[42px]",
                "text-white"
              )}
            >
              <div className={cx("px-5", "px-8", "xl:p-[50px]")}>
                <div className={cx("max-w-[676px]")}>
                  <h3 className={cx("t-36")}>{sanityData.workflowHeading}</h3>
                  <div
                    className={cx(
                      "t-20",
                      "mt-[15px]",
                      "text-white-70",
                      "opacity-70"
                    )}
                  >
                    {sanityData.workflowSubheading}
                  </div>
                  <div className={cx("mt-8")}>
                    <Button>{`See docs`}</Button>
                  </div>
                </div>
              </div>
              <div className={cx("pl-5", "xl:pl-[50px]")}>
                <Image
                  alt={sanityData.workflowImage.altText}
                  src={urlFor(sanityData.workflowImage.url).url()}
                  width={sanityData.workflowImage.dimensions.width}
                  height={sanityData.workflowImage.dimensions.height}
                />
              </div>
            </div>
          </div>
          <div className={cx("flex-[0.35]", "md:max-w-[400px]")}>
            <a
              className={cx("group", "w-full")}
              href="https://tailscale.com/kb/1017/install"
            >
              <div
                className={cx(
                  "aspect-[400/429]",
                  "w-full",
                  "overflow-hidden",
                  "rounded-xl",
                  "bg-green-1",
                  "will-change-transform"
                )}
              >
                <div className={cx("w-400", "h-430", "bg-yellow-1")}></div>
              </div>
              <div
                className={cx("mt-5", "px-[5px]", "md:mt-10", "md:px-[15px]")}
              >
                <div
                  className={cx(
                    "t-16",
                    "text-subheading-black",
                    "font-medium",
                    "uppercase"
                  )}
                >{sanityData.quickstartTitle}</div>
                <h3
                  className={cx("t-24", "mt-2", "md:mt-[10px]")}
                >{sanityData.quickstartHeading}</h3>
                <div className={cx("mt-3", "md:mt-[30px]")}>
                  <div
                    className={cx(
                      "group",
                      "relative",
                      "inline-flex",
                      "shrink-0",
                      "items-center",
                      "justify-center",
                      "gap-[11px]",
                      "border-b-[1.5px]",
                      "border-transparent",
                      "pb-0.5",
                      "pb-1",
                      "font-medium",
                      "leading-[1.43]",
                      "tracking-[-0.17px]",
                      "text-black"
                    )}
                  >
                    <span
                      className={cx("transition-colors")}
                    >{sanityData.quickstartSubheading}</span>
                    {/* <span
                        className={cx(
                          'block',
                          'will-change-transform',
                          'group-hover:animate-bounceX'
                        )}
                      >
                        <svg>svg</svg>
                      </span> */}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation
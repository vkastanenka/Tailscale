// Components
import Button from "./components/button";
import Hero from "@/app/components/hero";
import HowItWorks from "./components/howItWorks";
import Feature, { FeatureGradient } from "./components/feature";
import Integrations from "./components/integrations";
import Homelab from "./components/homelab";
import Testimonials from "./components/testimonials";
import Benefits from "./components/benefits";

// Utilities
import cx from "classnames";

// Sanity
import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const homePageData = await client.fetch(HOME_PAGE_QUERY);

  // console.log(homePageData.benefitsList)

  return (
    <main className={cx("mt-[-60px]", "lg:mt-[-66px]")}>
      <Hero
        sanityData={{
          heroHeading1: homePageData.heroHeading1,
          heroHeading2: homePageData.heroHeading2,
          heroHeadingList: homePageData.heroHeadingList,
          heroSubheading: homePageData.heroSubheading,
          heroImageDesktop: homePageData.heroImageDesktop,
          heroImageMobile: homePageData.heroImageMobile,
        }}
      />
      <HowItWorks
        sanityData={{
          howItWorksHeading: homePageData.howItWorksHeading,
          howItWorksSubheading: homePageData.howItWorksSubheading,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature1Heading,
          featureHeadingMaxWidth: homePageData.feature1HeadingMaxWidth,
          featureSubheading: homePageData.feature1Subheading,
          featureSubheadingMaxWidth: homePageData.feature1SubheadingMaxWidth,
          featureImage: homePageData.feature1Image,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature2Heading,
          featureHeadingMaxWidth: homePageData.feature2HeadingMaxWidth,
          featureSubheading: homePageData.feature2Subheading,
          featureSubheadingMaxWidth: homePageData.feature2SubheadingMaxWidth,
          featureImage: homePageData.feature2Image,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature3Heading,
          featureHeadingMaxWidth: homePageData.feature3HeadingMaxWidth,
          featureSubheading: homePageData.feature3Subheading,
          featureSubheadingMaxWidth: homePageData.feature3SubheadingMaxWidth,
          featureImage: homePageData.feature3Image,
        }}
      />
      <Feature
        sanityData={{
          featureHeading: homePageData.feature4Heading,
          featureHeadingMaxWidth: homePageData.feature4HeadingMaxWidth,
          featureSubheading: homePageData.feature4Subheading,
          featureSubheadingMaxWidth: homePageData.feature4SubheadingMaxWidth,
          featureImage: homePageData.feature4Image,
        }}
        className={cx("relative")}
      >
        <FeatureGradient />
      </Feature>
      <Integrations
        sanityData={{
          integrationsHeading1: homePageData.workflowHeading1,
          integrationsHeading2: homePageData.workflowHeading2,
        }}
      />
      <Homelab
        sanityData={{
          homelabHeading: homePageData.homelabHeading,
          homelabImage: homePageData.homelabImage,
          homelabSubheading: homePageData.homelabSubheading,
          homelabTitle: homePageData.homelabTitle,
        }}
      />
      <Testimonials />
      <Benefits
        sanityData={{
          benefitsHeading: homePageData.benefitsHeading,
          benefitsList: homePageData.benefitsList,
          accoladesList: homePageData.accoladesList,
        }}
      />
      <Security />
      <Documentation />
    </main>
  );
}

const Security = ({ ...props }): JSX.Element => {
  const SecurityFeature = () => {
    return (
      <div className={cx("max-w-[150px]", "lg:w-auto", "lg:max-w-[180px]")}>
        {/* TODO: Add Images */}
        <div className={cx("bg-heading-black", "w-[180px]", "w-[211px]")} />
      </div>
    );
  };

  return (
    <section
      className={cx("overflow-hidden", "bg-grey-2", "p-top-75", "p-bottom-75")}
      {...props}
    >
      <div className={cx("space-y-8", "md:!space-y-20", "container")}>
        <div
          className={cx(
            "relative",
            "mx-auto",
            "flex",
            "max-w-[1160px]",
            "flex-col",
            "items-center",
            "justify-between",
            "gap-6",
            "gap-y-12",
            "md-large:flex-row"
          )}
        >
          <div
            className={cx("text-left", "mx-0", "flex-1", "md:max-w-[632px]")}
          >
            <h2
              className={cx(
                "t-h2",
                "text-black",
                "mb-3",
                "md:mb-6",
                "max-w-[622px]"
              )}
            >{`Our commitment to security`}</h2>
            <div
              className={cx(
                "t-b20",
                "text-body-black",
                "mb-5",
                "lg:mb-10",
                "max-w-[623px]"
              )}
            >
              <div className={cx("content-prose")}>
                <p>{`We are committed to always safeguarding your data. Every connection is encrypted end-to-end using WireGuard®, a modern VPN protocol designed for usability, performance, and security. Stay up-to-date on updates via our security bulletin below.`}</p>
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
                <Button>{`Learn more`}</Button>
                <Button variant="underlined">{`Security bulletins`}</Button>
              </div>
            </div>
          </div>
          <div
            className={cx(
              "flex",
              "max-w-[384px]",
              "flex-1",
              "flex-col",
              "gap-4",
              "md:gap-6",
              "md-large:flex-row"
            )}
          >
            <div
              className={cx("flex", "gap-4", "md:gap-6", "md-large:flex-col")}
              style={{
                transform: "translateX(0px) translateY(20px) translateZ(0px)",
              }}
            >
              <SecurityFeature />
              <SecurityFeature />
              <SecurityFeature />
            </div>{" "}
            <div
              className={cx("flex", "gap-4", "md:gap-6", "md-large:flex-col")}
              style={{
                transform: "translateX(0px) translateY(-20px) translateZ(0px)",
              }}
            >
              <SecurityFeature />
              <SecurityFeature />
              <SecurityFeature />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Documentation = ({ ...props }): JSX.Element => {
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
                // 'h-full',
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
                  <h3
                    className={cx("t-36")}
                  >{`Fits into your preferred workflow`}</h3>
                  <div
                    className={cx(
                      "t-20",
                      "mt-[15px]",
                      "text-white-70",
                      "opacity-70"
                    )}
                  >{`With 100+ integrations, Tailscale works with all your favorite tools. Provision resources that automatically join the tailnet using Terraform or Pulumi. Integrate ACL management into your existing GitOps workflow. Our docs will help you get started on building your tailnet today.`}</div>
                  <div className={cx("mt-8")}>
                    <Button>{`See docs`}</Button>
                  </div>
                </div>
              </div>
              {/* <div className={cx('pl-5', 'xl:pl-[50px]')}>
                <div
                  className={cx(
                    'bg-white',
                    'w-[790px]',
                    'h-[215px]',
                    'rounded-xl'
                  )}
                />
              </div> */}
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
                >{`GUIDES`}</div>
                <h3
                  className={cx("t-24", "mt-2", "md:mt-[10px]")}
                >{`Tailscale quickstart guide`}</h3>
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
                    >{`Read guide`}</span>
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

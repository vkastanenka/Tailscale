// utils
import cx from "classnames";

const Testimonials = ({ ...props }): JSX.Element => {
  return (
    <section
      className={cx(
        "overflow-hidden",
        "bg-black-bg",
        "p-top-185",
        "p-bottom-185"
      )}
      {...props}
    >
      <div className={cx("space-y-8", "md:!space-y-20")}>
        <div className={cx("relative")}>
          <div
            className={cx(
              "absolute",
              "inset-0",
              "z-10",
              "m-auto",
              "aspect-[1051/375]",
              "w-full",
              "max-w-[1051px]",
              "rounded-[300px]",
              "blur-[97px]",
              "bg-black-bg"
            )}
          />
          <div
            className={cx(
              "absolute",
              "inset-0",
              "z-20",
              "m-auto",
              "aspect-[639/229]",
              "w-full",
              "max-w-[639px]",
              "rounded-[300px]",
              "blur-[52px]",
              "bg-black-bg"
            )}
          />
          <div
            className={cx(
              "absolute",
              "inset-0",
              "flex",
              "items-center",
              "justify-center"
            )}
          >
            <h4
              className={cx(
                "t-h3",
                "z-30",
                "rounded-[10px]",
                "bg-heading-black",
                "px-[30px]",
                "py-[25px]",
                "text-center",
                "text-white"
              )}
            >
              Developer
              <span className={cx("text-white")}>approved</span>
            </h4>
          </div>
          <div className={cx("space-y-[45px]")}>
            <div
              className={cx("marquee-container", "twitter-marquee")}
              style={
                {
                  "--pause-on-hover": "running",
                  "--pause-on-click": "normal",
                  "--width": "100%",
                  "--transform": "none",
                } as React.CSSProperties
              }
            >
              <div
                className={cx("marquee")}
                style={
                  {
                    "--play": "running",
                    "--direction": "reverse",
                    "--duration": "242s",
                    "--delay": "0s",
                    "--iteration-count": "infinite",
                    "--min-width": "100%",
                  } as React.CSSProperties
                }
              >
                <div className={cx("initial-child-container")}>
                  <div
                    className={cx("child")}
                    style={
                      {
                        "--transform": "none",
                      } as React.CSSProperties
                    }
                  >
                    {/* Testimonial card - refactor */}
                    <div
                      className={cx(
                        "mx-5",
                        "flex",
                        "h-full",
                        "w-[400px]",
                        "flex-col",
                        "justify-between",
                        "rounded-xl",
                        "border",
                        "p-5",
                        "border-[#ffffff14]"
                      )}
                    >
                      <div>
                        <div
                          className={cx(
                            "flex",
                            "items-center",
                            "gap-[9px]",
                            "whitespace-normal"
                          )}
                        >
                          <div
                            className={cx(
                              "relative",
                              "h-8",
                              "w-8",
                              "shrink-0",
                              "overflow-hidden",
                              "rounded"
                            )}
                          >
                            {/* User image */}
                            {/* <Image
                              priority
                              alt={logo.altText}
                              src={urlFor(logo.url).url()}
                              className={cx("mx-auto")}
                              width={logo.dimensions.width}
                              height={logo.dimensions.height}
                            /> */}
                          </div>
                          <div>
                            {/* User Handle */}
                            <div
                              className={cx(
                                "flex",
                                "items-center",
                                "gap-2",
                                "whitespace-normal"
                              )}
                            >
                              <div className={cx("t-15", "text-white")}>
                                @user-handle
                              </div>
                              <span>
                                <svg
                                  width="3"
                                  height="4"
                                  viewBox="0 0 3 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="1.43213"
                                    cy="1.79932"
                                    r="1.43213"
                                    fill="white"
                                    fill-opacity="0.14"
                                  ></circle>
                                </svg>
                              </span>
                            </div>
                            {/* User Name */}
                            <div className={cx("t-13", "text-[#fff6]")}>
                              User Name
                            </div>
                          </div>
                        </div>
                        {/* Review */}
                        <div
                          className={cx(
                            "mt-[13px]",
                            "whitespace-normal",
                            "leading-[1.39]",
                            "tracking-[-0.48px]",
                            "text-white"
                          )}
                        >
                          Setting up a mesh VPN on all my devices was so damn
                          easy thanks to{" "}
                          <span className={cx("text-#a4a4a4")}>@Tailscale</span>
                          . A tightly sealed network of remote devices with
                          almost no configuration and also ease of adding a new
                          device to the mesh is just what I wanted. Amazing work{" "}
                          <span className={cx("text-#a4a4a4")}>@Tailscale</span>
                          !
                        </div>
                      </div>
                      <div
                        className={cx(
                          "t-13",
                          "mt-[21px]",
                          "flex",
                          "items-center",
                          "gap-4",
                          "text-[#ffffff8a]"
                        )}
                      >
                        <div
                          className={cx(
                            "t-13",
                            "mt-[21px]",
                            "flex",
                            "items-center",
                            "gap-4",
                            "text-[#ffffff8a]"
                          )}
                        >
                          <div className={cx("flex", "items-center", "gap-15")}>
                            <div className={cx("w-4", "shrink-0")}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 17"
                              >
                                <use href="/sprite.svg#reply"></use>
                              </svg>
                            </div>
                            Reply
                          </div>
                          <div>Share</div>
                          <div className={cx("mb-2")}>...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

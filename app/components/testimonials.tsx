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
        <div className={cx("relative")}></div>
      </div>
    </section>
  );
};

export default Testimonials;

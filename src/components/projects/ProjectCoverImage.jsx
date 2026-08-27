const APP_IMAGE_BASE = "/projects/apps";

const mobileFrameClass =
  "flex min-h-[480px] items-center justify-center overflow-hidden bg-[#0a1520] px-6 py-8 sm:min-h-[540px] lg:min-h-[620px]";

const webFrameClass =
  "flex w-full items-center justify-center overflow-hidden bg-[#0a1520] px-4 py-6 sm:px-6 sm:py-8";

const webCardFrameClass =
  "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#0a1520]";

const ProjectCoverImage = ({
  src,
  alt,
  type = "Web",
  variant = "default",
  className = "",
  imgClassName = "",
}) => {
  const isMobile = type === "Mobile";

  if (isMobile) {
    return (
      <div className={`${mobileFrameClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          className={`max-h-[min(72vh,640px)] w-auto max-w-full object-contain transition duration-700 ease-out ${imgClassName}`}
        />
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`${webCardFrameClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover object-top transition duration-700 ease-out ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div className={`${webFrameClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full max-w-full object-contain transition duration-700 ease-out ${imgClassName}`}
      />
    </div>
  );
};

export { APP_IMAGE_BASE };
export default ProjectCoverImage;

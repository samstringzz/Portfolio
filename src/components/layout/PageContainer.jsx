const pageLayoutClass = "mx-auto w-full max-w-page px-3 sm:px-4 lg:px-6";

const PageContainer = ({ children, className = "", as: Tag = "div" }) => {
  return (
    <Tag className={`${pageLayoutClass}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
};

export { pageLayoutClass };
export default PageContainer;

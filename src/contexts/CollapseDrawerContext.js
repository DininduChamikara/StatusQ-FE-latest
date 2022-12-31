import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
// hooks
import useResponsive from "../hooks/useResponsive";

// ----------------------------------------------------------------------

const initialState = {
  isCollapse: false,
  onToggleCollapse: () => {},
};

const CollapseDrawerContext = createContext(initialState);

// ----------------------------------------------------------------------

CollapseDrawerProvider.propTypes = {
  children: PropTypes.node,
};

function CollapseDrawerProvider({ children }) {
  const isDesktop = useResponsive("up", "lg");

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    if (!isDesktop) {
      setCollapse(false);
    }
  }, [isDesktop]);

  const handleToggleCollapse = () => {
    console.log("clicked");
    setCollapse(true);
  };

  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapse: collapse,
        onToggleCollapse: handleToggleCollapse,
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  );
}

export { CollapseDrawerProvider, CollapseDrawerContext };

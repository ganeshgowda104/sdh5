

import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  propFlex,
  package2,
  propAlignSelf,
  quickOrder,
  fastTrackYourOrdersWithQuick,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const quickOrderStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`absolute top-0 left-0 w-[322px] h-[118px] text-left text-sm text-gray-900 font-comforter ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-0 left-0 rounded-8xs bg-gray-00 w-[322px] h-[118px]" />
      <div className="absolute top-[27px] left-[30px] w-[248px] h-16">
        <b
          className="absolute top-0 left-[56px] leading-[20px] uppercase inline-block w-48"
          style={quickOrderStyle}
        >
          {quickOrder}
        </b>
        <div className="absolute top-[24px] left-[56px] leading-[20px] text-gray-600 inline-block w-48">
          {fastTrackYourOrdersWithQuick}
        </div>
        <img
          className="absolute top-0 left-0 w-10 h-10"
          alt=""
          src={package2}
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  package2: PropTypes.string,
  quickOrder: PropTypes.string,
  fastTrackYourOrdersWithQuick: PropTypes.string,

  
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent;

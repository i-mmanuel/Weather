import React, { Fragment } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

import _ from "lodash";

const Chart = (props) => {
  let average = (data) => {
    return _.round(_.sum(data) / data.length);
  };

  return (
    <Fragment>
      <Sparklines height={30} width={70} data={props.data}>
        <SparklinesLine color={props.colour}></SparklinesLine>
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {average(props.data)}
        {props.units}
      </div>
    </Fragment>
  );
};

export default Chart;

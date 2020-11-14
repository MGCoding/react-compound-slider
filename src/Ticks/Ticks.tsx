import React from 'react';

import { TicksProps } from './types';
import { LinearScale } from '../scales/LinearScale';

const defaultGetEventData = () => ({ value: 0, percent: 0 });

export class Ticks extends React.Component<TicksProps> {
  public render() {
    const {
      children,
      values,
      scale = new LinearScale(),
      count = 10,
      getEventData = defaultGetEventData,
      activeHandleID = '',
    } = this.props;

    const ticks = (values ? values : scale.getTicks(count)).map((value) => ({
      id: `$$-${value}`,
      value,
      percent: scale.getValue(value),
    }));

    return children({ getEventData, activeHandleID, ticks });
  }
}

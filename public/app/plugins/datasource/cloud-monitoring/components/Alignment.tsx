import React, { FC } from 'react';
import _ from 'lodash';
import { SelectableValue } from '@grafana/data';
import { LABEL_WIDTH, SELECT_WIDTH } from '../constants';
import { CustomMetaData, MetricQuery } from '../types';
import { AlignmentFunction, AlignmentPeriod, AlignmentPeriodLabel, Field, Row } from '.';
import CloudMonitoringDatasource from '../datasource';

export interface Props {
  onChange: (query: MetricQuery) => void;
  query: MetricQuery;
  templateVariableOptions: Array<SelectableValue<string>>;
  customMetaData: CustomMetaData;
  datasource: CloudMonitoringDatasource;
}

export const Alignment: FC<Props> = ({ templateVariableOptions, onChange, query, customMetaData, datasource }) => {
  return (
    <Row
      label="Alignment function"
      labelWidth={LABEL_WIDTH}
      tooltip="The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result."
      fillComponent={<AlignmentPeriodLabel datasource={datasource} customMetaData={customMetaData} />}
    >
      <AlignmentFunction templateVariableOptions={templateVariableOptions} query={query} onChange={onChange} />
      <Field label="Alignment period">
        <AlignmentPeriod
          selectWidth={SELECT_WIDTH}
          templateVariableOptions={templateVariableOptions}
          query={query}
          onChange={onChange}
        />
      </Field>
    </Row>
  );
};

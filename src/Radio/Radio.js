// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';
import SwitchBase from '../internal/SwitchBase';
import SelectionLabel from '../internal/SelectionLabel';

export const styleSheet = createStyleSheet('Radio', (theme) => {
  return {
    default: {
      color: theme.palette.text.secondary,
    },
    checked: {
      color: theme.palette.accent[500],
    },
  };
});

export default function Radio(props, context) {
  const {
    className,
    checkedClassName,
    label,
    labelClassName,
    labelReverse,
    onChange,
    value,
    ...other
  } = props;

  const classes = context.styleManager.render(styleSheet);

  const switchProps = {
    className: classNames(classes.default, className),
    checkedClassName: classNames(classes.checked, checkedClassName),
    icon: 'radio_button_unchecked',
    checkedIcon: 'radio_button_checked',
    type: 'radio',
    value,
    onChange,
    ...other,
  };

  if (label) {
    return (
      <SelectionLabel label={label} labelReverse={labelReverse} className={labelClassName}>
        <SwitchBase
          aria-label={label}
          {...switchProps}
        />
      </SelectionLabel>
    );
  }

  return <SwitchBase {...switchProps} />;
}


Radio.propTypes = {
  checkedClassName: PropTypes.string,
  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,
  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,
  /**
   * The className to be used in an enclosing label element.
   */
  labelClassName: PropTypes.string,
  /**
   * Will reverse the order of the element and the label.
   */
  labelReverse: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Radio.defaultProps = {
  labelReverse: false,
};

Radio.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
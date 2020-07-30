const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
var {FormattedDate} = require('react-intl');

const LocaleUtils = require('../../../../MapStore2/web/client/utils/LocaleUtils');

class LabeledField extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.any,
        dateFormat: PropTypes.object,
        locale: PropTypes.string
    };

    static defaultProps = {
        label: '',
        value: null,
        locale: 'it-IT'
    };

    renderDate = (value, dateFormat) => {
        const date = new Date(value);
        return !isNaN(date.getTime()) ? (<FormattedDate locales={this.props.locale} value={date} {...dateFormat} />) : (<span/>);
    };

    renderValue = (value) => {
        return this.props.dateFormat ? this.renderDate(value, this.props.dateFormat) : value;
    };

    render() {
        return (
            <table className="labeledfield">
            <thead>
            <tr>
                <th>
                    label
                </th>
                <th>
                    {this.props.label}
                </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {this.props.label}
                    </td>
                    <td>
                        {this.props.value ? this.renderValue(this.props.value) : LocaleUtils.getMessageById(this.context.messages, "labeledfield.label_value_not_specified")}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

module.exports = LabeledField;

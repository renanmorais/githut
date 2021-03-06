import React from 'react'
import { observer } from 'mobx-react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

/**
 * Simple bootstrap select button to select the quarter
 * for the language ranking table
 * @author Fabian Beuke <mail@beuke.org>
 * @license AGPL-3.0
 */
@observer
export default class SelectQuarter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options: [
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '4', label: '4' }
            ],
            value: this.props.match.params.quarter
        }
        this.onChange = this.onChange.bind(this)
    }

    static propTypes = {
        hist: React.PropTypes.any.isRequired,
        match: React.PropTypes.any.isRequired,
        history: React.PropTypes.any.isRequired,
        location: React.PropTypes.any.isRequired
    }

    onChange(value) {
        const { match } = this.props
        this.props.hist.data.quarter = value
        this.setState({ value })
        this.props.history.push(
              "/" + match.params.event
            + "/" + match.params.year
            + "/" + value)
    }

    componentWillMount() {
        const { match } = this.props
        const value = match.params.quarter
        this.props.hist.data.quarter = value
        this.setState({ value })
    }

    render () {
        return (
        <div>
          <h4 className="section-heading">Quarter</h4>
          <Select
              onChange={this.onChange}
              options={this.state.options}
              simpleValue
              searchable={false}
              clearable={false}
              value={this.state.value}
          />
        </div>
        );
    }
}
